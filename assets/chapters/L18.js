registerChapter("L18", {
  name: "Leçon 18 — Les 3 accents français",
  short: "L18",
  desc: "Aigu, grave, circonflexe : où ils vont et ce qu'ils changent",
  ref: `
<h2>L18 — Les 3 accents français</h2>
<div class="vocab-wrap"><table>
<tr><th>Accent</th><th>Lettre</th><th>Exemples</th></tr>
<tr><td>aigu</td><td>é</td><td>éléphant, répéter, été</td></tr>
<tr><td>grave</td><td>è, à, ù</td><td>frère, chèvre, à, où, là</td></tr>
<tr><td>circonflexe</td><td>â, ê, î, ô, û</td><td>tête, châtain, boîte, fantôme, coûter</td></tr>
</table></div>
<h3>Ce qui change la prononciation</h3>
<p>Seulement sur la lettre <b>E</b> ! e → muet ou [ə] (chaise, le) · é → [e] (été) · è, ê → [ɛ] (chèvre, tête). Ailleurs : â = à = a, î = i, ô = o, û = ù = u.</p>
<h3>Astuces</h3>
<ul>
<li>L'accent grave sur E n'apparaît que dans 2 cas : <b>è + consonne + e muet</b> (élève, chère, j'achète) et <b>devant un S final</b> (très, procès).</li>
<li>è et ê ne sont <b>jamais en fin de mot</b> : l'été, mais procès.</li>
<li><b>Jamais d'accent</b> devant un X ou une double consonne : exercice, essence, belle.</li>
<li>Le circonflexe = souvent un <b>S disparu</b> : hôpital (hospital), fenêtre (fenestra), forêt (forest), hôtel (hostel).</li>
<li>Réforme : on peut enlever le circonflexe sur I et U (connaitre, cout), sauf quand il distingue deux mots : <b>sûr / sur</b>, dû / du.</li>
</ul>
<blockquote>⚠️ Les accents qui changent le sens : <b>a</b> (avoir) / <b>à</b> · <b>ou</b> (or) / <b>où</b> (where) · <b>la</b> / <b>là</b> · <b>sur</b> (on) / <b>sûr</b> (sure).</blockquote>
`,
  bank: [
    {q:"Quel mot est bien écrit ?",
     o:["exercice", "éxercice", "exércice", "èxercice"],
     e:"Never an accent on an E in front of an X: exercice, examen, exemple. The X already makes the E sound open."},
    {q:"Quel mot est bien écrit ?",
     o:["belle", "bèlle", "bélle", "bêlle"],
     e:"No accent before a double consonant: belle, terre, essence. The double letter already does the accent's job."},
    {q:"Quel mot est bien écrit ?",
     o:["très", "trés", "tres", "trê"],
     e:"Accent grave before a final S: très, procès, après. È is never the very last letter, but it can sit before that silent S."},
    {q:"Quel mot est bien écrit ?",
     o:["élève", "élêve", "éléve", "eleve"],
     e:"Case 1 of the grave accent: è + consonant + silent e → élève, chère, mère. The first é stays aigu."},
    {q:"Pourquoi écrit-on « j'achète » avec un accent grave ?",
     o:["è + consonne + e muet", "parce que c'est un verbe", "pour la liaison", "il n'y a pas de raison"],
     e:"Same rule as élève: è + consonant + silent e. That's why the boot forms of acheter take è (j'achète) but nous achetons doesn't: the ending -ons isn't a silent e."},
    {q:"Quel accent peut se trouver en fin de mot ?",
     o:["l'accent aigu (été)", "l'accent grave (procè)", "l'accent circonflexe (têt)", "aucun accent"],
     e:"Only é can end a word: été, café, allé. è and ê never stand at the end (procès has an s after the è)."},
    {q:"Sur quelle lettre les accents changent vraiment la prononciation ?",
     o:["E", "A", "O", "U"],
     e:"Only on E: e (muet/ə), é [e], è/ê [ɛ]. On a, i, o, u the accent changes almost nothing in modern French."},
    {q:"« Tête » et « chèvre » : le son de ê et è est…",
     o:["le même [ɛ]", "différent", "muet", "[e] comme été"],
     e:"ê and è are pronounced the same, the open [ɛ]. Only é is the closed [e]."},
    {q:"Le circonflexe de « forêt » remplace souvent…",
     o:["un S disparu (forest)", "un E muet", "une double consonne", "un H"],
     e:"Circumflex = lost S. English kept the S: forêt/forest, hôpital/hospital, hôtel/hostel, fenêtre (Latin fenestra). Handy for guessing meanings."},
    {q:"« Hôpital » en anglais :",
     o:["hospital", "hotel", "holiday", "hope"],
     e:"The ô hides an S: hôpital = hospital. Hôtel = hotel/hostel."},
    {q:"Tu habites — ? (where)",
     o:["où", "ou", "oû", "óu"],
     e:"Où (with accent) = where. Ou (no accent) = or: thé ou café ?"},
    {q:"Thé — café ? (or)",
     o:["ou", "où", "oû", "u"],
     e:"Ou without accent = or. Où with grave accent = where."},
    {q:"Il — un chien. (avoir)",
     o:["a", "à", "â", "as"],
     e:"A without accent is the verb avoir: il a. À with accent is the preposition: il va à Paris."},
    {q:"Je vais — Paris.",
     o:["à", "a", "â", "as"],
     e:"À with accent = to/at (preposition). A without accent = has."},
    {q:"Le chat est —-bas.",
     o:["là", "la", "lâ", "lá"],
     e:"Là (accent) = there: là-bas, ici et là. La (no accent) = the article: la table."},
    {q:"Tu es — ? (sure)",
     o:["sûr", "sur", "sùr", "sür"],
     e:"Sûr = sure: even after the spelling reform it keeps its circumflex, because sur (no accent) = on: le livre est sur la table."},
    {q:"Après la réforme, quel mot garde son circonflexe obligatoirement ?",
     o:["sûr", "connaître", "coûter", "boîte"],
     e:"The reform lets you drop î and û (connaitre, couter, boite) EXCEPT where it separates two words: sûr/sur, dû/du, mûr/mur."},
    {q:"Dans « chaise », le E final est…",
     o:["muet", "[e]", "[ɛ]", "[ə] prononcé fort"],
     e:"A final e without accent is silent: chaise, table, porte. That's why spelling and sound feel so disconnected in French."}
  ],
  vocab: [
    
  ]
});
