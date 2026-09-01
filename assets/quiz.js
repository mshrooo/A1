/* Shared quiz engine. Each page defines PAGE_CONFIG before loading this:
   { sets:["L13"] }                    -> drill on those banks (button starts it)
   { exam:{L13:14,L15:14,L16:16,CONN:6} } -> random sample per run          */

const SETS={
  "L13":{name:"Leçon 13 — Verbes en -ER irréguliers",bank:L13},
  "L15":{name:"Leçon 15 — 2ᵉ groupe & routine",bank:L15},
  "L16":{name:"Leçon 16 — 3ᵉ groupe",bank:L16},
  "CONN":{name:"Connecteurs",bank:CONN},
};

const $=id=>document.getElementById(id);
let queue=[],i=0,answered=false,results=[],picks=[],streak=0,best=0,missed=[];

function shuffle(a){a=a.slice();for(let j=a.length-1;j>0;j--){const k=Math.floor(Math.random()*(j+1));[a[j],a[k]]=[a[k],a[j]];}return a;}

function buildQueueFromConfig(){
  if(PAGE_CONFIG.exam){
    let all=[];
    Object.keys(PAGE_CONFIG.exam).forEach(k=>{
      const n=PAGE_CONFIG.exam[k];
      const qs=shuffle(SETS[k].bank.map(q=>({...q,set:k}))).slice(0,n);
      all=all.concat(qs);
    });
    return shuffle(all);
  }
  let all=[];
  PAGE_CONFIG.sets.forEach(k=>SETS[k].bank.forEach(q=>all.push({...q,set:k})));
  return shuffle(all);
}

function startQuiz(qs){
  queue=(qs||buildQueueFromConfig()).map(q=>({...q,order:shuffle([0,1,2,3])}));
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
  $('tag').textContent=SETS[q.set].name.split("—")[0].trim();
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
    t.insertAdjacentHTML('beforeend','<tr class="'+(weak?'weak':'')+'"><td>'+SETS[k].name+'</td><td class="n">'+r.ok+' / '+r.tot+'</td></tr>');
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

document.addEventListener('DOMContentLoaded',()=>{
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
});
