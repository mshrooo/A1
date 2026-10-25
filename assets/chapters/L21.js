registerChapter("L21", {
  name: "Leçon 21 — Les possessifs, la fréquence & la famille",
  short: "L21",
  desc: "Mon, ma, mes, leur… · jamais → toujours · la famille",
  ref: `
<h2>L21 — Mon frère s'appelle Jean</h2>
<h3>Les adjectifs possessifs</h3>
<div class="vocab-wrap"><table>
<tr><th></th><th>masculin</th><th>féminin</th><th>pluriel</th></tr>
<tr><td>je</td><td>mon</td><td>ma</td><td>mes</td></tr>
<tr><td>tu</td><td>ton</td><td>ta</td><td>tes</td></tr>
<tr><td>il / elle / on</td><td>son</td><td>sa</td><td>ses</td></tr>
<tr><td>nous</td><td colspan="2">notre</td><td>nos</td></tr>
<tr><td>vous</td><td colspan="2">votre</td><td>vos</td></tr>
<tr><td>ils / elles</td><td colspan="2">leur</td><td>leurs</td></tr>
</table></div>
<ul>
<li>Devant une voyelle ou un H muet : ma → <b>mon</b>, ta → <b>ton</b>, sa → <b>son</b> (mon amie, ton école).</li>
<li>Liaisons : mon_armoire, mes_enfants.</li>
</ul>
<blockquote>⚠️ Le possessif s'accorde avec l'<b>objet possédé</b>, pas avec le propriétaire : <i>Marc aime sa mère</i> (mère = féminin), <i>Julie aime son père</i>. « Son livre » = his book OU her book.</blockquote>
<h3>La fréquence</h3>
<p>ne… <b>jamais</b> → rarement → <b>parfois</b> (= des fois, familier) → souvent → presque toujours → <b>toujours</b>. Aussi : tous les jours, tous les dimanches.</p>
<h3>La famille</h3>
<p>père, mère, frère, sœur, fils, fille, mari, femme · grand-père, grand-mère, petit-fils, petite-fille · oncle, tante, neveu, nièce, cousin(e) · beau-père, belle-mère, demi-frère, demi-sœur · arrière-grand-mère · séparés, divorcés, mariés · copain, copine.</p>
`,
  bank: [
    {q:"— maison est en Dordogne. (je)",
     o:["Ma", "Mon", "Mes", "Me"],
     e:"Maison is feminine and starts with a consonant → ma maison."},
    {q:"— amie s'appelle Léa. (je)",
     o:["Mon", "Ma", "Mes", "M'"],
     e:"Amie is feminine BUT starts with a vowel → mon amie (ma becomes mon to avoid two vowels). Same: ton école, son histoire."},
    {q:"Elle a quitté — copain.",
     o:["son", "sa", "ses", "leur"],
     e:"Copain is masculine → son copain. The owner being a woman doesn't matter."},
    {q:"Marc aime beaucoup — mère.",
     o:["sa", "son", "ses", "leur"],
     e:"The possessive agrees with the THING owned, not the owner. Mère is feminine → sa mère, even though Marc is a man. The #1 trap for English speakers, who think 'his → son'."},
    {q:"Julie adore — père.",
     o:["son", "sa", "ses", "leur"],
     e:"Père is masculine → son père, even though Julie is a woman. French possessives ignore the owner's gender."},
    {q:"« Son livre » peut signifier…",
     o:["his book OU her book", "only his book", "only her book", "their book"],
     e:"Son/sa/ses don't tell you the owner's gender. Son livre = his book or her book. Context decides."},
    {q:"Nous sommes mariés et — enfants vivent en France.",
     o:["nos", "notre", "nous", "leurs"],
     e:"Nous + plural → nos enfants. Singular would be notre (notre fils)."},
    {q:"Ils habitent en France mais — enfants vivent aux États-Unis.",
     o:["leurs", "leur", "ses", "nos"],
     e:"Ils + several things → leurs enfants. Leur (no s) = their + one thing."},
    {q:"Ils sont mariés et — chien est un berger allemand.",
     o:["leur", "leurs", "son", "ses"],
     e:"Ils + one dog → leur chien. The s only appears when the owned thing is plural."},
    {q:"Bonjour Monsieur, — affaires sont là.",
     o:["vos", "votre", "vous", "tes"],
     e:"Vous (formal) + plural → vos affaires. Singular: votre valise."},
    {q:"Tu es professeur et — parents sont à la retraite.",
     o:["tes", "ton", "ta", "tu"],
     e:"Tu + plural → tes parents."},
    {q:"Tu aimes — école ?",
     o:["ton", "ta", "tes", "t'"],
     e:"École is feminine but starts with a vowel → ton école."},
    {q:"Le frère de mon père, c'est mon…",
     o:["oncle", "cousin", "neveu", "beau-père"],
     e:"Father's brother = oncle. His children = mes cousins."},
    {q:"La fille de ma sœur, c'est ma…",
     o:["nièce", "cousine", "tante", "petite-fille"],
     e:"Sister's daughter = nièce. Sister's son = neveu."},
    {q:"Le nouveau mari de ma mère, c'est mon…",
     o:["beau-père", "grand-père", "oncle", "demi-frère"],
     e:"Stepfather = beau-père (it also means father-in-law). Stepmother/mother-in-law = belle-mère."},
    {q:"Le fils de mon fils, c'est mon…",
     o:["petit-fils", "neveu", "arrière-fils", "cousin"],
     e:"Grandson = petit-fils. Granddaughter = petite-fille. Great-grandfather = arrière-grand-père."},
    {q:"« Parfois » = …",
     o:["sometimes", "never", "always", "often"],
     e:"Parfois = sometimes. Des fois means the same but is familiar/spoken."},
    {q:"Je ne vois — mon cousin, il habite à Toronto. (never)",
     o:["jamais", "toujours", "souvent", "parfois"],
     e:"Ne… jamais = never. Like ne… pas, it wraps the verb: je ne vois jamais."},
    {q:"Quel adverbe est le plus fréquent ?",
     o:["presque toujours", "souvent", "parfois", "rarement"],
     e:"Scale: jamais < rarement < parfois < souvent < presque toujours < toujours."},
    {q:"Le dimanche, il déjeune — avec sa famille. (always)",
     o:["toujours", "jamais", "rarement", "parfois"],
     e:"Toujours = always. Tous les dimanches = every Sunday, same idea."}
  ],
  vocab: [
    ["le père / la mère", "father / mother"],
    ["le frère / la sœur", "brother / sister"],
    ["le fils / la fille", "son / daughter"],
    ["le mari / la femme", "husband / wife"],
    ["les grands-parents", "grandparents"],
    ["le petit-fils / la petite-fille", "grandson / granddaughter"],
    ["l'oncle / la tante", "uncle / aunt"],
    ["le neveu / la nièce", "nephew / niece"],
    ["le cousin / la cousine", "cousin"],
    ["le beau-père", "stepfather / father-in-law"],
    ["la belle-mère", "stepmother / mother-in-law"],
    ["le demi-frère", "half-brother"],
    ["jamais", "never"],
    ["rarement", "rarely"],
    ["parfois", "sometimes"],
    ["souvent", "often"],
    ["toujours", "always"]
  ]
});
