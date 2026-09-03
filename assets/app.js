/* ============================================================
   Moteur du site. Ne pas modifier pour ajouter un chapitre —
   voir assets/manifest.js et assets/chapters/_TEMPLATE.js.
   Chaque page a <body data-page="index|chapitre|examen">.
   ============================================================ */

const CHAPTERS = {};                 // key -> {name, short, desc, ref, bank}
function registerChapter(key, data){ CHAPTERS[key] = data; }

/* ---------- chargement des chapitres depuis le manifest ---------- */
function loadChapters(){
  const loads = CHAPTER_LIST.map(key => new Promise((res, rej) => {
    const s = document.createElement('script');
    s.src = 'assets/chapters/' + key + '.js';
    s.onload = res;
    s.onerror = () => rej(new Error('chapitre introuvable : assets/chapters/' + key + '.js'));
    document.head.appendChild(s);
  }));
  return Promise.all(loads);
}

/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);
function shuffle(a){a=a.slice();for(let j=a.length-1;j>0;j--){const k=Math.floor(Math.random()*(j+1));[a[j],a[k]]=[a[k],a[j]];}return a;}
function esc(s){const d=document.createElement('div');d.textContent=s;return d.innerHTML;}

/* ---------- nav + accueil générés depuis le registre ---------- */
function buildNav(active){
  const nav = document.querySelector('.topnav');
  if(!nav) return;
  let h = '<a href="index.html"'+(active==='index'?' class="here"':'')+'>Accueil</a>';
  CHAPTER_LIST.forEach(k=>{
    const c = CHAPTERS[k];
    h += '<a href="chapitre.html?ch='+k+'"'+(active===k?' class="here"':'')+'>'+esc(c.short)+'</a>';
  });
  h += '<a href="dialogue.html"'+(active==='dialogue'?' class="here"':'')+'>Dialogue</a>';
  h += '<a href="examen.html"'+(active==='examen'?' class="here"':'')+'>Examen final</a>';
  nav.innerHTML = h;
}

function buildIndex(){
  const box = $('cards');
  let h = '';
  CHAPTER_LIST.forEach(k=>{
    const c = CHAPTERS[k];
    h += '<a href="chapitre.html?ch='+k+'"><b>'+esc(c.name)+'</b><small>'+esc(c.desc)+' · fiche + '+c.bank.length+' questions</small></a>';
  });
  h += '<a href="dialogue.html"><b>Ma journée — dialogue</b><small>Interview pour parler (15 questions) + dictée des verbes à taper (41 blancs)</small></a>';
  const tot = CHAPTER_LIST.reduce((n,k)=>n+examCount(CHAPTERS[k].bank.length),0);
  h += '<a href="examen.html"><b>Examen final</b><small>'+tot+' questions tirées au hasard de tous les chapitres</small></a>';
  box.innerHTML = h;
}

/* ---------- examen : échantillonnage automatique ---------- */
function examCount(bankLen){ return Math.max(5, Math.ceil(bankLen/2)); }
function buildExamQueue(){
  let all = [];
  CHAPTER_LIST.forEach(k=>{
    const b = CHAPTERS[k].bank.map(q=>({...q,set:k}));
    all = all.concat(shuffle(b).slice(0, examCount(b.length)));
  });
  return shuffle(all);
}

/* ---------- moteur du quiz ---------- */
let queue=[],i=0,answered=false,results=[],picks=[],streak=0,best=0,missed=[];
let QUEUE_BUILDER = null;

