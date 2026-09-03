/* ============================================================
   MODÈLE DE CHAPITRE — copie ce fichier en L17.js, remplis-le,
   puis ajoute "L17" dans assets/manifest.js. Rien d'autre.

   Rappels :
   - bank : la 1re option (index 0) est TOUJOURS la bonne réponse ;
     l'ordre est mélangé automatiquement à l'affichage.
   - Dans q, le tiret long — devient un blanc ______.
   - e : explication en anglais, montrée après la réponse.
   - ref : HTML libre (h2/h3, <table>, <blockquote>) — même style
     que les autres fiches.
   ============================================================ */
registerChapter("L17", {
  name: "Leçon 17 — Titre de la leçon",
  short: "L17",
  desc: "Une ligne pour la carte d'accueil",
  ref: `
<h2>L17 — Titre de la leçon</h2>
<p>Introduction…</p>
<h3>Un tableau</h3>
<div class="vocab-wrap"><table>
<tr><th></th><th>VERBE</th></tr>
<tr><td>Je</td><td>…</td></tr>
</table></div>
<blockquote>⚠️ Une remarque importante.</blockquote>
`,
  bank: [
    {q:"Je — un exemple. (verbe)",
     o:["bonne réponse","piège 1","piège 2","piège 3"],
     e:"Explanation in English of why the answer is right and what trap the wrong options set."},
  ]
});
