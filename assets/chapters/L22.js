registerChapter("L22", {
  name: "Leçon 22 — Les nasales & les combinaisons",
  short: "L22",
  desc: "an/en, on, in/ain/un · quand une voyelle casse la nasale · ss / s",
  ref: `
<h2>L22 — Prononciation : les combinaisons</h2>
<h3>Les nasales</h3>
<div class="vocab-wrap"><table>
<tr><th>Son</th><th>Écritures</th><th>Exemples</th></tr>
<tr><td>[ɑ̃]</td><td>an, am, en, em</td><td>enfant, chambre, temps, ensemble</td></tr>
<tr><td>[ɔ̃]</td><td>on, om</td><td>bon, nom, pont, pompier</td></tr>
<tr><td>[ɛ̃]</td><td>in, im, ain, aim, ein, (un, um)</td><td>vin, important, pain, faim, plein, un</td></tr>
</table></div>
<ul>
<li>⚠️ Pas de nasale si une <b>voyelle suit</b> (ou une double consonne + voyelle) : <b>pom</b>pier (nasal) / po<b>mo</b>logie / po<b>mmi</b>er (pas nasal). bon / bo<b>nn</b>e, italien / italie<b>nn</b>e, un / u<b>ne</b>, ani<b>mal</b>.</li>
<li>Devant <b>p</b> et <b>b</b>, on écrit <b>m</b> : chambre, important, combien.</li>
<li>Aujourd'hui, beaucoup de Français prononcent « un » comme « in ».</li>
</ul>
<h3>Les consonnes</h3>
<ul>
<li>Les doubles consonnes se prononcent comme une simple : a<b>tt</b>entif = étiré, a<b>rr</b>êter = hériter.</li>
<li>Sauf le <b>S</b> : entre deux voyelles, <b>s = [z]</b> (poi<b>s</b>on, dé<b>s</b>ert) et <b>ss = [s]</b> (poi<b>ss</b>on, de<b>ss</b>ert).</li>
</ul>
<blockquote>💡 poison (poison) / poisson (fish) · désert (desert) / dessert (dessert) : une seule lettre, deux sons, deux sens.</blockquote>
`,
  bank: [
    {q:"Lequel de ces mots N'a PAS de son nasal ?",
     o:["pomme", "pompier", "pont", "nom"],
     e:"Pomme: mm + e (vowel) breaks the nasal → [pɔm]. Pompier is nasal because om is followed by p, a consonant."},
    {q:"Dans « animal », le groupe « an » est…",
     o:["pas nasal (une voyelle suit)", "nasal [ɑ̃]", "nasal [ɛ̃]", "muet"],
     e:"a-ni-mal: the n is followed by the vowel i, so no nasal. Compare: anglais (nasal, g follows)."},
    {q:"Lequel est nasal ?",
     o:["bon", "bonne", "bonheur", "bonus"],
     e:"Bon ends on n → nasal [ɔ̃]. Bonne, bonheur, bonus all have a vowel after the n, so the vowel stays oral."},
    {q:"Italien / italienne : laquelle se termine par une nasale ?",
     o:["italien", "italienne", "les deux", "aucune"],
     e:"Italien → [ɛ̃] nasal. Italienne → nn + e, not nasal, sounds like 'enne'. Same with américain / américaine, un / une."},
    {q:"Quel mot a le même son que « vin » ?",
     o:["pain", "pont", "vent", "bonne"],
     e:"in, ain, ein, aim all give [ɛ̃]: vin, pain, plein, faim. Pont = [ɔ̃], vent = [ɑ̃]."},
    {q:"« Enfant » et « temps » : « en » et « em » se prononcent…",
     o:["[ɑ̃], comme « an »", "[ɛ̃], comme « in »", "[ɔ̃], comme « on »", "[ən]"],
     e:"en/em = an/am = [ɑ̃]. That's why enfant, temps, chambre all share the same nasal."},
    {q:"Quelle orthographe est correcte ?",
     o:["chambre", "chanbre", "chamnbre", "chanmbre"],
     e:"Before p and b, the nasal is written with m: chambre, ensemble, important, combien."},
    {q:"Quelle orthographe est correcte ?",
     o:["important", "inportant", "immportant", "impportant"],
     e:"Before p → im: important, impossible, impatient."},
    {q:"Dans « poison », le S se prononce…",
     o:["[z]", "[s]", "muet", "[ʃ]"],
     e:"One S between two vowels = [z]: poison, maison, rose. Poisson (double s) = [s] and means fish."},
    {q:"« Poisson » signifie…",
     o:["fish", "poison", "drink", "pea"],
     e:"Poisson (ss = [s]) = fish. Poison (s = [z]) = poison. Get this wrong at a restaurant and the waiter will look worried."},
    {q:"« Dessert » (le gâteau) se prononce avec…",
     o:["[s]", "[z]", "un S muet", "[ʃ]"],
     e:"ss = [s]: dessert. Désert (one s, between vowels) = [z] and means desert."},
    {q:"Dans « attentif », le double T se prononce…",
     o:["comme un seul T", "deux fois plus fort", "comme un D", "il est muet"],
     e:"Double consonants sound like single ones in French: attentif, arrêter, belle. The only exception that matters is ss vs s."},
    {q:"« Une » contient-il une nasale ?",
     o:["non, une voyelle suit le n", "oui, comme « un »", "oui, [ɑ̃]", "seulement à l'oral"],
     e:"Un is nasal, une isn't: the final e (even silent) follows the n and cancels the nasal. Masculine/feminine pairs often hinge on this."}
  ],
  vocab: [
    ["le poisson", "fish"],
    ["le poison", "poison"],
    ["le dessert", "dessert"],
    ["le désert", "desert"],
    ["la chambre", "bedroom"],
    ["le pompier", "firefighter"]
  ]
});