function startQuiz(qs){
  queue=(qs||QUEUE_BUILDER()).map(q=>({...q,order:shuffle([0,1,2,3])}));
  i=0;answered=false;results=new Array(queue.length).fill(null);
  picks=new Array(queue.length).fill(null);streak=0;best=0;
  const st=$('start-block'); if(st) st.classList.add('hide');
  const rf=$('ref'); if(rf) rf.classList.add('hide');
  $('results').classList.add('hide');
  $('quiz').classList.remove('hide');
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

function render(){
  const q=queue[i];
  answered=results[i]!==null;
  $('pos').textContent=(i+1)+" / "+queue.length;
  $('streak').textContent=streak>1?"série : "+streak+" ✦":"";
  $('fill').style.width=(i/queue.length*100)+"%";
  $('tag').textContent=CHAPTERS[q.set].short;
  $('qtext').innerHTML=q.q.replace(/—/g,"<b>______</b>");
  const box=$('opts');box.innerHTML='';
  q.order.forEach((oi,pos)=>{
    const b=document.createElement('button');
    b.dataset.k=pos+1;b.textContent=q.o[oi];
    b.onclick=()=>pick(oi,b);
    box.appendChild(b);
  });
  $('expl').classList.add('hide');
  $('next').classList.add('hide');
  if(answered){
    [...box.children].forEach((b,pos)=>{
      b.disabled=true;
      const oi=q.order[pos];
      if(oi===0)b.classList.add('ok');
      if(oi===picks[i]&&picks[i]!==0)b.classList.add('ko');
    });
    showExpl(results[i],q);
  }
}

function pick(oi,btn){
  if(answered)return;
  answered=true;
  const q=queue[i];
  picks[i]=oi;
  const good=(oi===0);
  results[i]=good;
  if(good){streak++;best=Math.max(best,streak);}else streak=0;
  [...$('opts').children].forEach((b,pos)=>{
    b.disabled=true;
    if(q.order[pos]===0)b.classList.add('ok');
  });
  if(!good)btn.classList.add('ko');
  $('streak').textContent=streak>1?"série : "+streak+" ✦":"";
  showExpl(good,q);
}

function showExpl(good,q){
  const ex=$('expl');
  ex.className='expl '+(good?'good':'');
  ex.innerHTML='<span class="verdict">'+(good?'Bien !':'Pas tout à fait…')+'</span>'+q.e;
  ex.classList.remove('hide');
  const n=$('next');
  n.textContent=(i===queue.length-1)?"Résultats →":"Suivant →";
  n.classList.remove('hide');
}

function advance(){
  if(!answered)return;
  if(i===queue.length-1){finish();return;}
  i++;render();
  window.scrollTo({top:0,behavior:'smooth'});
}
function back(){if(i>0){i--;render();}}

function finish(){
  $('quiz').classList.add('hide');
  $('results').classList.remove('hide');
  const ok=results.filter(Boolean).length,tot=queue.length;
  const pct=Math.round(ok/tot*100);
  $('score').textContent=ok+" / "+tot+" — "+pct+"%"+(best>2?"  ·  meilleure série : "+best:"");
  let v;
  if(pct>=90)v="Excellent. C'est acquis.";
  else if(pct>=75)v="Solide ! Refais tes erreurs et c'est bon.";
  else if(pct>=55)v="La moitié tient. Relis les tableaux en rouge.";
  else v="À retravailler — reprends les fiches, puis reviens.";
  $('verdict').textContent=v;
  const rows={};
  queue.forEach((q,k)=>{
    rows[q.set]=rows[q.set]||{ok:0,tot:0};
    rows[q.set].tot++;
    if(results[k])rows[q.set].ok++;
  });
  const t=$('table');t.innerHTML='';
  Object.keys(rows).forEach(k=>{
    const r=rows[k],weak=r.ok/r.tot<0.7;
    t.insertAdjacentHTML('beforeend','<tr class="'+(weak?'weak':'')+'"><td>'+esc(CHAPTERS[k].name)+'</td><td class="n">'+r.ok+' / '+r.tot+'</td></tr>');
  });
  missed=queue.filter((_,k)=>results[k]===false);
  const eb=$('errBtn');
  if(missed.length){
    eb.textContent="Refaire mes erreurs ("+missed.length+")";
    eb.classList.remove('hide');
  }else eb.classList.add('hide');
  window.scrollTo({top:0,behavior:'smooth'});
}

function resetToPage(){
  $('results').classList.add('hide');
  $('quiz').classList.add('hide');
  const st=$('start-block'); if(st) st.classList.remove('hide');
  const rf=$('ref'); if(rf) rf.classList.remove('hide');
  window.scrollTo({top:0,behavior:'smooth'});
}

function wireQuizUI(){
  $('next').addEventListener('click',advance);
  $('back').addEventListener('click',back);
  $('again').addEventListener('click',resetToPage);
  $('errBtn').addEventListener('click',()=>{if(missed.length)startQuiz(shuffle(missed));});
  $('review').addEventListener('click',()=>{
    $('results').classList.add('hide');
    $('quiz').classList.remove('hide');
    i=queue.length-1;render();
  });
  document.querySelectorAll('[data-start]').forEach(b=>b.addEventListener('click',()=>startQuiz()));
  document.addEventListener('keydown',e=>{
    if(e.metaKey||e.ctrlKey||e.altKey)return;
    const quizOn=!$('quiz').classList.contains('hide');
    if(e.key==='r'||e.key==='R'){if(quizOn||!$('results').classList.contains('hide')){e.preventDefault();resetToPage();}return;}
    if(!quizOn)return;
    if(e.key==='ArrowLeft'||e.key==='Backspace'){e.preventDefault();back();return;}
    if(!answered&&/^[1-4]$/.test(e.key)){
      const b=$('opts').children[+e.key-1];
      if(b){e.preventDefault();b.click();}
      return;
    }
    if(answered&&(e.key==='Enter'||e.key===' '||e.key==='ArrowRight')){e.preventDefault();advance();}
  });
}

/* ---------- amorçage par page ---------- */
document.addEventListener('DOMContentLoaded',()=>{
  const page = document.body.dataset.page;
  loadChapters().then(()=>{
    if(page==='index'){
      buildNav('index');
      buildIndex();
    }
    if(page==='chapitre'){
      const key = new URLSearchParams(location.search).get('ch');
      const c = CHAPTERS[key];
      if(!c){
        buildNav('index');
        $('ref').innerHTML='<h2>Chapitre introuvable</h2><p>Vérifie l\'URL (?ch=...) et assets/manifest.js.</p>';
        $('start-block').classList.add('hide');
        return;
      }
      buildNav(key);
      document.title=c.name;
      $('ref').innerHTML=c.ref;
      $('startBtn').textContent='Commencer le drill '+c.short+' ('+c.bank.length+' questions)';
      QUEUE_BUILDER=()=>shuffle(c.bank.map(q=>({...q,set:key})));
      wireQuizUI();
    }
    if(page==='examen'){
      buildNav('examen');
      const tot = CHAPTER_LIST.reduce((n,k)=>n+examCount(CHAPTERS[k].bank.length),0);
      $('examDesc').textContent = tot+" questions tirées au hasard à chaque essai — environ la moitié de chaque chapitre ("+CHAPTER_LIST.map(k=>CHAPTERS[k].short).join(', ')+"). Refais-le, il sera différent.";
      $('startBtn').textContent="Commencer l'examen ("+tot+" questions)";
      QUEUE_BUILDER=buildExamQueue;
      wireQuizUI();
    }
    if(page==='dialogue'){
      buildNav('dialogue');
    }
  }).catch(err=>{
    const r=$('ref')||document.querySelector('.sheet');
    if(r) r.insertAdjacentHTML('afterbegin','<blockquote>⚠️ '+esc(err.message)+'</blockquote>');
  });
});
