registerChapter("L25", {
  name: "Leçon 25 — Les prépositions de lieu & la ville",
  short: "L25",
  desc: "Sur, sous, devant, derrière, à côté de… · se garer, les bouchons",
  ref: `
<h2>L25 — Des nouvelles de Paris</h2>
<h3>Prépositions et adverbes de lieu</h3>
<div class="vocab-wrap"><table>
<tr><th>Préposition</th><th>Contraire</th></tr>
<tr><td><b>sur</b> la table (on)</td><td><b>sous</b> la table (under)</td></tr>
<tr><td><b>devant</b> (in front of)</td><td><b>derrière</b> (behind)</td></tr>
<tr><td><b>à droite de</b> (right of)</td><td><b>à gauche de</b> (left of)</td></tr>
<tr><td><b>près de</b> (near)</td><td><b>loin de</b> (far from)</td></tr>
<tr><td><b>en haut de</b> (at the top of)</td><td><b>en bas de</b> (at the bottom of)</td></tr>
<tr><td><b>ici / là</b> (here)</td><td><b>là-bas</b> (over there)</td></tr>
</table></div>
<p>Aussi : <b>à côté de</b> (next to), <b>en face de</b> (opposite), <b>entre</b> Marie <b>et</b> Jean (between), <b>dans</b> (in).</p>
<blockquote>⚠️ Avec « de » : de + le → <b>du</b>, de + les → <b>des</b> (L20) : à côté <b>du</b> chien, près <b>des</b> toilettes, en face <b>de la</b> gare.</blockquote>
<h3>Quelle préposition avec quel lieu ?</h3>
<p><b>sur</b> la place, l'avenue, Internet · <b>dans</b> la voiture, le train, l'avion, la rue · <b>à</b> l'aéroport, la gare, l'école · rue de la Paix (sans préposition dans une adresse).</p>
<h3>La ville</h3>
<p>se garer / garer la voiture · des embouteillages = des bouchons · conduire · appeler un taxi · un plan (de la ville) · un feu rouge · un parc · une église.</p>
<h3>Écrire une carte postale</h3>
<p>Salut Michel ! / (Mon) Cher grand-père, Chère Julie · … · Je t'embrasse. · Bisous / Bises ! · À bientôt ! · On se voit bientôt ! · <i>Cordialement</i> (formel, pas pour un ami).</p>
`,
  bank: [
    {q:"Le chat est — la table. (on)",
     o:["sur", "sous", "dans", "devant"],
     e:"Sur = on. Sous = under. Easy to swap, so link them: sur ↑, sous ↓."},
    {q:"Le chien est — la table. (under)",
     o:["sous", "sur", "entre", "loin"],
     e:"Sous = under. Le chien est sous la table."},
    {q:"Le parapluie est — l'ordinateur. (behind)",
     o:["derrière", "devant", "sur", "entre"],
     e:"Derrière = behind. Devant = in front of."},
    {q:"Le chat est à droite — chien.",
     o:["du", "de le", "de", "au"],
     e:"À droite de + le chien → du chien. The L20 contraction comes back with every 'de' preposition."},
    {q:"Le chat est à côté — voiture.",
     o:["de la", "du", "de le", "à la"],
     e:"À côté de + la voiture → de la voiture (no contraction with la)."},
    {q:"Mon hôtel est près — tour Eiffel.",
     o:["de la", "du", "à la", "de"],
     e:"Près de + la tour → près de la tour Eiffel."},
    {q:"Les toilettes ? À côté — escaliers.",
     o:["des", "de les", "du", "aux"],
     e:"De + les → des: à côté des escaliers, près des toilettes."},
    {q:"Le stylo est entre le sac — les cigarettes.",
     o:["et", "ou", "de", "à"],
     e:"Entre… et… = between… and…"},
    {q:"Jean est en face — Marie.",
     o:["de", "à", "du", "la"],
     e:"En face de = opposite. Before a name, just de: en face de Marie."},
    {q:"Le contraire de « près de » :",
     o:["loin de", "à côté de", "en face de", "derrière"],
     e:"Près de (near) ↔ loin de (far from)."},
    {q:"Le contraire de « en haut de » :",
     o:["en bas de", "sous", "derrière", "à gauche de"],
     e:"En haut de l'arbre (top) ↔ en bas de l'arbre (bottom)."},
    {q:"Je suis — la voiture.",
     o:["dans", "sur", "à", "en"],
     e:"Inside a vehicle → dans: dans la voiture, dans le train, dans l'avion."},
    {q:"J'ai trouvé l'adresse — Internet.",
     o:["sur", "dans", "à", "en"],
     e:"Sur Internet, sur le site, sur la place, sur l'avenue."},
    {q:"Il y a beaucoup de monde — la rue.",
     o:["dans", "sur", "à", "en"],
     e:"In French you're dans la rue (in the street), not 'sur'. But sur l'avenue, sur la place."},
    {q:"Je t'attends — la gare.",
     o:["à", "dans", "sur", "en"],
     e:"Places you go to as a point: à la gare, à l'aéroport, à l'école."},
    {q:"Il y a des — sur l'autoroute : je suis en retard.",
     o:["embouteillages", "nuages", "feux", "plans"],
     e:"Des embouteillages = traffic jams, also des bouchons. Jakarta's favorite noun."},
    {q:"Je — devant le bureau. (se garer)",
     o:["me gare", "se gare", "gare", "me garer"],
     e:"Se garer = to park (yourself). Je me gare, tu te gares. Garer la voiture works too."},
    {q:"Pour trouver la rue, je regarde un —.",
     o:["plan", "feu", "parc", "bouchon"],
     e:"Un plan = a city map. Une carte works too (carte routière = road map)."},
    {q:"Carte postale à un ami : on termine par…",
     o:["Bisous !", "Cordialement.", "Veuillez agréer…", "Madame, Monsieur"],
     e:"Friends and family: Bisous, Bises, Je t'embrasse, À bientôt. Cordialement is formal (emails to work contacts)."},
    {q:"— Julie, … (début d'une carte)",
     o:["Chère", "Cher", "Chers", "Chères"],
     e:"Cher agrees: cher Michel, chère Julie, chers amis, chères amies."}
  ],
  vocab: [
    ["sur", "on"],
    ["sous", "under"],
    ["devant", "in front of"],
    ["derrière", "behind"],
    ["à côté de", "next to"],
    ["en face de", "opposite"],
    ["près de", "near"],
    ["loin de", "far from"],
    ["entre… et…", "between… and…"],
    ["là-bas", "over there"],
    ["se garer", "to park"],
    ["les embouteillages", "traffic jams"],
    ["les bouchons", "traffic jams (informal)"],
    ["un plan", "a city map"],
    ["un feu rouge", "a red light"],
    ["Je t'embrasse", "love (letter closing)"]
  ]
});
