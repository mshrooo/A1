registerChapter("L19", {
  name: "Leçon 19 — Les pronoms toniques & le goût",
  short: "L19",
  desc: "Moi, toi, lui, eux… et adorer, aimer, détester",
  ref: `
<h2>L19 — Moi, j'adore le cinéma</h2>
<h3>Les pronoms toniques</h3>
<div class="vocab-wrap"><table>
<tr><th>Sujet</th><th>je</th><th>tu</th><th>il</th><th>elle</th><th>on</th><th>nous</th><th>vous</th><th>ils</th><th>elles</th></tr>
<tr><th>Tonique</th><td>moi</td><td>toi</td><td>lui</td><td>elle</td><td>nous</td><td>nous</td><td>vous</td><td>eux</td><td>elles</td></tr>
</table></div>
<h3>On les utilise…</h3>
<ul>
<li>pour <b>renforcer</b> le sujet : <i>Moi, je pars à Lyon et toi, tu vas à Marseille !</i></li>
<li>après une <b>préposition</b> (à, de, pour, avec, chez…) : <i>Je travaille pour toi.</i></li>
<li>après une <b>conjonction</b> (mais, et, ou…) : <i>Tu aimes Jacques mais lui, il ne t'aime pas.</i></li>
<li>après <b>c'est / ce sont</b> : <i>C'est lui, mon professeur.</i></li>
<li>pour <b>désigner</b> : <i>Regarde, lui, il a les cheveux longs !</i></li>
</ul>
<h3>Le goût (du plus fort au plus faible)</h3>
<p><b>adorer</b> → <b>aimer beaucoup</b> → aimer → <b>ne pas beaucoup aimer</b> → <b>détester</b>. Avec un nom (j'adore <b>le</b> cinéma) ou un infinitif (je déteste regarder la télé).</p>
<blockquote>💡 Moi aussi (me too) / Moi non plus (me neither, after a negative): « Je n'aime pas le thé. » « Moi non plus. »</blockquote>
`,
  bank: [
    {q:"—, je pars à Lyon et toi, tu vas à Marseille.",
     o:["Moi", "Je", "Me", "Ma"],
     e:"Moi reinforces je: Moi, je… The tonic pronoun stands alone at the front, then the normal subject pronoun follows."},
    {q:"Je travaille pour —. (tu)",
     o:["toi", "tu", "te", "ton"],
     e:"After a preposition (pour, avec, chez, à…) you need the tonic form: pour toi, avec moi, chez lui."},
    {q:"C'est — mon professeur de français. (il)",
     o:["lui", "il", "le", "son"],
     e:"After c'est, use the tonic pronoun: c'est lui, c'est moi, c'est elle. 'C'est il' is impossible."},
    {q:"Tu aimes Jacques mais —, il ne t'aime pas !",
     o:["lui", "il", "le", "eux"],
     e:"Lui = tonic of il. After mais, the tonic form highlights the contrast: mais lui, il…"},
    {q:"—, ils mangent au restaurant. (ils)",
     o:["Eux", "Ils", "Leur", "Lui"],
     e:"The tonic of ils is EUX (the only truly irregular one). Elles stays elles."},
    {q:"Le pronom tonique de ON est…",
     o:["nous", "on", "soi", "lui"],
     e:"On's tonic pronoun is nous: Nous, on aime le café. It's the spoken way to say 'we'."},
    {q:"Ce soir, je dîne chez — (ma sœur).",
     o:["elle", "lui", "la", "sa"],
     e:"Chez + tonic pronoun: chez elle, chez lui, chez moi. Ma sœur = elle."},
    {q:"Et —, tu aimes le cinéma ?",
     o:["toi", "tu", "te", "ton"],
     e:"Et toi ? = and you? The classic way to bounce a question back."},
    {q:"C'est — qui paie ! (je)",
     o:["moi", "je", "me", "mon"],
     e:"C'est moi qui paie = I'm the one paying. The verb agrees with the tonic pronoun: c'est moi qui paie, c'est toi qui paies, c'est nous qui payons."},
    {q:"Avec qui tu vas au cinéma ? Avec — (mes copains).",
     o:["eux", "ils", "leur", "lui"],
     e:"Mes copains = ils → tonic eux. Avec eux = with them."},
    {q:"Quelle phrase est correcte ?",
     o:["Je parle à lui.", "Je parle à il.", "Je parle à le.", "Je parle à son."],
     e:"After a preposition, tonic pronoun: à lui. (Later, in L31, you'll learn the shorter 'je lui parle'.)"},
    {q:"« Je n'aime pas le thé. » « Moi —. »",
     o:["non plus", "aussi", "pas", "jamais"],
     e:"After a negative sentence, agree with 'moi non plus' (me neither). 'Moi aussi' only answers a positive sentence."},
    {q:"« J'adore le chocolat ! » « Moi — ! »",
     o:["aussi", "non plus", "pas", "plus"],
     e:"Moi aussi = me too, agreeing with a positive statement."},
    {q:"Quel verbe exprime le goût le plus fort ?",
     o:["adorer", "aimer", "aimer bien", "ne pas détester"],
     e:"Scale: adorer > aimer beaucoup > aimer > ne pas beaucoup aimer > détester."},
    {q:"« Je n'aime pas beaucoup le cinéma » signifie…",
     o:["I don't really like cinema", "I love cinema", "I hate cinema", "I like cinema a lot"],
     e:"Ne pas beaucoup aimer = not really like it. Softer than détester (hate)."},
    {q:"Je déteste — la télé.",
     o:["regarder", "regarde", "regardes", "à regarder"],
     e:"Goût verbs + infinitive directly: je déteste regarder, j'adore lire. No preposition, and the second verb stays infinitive."},
    {q:"J'aime — chiens.",
     o:["les", "des", "de", "aux"],
     e:"With goût verbs, use the definite article (the general category): j'aime les chiens, j'adore le café."}
  ],
  vocab: [
    ["adorer", "to love / adore"],
    ["détester", "to hate"],
    ["aimer beaucoup", "to like a lot"],
    ["moi aussi", "me too"],
    ["moi non plus", "me neither"],
    ["prendre un verre", "to have a drink"]
  ]
});
