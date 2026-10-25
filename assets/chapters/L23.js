registerChapter("L23", {
  name: "Leçon 23 — Le futur proche & la météo",
  short: "L23",
  desc: "aller + infinitif · Il fait beau, il pleut, il neige",
  ref: `
<h2>L23 — Il va faire beau !</h2>
<h3>Le futur proche</h3>
<p><b>aller au présent + infinitif</b> : je vais manger, tu vas aller à la plage, nous allons partir.</p>
<div class="vocab-wrap"><table>
<tr><th>Forme</th><th>Exemple</th></tr>
<tr><td>affirmative</td><td>Je vais manger un sandwich.</td></tr>
<tr><td>négative</td><td>Vous <b>n'</b>allez <b>pas</b> venir. (ne… pas autour de « aller »)</td></tr>
<tr><td>question</td><td>Est-ce que tu vas voir Étienne ? · Vont-ils téléphoner ?</td></tr>
<tr><td>pronominal</td><td>Demain, je vais <b>me</b> lever tôt. (le pronom va devant l'infinitif)</td></tr>
</table></div>
<ul>
<li>C'est le temps le plus utilisé pour parler de l'avenir.</li>
<li>Sans précision : action immédiate. <i>Vite, mon père va arriver !</i></li>
<li>Avec un marqueur : <i>demain, cette semaine, ce mois-ci, cette année…</i></li>
</ul>
<h3>Parler du temps</h3>
<p>Il fait quel temps ? / Quel temps fait-il ? · Il fait <b>beau</b> / <b>mauvais</b> / <b>chaud</b> / <b>froid</b> · Il fait 32 °C · Il <b>pleut</b> (pleuvoir, la pluie) · Il <b>neige</b> (la neige) · Il y a des <b>nuages</b> · Il y a du <b>vent</b> · Il n'y a pas <b>de</b> vent · un orage.</p>
`,
  bank: [
    {q:"Demain, je — au restaurant. (manger, futur proche)",
     o:["vais manger", "vais mange", "vas manger", "vais à manger"],
     e:"Futur proche = aller conjugated + infinitive: je vais manger. The second verb never conjugates, and there's no à."},
    {q:"Nous — en vacances en juillet. (partir)",
     o:["allons partir", "allons partons", "allez partir", "vont partir"],
     e:"Nous allons + infinitive. Only aller changes with the subject."},
    {q:"Ils — ce soir. (téléphoner)",
     o:["vont téléphoner", "vont téléphonent", "va téléphoner", "allons téléphoner"],
     e:"Ils vont + infinitive. One conjugated verb per subject: vont."},
    {q:"Vous — à Paris. (ne pas venir)",
     o:["n'allez pas venir", "allez ne pas venir", "n'allez venir pas", "ne venez pas aller"],
     e:"In the futur proche, ne… pas wraps aller, the conjugated verb: vous n'allez pas venir."},
    {q:"Demain, je vais — tôt. (se lever)",
     o:["me lever", "se lever", "me lève", "lever"],
     e:"Reflexive verb in futur proche: the pronoun goes before the infinitive and matches the subject: je vais me lever, tu vas te lever."},
    {q:"Tu vas — avec lui ? (se marier)",
     o:["te marier", "se marier", "marier", "te maries"],
     e:"Tu → te: tu vas te marier. 'Se marier' with tu is the classic slip."},
    {q:"— -ils téléphoner ? (inversion)",
     o:["Vont", "Va", "Allons", "Vas"],
     e:"Inversion of ils vont: Vont-ils téléphoner ? Formal style."},
    {q:"« Vite, mon père va arriver ! » Le futur proche indique ici…",
     o:["une action immédiate", "un futur lointain", "une habitude", "le passé"],
     e:"Without a time marker, the futur proche often means 'any second now'."},
    {q:"Quelle phrase est correcte ?",
     o:["Je vais aller à Paris.", "Je vais à aller à Paris.", "Je vais allé à Paris.", "Je vais va à Paris."],
     e:"Aller + aller is fine: je vais aller = I'm going to go. The second aller stays infinitive."},
    {q:"Cette année, je — travailler dur. (devoir)",
     o:["vais devoir", "dois aller", "vais dois", "vais devrai"],
     e:"Futur proche of devoir: je vais devoir + infinitive. Two infinitives in a row is normal: vais devoir travailler."},
    {q:"On — ce week-end ? (sortir)",
     o:["va sortir", "allons sortir", "va sort", "vas sortir"],
     e:"On takes the il form: on va sortir. Never 'on allons'."},
    {q:"Il y a du soleil, il fait —.",
     o:["beau", "mauvais", "froid", "pluie"],
     e:"Il fait beau = nice weather. Il fait mauvais = bad weather. The weather uses the verb faire."},
    {q:"Il — (pleuvoir) à Paris aujourd'hui.",
     o:["pleut", "pleure", "pluie", "pleuve"],
     e:"Pleuvoir → il pleut. Careful: il pleure = he is crying (pleurer). La pluie = the rain (noun)."},
    {q:"Demain, il va — . (pleuvoir)",
     o:["pleuvoir", "pleut", "pleuvait", "la pluie"],
     e:"Futur proche: il va pleuvoir. Infinitive after va."},
    {q:"Il fait 35 °C à Jakarta : il fait —.",
     o:["chaud", "froid", "frais", "neige"],
     e:"Il fait chaud = it's hot. Avoid 'je suis chaud' for the weather: say j'ai chaud (I feel hot)."},
    {q:"Il n'y a pas — vent.",
     o:["de", "du", "le", "des"],
     e:"After a negation, du/de la/des become de: il y a du vent → il n'y a pas de vent."},
    {q:"Il y a beaucoup de — dans le ciel.",
     o:["nuages", "neiges", "pluies", "vents"],
     e:"Un nuage = a cloud. Il y a des nuages = it's cloudy."},
    {q:"« Quel temps fait-il ? » signifie…",
     o:["What's the weather like?", "What time is it?", "How long does it take?", "When is it?"],
     e:"Le temps = weather here (also 'time'). For the hour: Quelle heure est-il ?"}
  ],
  vocab: [
    ["il fait beau", "the weather is nice"],
    ["il fait mauvais", "the weather is bad"],
    ["il pleut", "it's raining"],
    ["la pluie", "the rain"],
    ["il neige", "it's snowing"],
    ["un nuage", "a cloud"],
    ["le vent", "the wind"],
    ["un orage", "a storm"],
    ["il fait chaud / froid", "it's hot / cold"],
    ["demain", "tomorrow"],
    ["cette année", "this year"]
  ]
});
