registerChapter("L20", {
  name: "Leçon 20 — Les articles contractés & les loisirs",
  short: "L20",
  desc: "Au, aux, du, des · jouer à / jouer de · faire du sport",
  ref: `
<h2>L20 — Je fais du sport</h2>
<h3>Les articles contractés</h3>
<div class="vocab-wrap"><table>
<tr><th>Avec À</th><th>Avec DE</th></tr>
<tr><td>à + le → <b>au</b></td><td>de + le → <b>du</b></td></tr>
<tr><td>à + les → <b>aux</b></td><td>de + les → <b>des</b></td></tr>
<tr><td>à la, à l' : pas de changement</td><td>de la, de l' : pas de changement</td></tr>
</table></div>
<p>Je joue <b>aux</b> échecs, il parle <b>du</b> film, je suis <b>du</b> Sud. Mais : je joue <b>à la</b> pétanque, je vais <b>à l'</b>école.</p>
<h3>Les loisirs</h3>
<ul>
<li><b>Jouer à</b> + sport / jeu : jouer au foot, au tennis, aux cartes, aux échecs.</li>
<li><b>Jouer de</b> + instrument : jouer du piano, de la guitare.</li>
<li><b>Faire de</b> + activité : faire du vélo, du sport, de la natation.</li>
<li>Sortir, rester à la maison, se reposer, se promener (se balader), faire la sieste, prendre un verre, aller au cinéma.</li>
<li>« Qu'est-ce que vous faites pendant votre <b>temps libre</b> ? »</li>
</ul>
<h3>Verbes du jour</h3>
<div class="vocab-wrap"><table>
<tr><th></th><th>SE PROMENER</th><th>NAGER</th><th>COURIR</th><th>VOIR</th></tr>
<tr><td>Je</td><td>me promène</td><td>nage</td><td>cours</td><td>vois</td></tr>
<tr><td>Nous</td><td>nous promenons</td><td>nageons</td><td>courons</td><td>voyons</td></tr>
<tr><td>Ils</td><td>se promènent</td><td>nagent</td><td>courent</td><td>voient</td></tr>
</table></div>
<blockquote>⚠️ Se promener = famille ACHETER (è dans la botte). Nager garde le E devant -ons : nous nageons, comme mangeons.</blockquote>
`,
  bank: [
    {q:"Je joue — tennis.",
     o:["au", "à le", "du", "à la"],
     e:"À + le → au. Tennis is masculine (le tennis), so jouer au tennis."},
    {q:"Je joue — échecs.",
     o:["aux", "à les", "des", "au"],
     e:"À + les → aux. Les échecs is plural: jouer aux échecs, aux cartes."},
    {q:"Je joue — guitare.",
     o:["de la", "à la", "du", "de le"],
     e:"Instrument → jouer DE. La guitare is feminine, so de la stays as is: jouer de la guitare."},
    {q:"Il joue — piano.",
     o:["du", "au", "de le", "de la"],
     e:"Instrument → jouer de; de + le → du. Jouer du piano. Jouer au piano would mean playing a game called piano."},
    {q:"Je joue — pétanque.",
     o:["à la", "au", "de la", "aux"],
     e:"À la doesn't contract. Feminine sport/game → jouer à la pétanque."},
    {q:"Je vais — école.",
     o:["à l'", "au", "à la", "aux"],
     e:"Before a vowel, à + l' stays: à l'école, à l'hôpital. Only à + le and à + les contract."},
    {q:"Il parle — film.",
     o:["du", "de le", "des", "au"],
     e:"Parler de + le film → du film. De + le always contracts to du."},
    {q:"Je suis — Sud.",
     o:["du", "de le", "au", "des"],
     e:"Origin uses de: je suis du Sud, du Nord. De + le → du."},
    {q:"Je fais — vélo.",
     o:["du", "au", "de le", "à le"],
     e:"Faire de + activity: faire du vélo, du sport, du tennis. Jouer au tennis = faire du tennis."},
    {q:"Elle fait — natation.",
     o:["de la", "du", "à la", "au"],
     e:"La natation is feminine → faire de la natation (no contraction)."},
    {q:"On va — cinéma ce soir.",
     o:["au", "à le", "du", "en"],
     e:"Aller à + le cinéma → au cinéma."},
    {q:"Je reviens — États-Unis.",
     o:["des", "de les", "aux", "du"],
     e:"Revenir de + les États-Unis → des États-Unis. De + les → des."},
    {q:"Quelle règle est correcte ?",
     o:["jouer à + sport, jouer de + instrument", "jouer de + sport, jouer à + instrument", "jouer à pour tout", "jouer de pour tout"],
     e:"Games and sports: jouer à (au foot, aux cartes). Instruments: jouer de (du piano, de la guitare)."},
    {q:"Le dimanche, nous nous — à la campagne. (se promener)",
     o:["promenons", "promènons", "promennons", "promener"],
     e:"Se promener is acheter-family: è only in the boot. Nous is outside the boot, so nous nous promenons, no accent."},
    {q:"Tu te — souvent ? (se promener)",
     o:["promènes", "promenes", "promennes", "promène"],
     e:"Tu is in the boot → è: tu te promènes. Don't forget the -s for tu."},
    {q:"Nous — à la piscine. (nager)",
     o:["nageons", "nagons", "nagions", "nagez"],
     e:"Verbs in -ger keep an e before -ons so the g stays soft: nous nageons, nous mangeons."},
    {q:"Ils — leurs amis au café. (voir)",
     o:["voient", "voyent", "voyons", "vois"],
     e:"Voir: ils voient (i, not y). The y only appears for nous voyons / vous voyez."},
    {q:"L'après-midi, je — dans le parc. (courir)",
     o:["cours", "coure", "courir", "court"],
     e:"Courir: je cours, tu cours, il court. Single r, ending -s for je."},
    {q:"Le dimanche, je — . (se reposer)",
     o:["me repose", "se repose", "me reposes", "repose"],
     e:"Reflexive pronoun matches the subject: je me repose. 'Se repose' is il/elle."},
    {q:"« Pendant mon temps libre » signifie…",
     o:["during my free time", "during my work time", "during my holidays only", "for my weekend"],
     e:"Le temps libre = free time. Qu'est-ce que tu fais pendant ton temps libre ? is a TCF speaking classic."}
  ],
  vocab: [
    ["jouer au foot", "to play football"],
    ["jouer du piano", "to play the piano"],
    ["faire du vélo", "to cycle"],
    ["nager", "to swim"],
    ["se promener", "to go for a walk"],
    ["se balader", "to stroll (informal)"],
    ["se reposer", "to rest"],
    ["faire la sieste", "to take a nap"],
    ["le temps libre", "free time"],
    ["les échecs", "chess"],
    ["sortir avec les amis", "to go out with friends"]
  ]
});
