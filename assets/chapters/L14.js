registerChapter("L14", {
  name: "Leçon 14 — L'heure",
  short: "L14",
  desc: "Il est quelle heure ? · et quart, et demie, moins le quart · midi, minuit",
  ref: `
<h2>L14 — Il est quelle heure ?</h2>
<h3>Demander l'heure</h3>
<p>Il est quelle heure ? (courant) · Quelle heure est-il ? (formel) · Vous avez l'heure, s'il vous plaît ?</p>
<h3>Dire l'heure</h3>
<div class="vocab-wrap"><table>
<tr><th>Heure</th><th>Langage courant</th><th>Langage officiel (24 h)</th></tr>
<tr><td>8 h 00</td><td>huit heures</td><td>huit heures</td></tr>
<tr><td>8 h 10</td><td>huit heures dix</td><td>huit heures dix</td></tr>
<tr><td>8 h 15</td><td>huit heures <b>et quart</b></td><td>huit heures quinze</td></tr>
<tr><td>8 h 30</td><td>huit heures <b>et demie</b></td><td>huit heures trente</td></tr>
<tr><td>8 h 40</td><td>neuf heures <b>moins vingt</b></td><td>huit heures quarante</td></tr>
<tr><td>8 h 45</td><td>neuf heures <b>moins le quart</b></td><td>huit heures quarante-cinq</td></tr>
<tr><td>12 h 00</td><td><b>midi</b></td><td>douze heures</td></tr>
<tr><td>0 h 00</td><td><b>minuit</b></td><td>zéro heure</td></tr>
<tr><td>14 h 30</td><td>deux heures et demie (de l'après-midi)</td><td>quatorze heures trente</td></tr>
</table></div>
<ul>
<li>N'oublie pas <b>il est</b> et <b>heures</b> : <i>Il est cinq heures.</i> (une heure, au singulier)</li>
<li>On dit plutôt <b>14 h 30</b> que « 14 h et demie » : et quart / et demie / moins le quart vont avec 1 à 12.</li>
<li>Pour préciser : <b>du matin</b>, <b>de l'après-midi</b>, <b>du soir</b>.</li>
<li><b>à</b> 7 heures (exact) · <b>vers</b> 7 heures (environ) · <b>en retard</b> / <b>à l'heure</b> / <b>en avance</b>.</li>
</ul>
<p>Adverbes de temps : tout d'abord, premièrement, avant, puis, après, finalement (voir le chapitre Connecteurs).</p>
`,
  bank: [
    {q:"Il est — heure ?",
     o:["quelle", "quel", "quoi", "combien"],
     e:"Heure is feminine → quelle heure. Il est quelle heure ? is the everyday form; Quelle heure est-il ? is the formal one."},
    {q:"« Vous avez l'heure, s'il vous plaît ? » signifie…",
     o:["Do you have the time, please?", "Are you on time?", "Do you have an hour?", "Is it time?"],
     e:"Vous avez l'heure ? = do you have the time? The polite way to ask a stranger."},
    {q:"8 h 15 : il est huit heures —.",
     o:["et quart", "et demie", "moins le quart", "quinze et quart"],
     e:"Quarter past = et quart. Officially you can also say huit heures quinze."},
    {q:"8 h 30 : il est huit heures —.",
     o:["et demie", "et demi", "et quart", "moins demie"],
     e:"Half past = et demie (with e, because heure is feminine). Officially: huit heures trente."},
    {q:"8 h 45, en langage courant :",
     o:["neuf heures moins le quart", "huit heures moins le quart", "neuf heures et quart", "huit heures et trois quarts"],
     e:"After half past, French counts DOWN from the next hour: 8 h 45 = neuf heures moins le quart (nine minus the quarter)."},
    {q:"8 h 50, en langage courant :",
     o:["neuf heures moins dix", "huit heures moins dix", "neuf heures et dix", "dix heures moins neuf"],
     e:"Count down from the next hour: 8 h 50 = neuf heures moins dix."},
    {q:"8 h 35, en langage courant :",
     o:["neuf heures moins vingt-cinq", "huit heures moins vingt-cinq", "neuf heures et vingt-cinq", "huit heures moins le quart"],
     e:"8 h 35 = 25 minutes before nine → neuf heures moins vingt-cinq. Or simply huit heures trente-cinq, which is always fine."},
    {q:"Il est 12 h 00 : il est —.",
     o:["midi", "minuit", "douze heure", "zéro heure"],
     e:"12 h 00 (noon) = midi. In official 24-hour time, douze heures."},
    {q:"Il est 0 h 00 : il est —.",
     o:["minuit", "midi", "zéro", "douze heures"],
     e:"Midnight = minuit. Midi = noon."},
    {q:"14 h 30 à la gare (langage officiel) :",
     o:["quatorze heures trente", "quatorze heures et demie", "deux heures et demie", "quatorze heures moins trente"],
     e:"With 24-hour time, use plain minutes: quatorze heures trente, quinze heures quarante-cinq. Et demie/et quart go with the 1-12 system."},
    {q:"Quelle phrase est correcte ?",
     o:["Il est cinq heures.", "Il est cinq.", "C'est cinq heures.", "Il a cinq heures."],
     e:"Always il est + number + heures. Dropping heures (il est cinq) is a classic learner slip."},
    {q:"Il est 1 h 00 : il est —.",
     o:["une heure", "un heure", "une heures", "un heures"],
     e:"Une heure, singular and feminine. From two on: deux heures."},
    {q:"15 h, en langage courant : trois heures —.",
     o:["de l'après-midi", "du matin", "du soir", "de la nuit"],
     e:"To clarify in the 12-hour system: du matin (morning), de l'après-midi (afternoon), du soir (evening)."},
    {q:"21 h, en langage courant : neuf heures —.",
     o:["du soir", "du matin", "de l'après-midi", "de midi"],
     e:"21 h = neuf heures du soir."},
    {q:"Je me lève — 7 heures. (exactly)",
     o:["à", "vers", "en", "sur"],
     e:"À + time for an exact time: à 7 heures, à midi."},
    {q:"Je me rase — 9 heures. (around)",
     o:["vers", "à", "en", "pour"],
     e:"Vers = around/about: vers 9 heures. Very common, very useful in your journal."},
    {q:"« Il est 7 h 15, tu vas être en retard ! » En retard signifie…",
     o:["late", "early", "on time", "tired"],
     e:"En retard = late. À l'heure = on time. En avance = early."},
    {q:"« Dépêche-toi ! » signifie…",
     o:["Hurry up!", "Calm down!", "Wake up!", "Get dressed!"],
     e:"Se dépêcher = to hurry. Dépêche-toi ! is the imperative, which you'll study properly at L26."}
  ],
  vocab: [
    ["Il est quelle heure ?", "What time is it?"],
    ["et quart", "quarter past"],
    ["et demie", "half past"],
    ["moins le quart", "quarter to"],
    ["midi", "noon"],
    ["minuit", "midnight"],
    ["vers 8 heures", "around 8 o'clock"],
    ["en retard", "late"],
    ["à l'heure", "on time"],
    ["en avance", "early"],
    ["se dépêcher", "to hurry"],
    ["du matin / du soir", "in the morning / in the evening"]
  ]
});
