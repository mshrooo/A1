registerChapter("L24", {
  name: "Leçon 24 — L'interrogation partielle & les pays",
  short: "L24",
  desc: "Où, quand, comment, pourquoi, combien, qui, que, quel · au/en/aux",
  ref: `
<h2>L24 — Tu pars où en vacances ?</h2>
<h3>4 façons de poser une question ouverte</h3>
<div class="vocab-wrap"><table>
<tr><th>Structure</th><th>Exemple</th><th>Registre</th></tr>
<tr><td>mot interrogatif à la fin</td><td>Tu vas où ?</td><td>familier, très courant</td></tr>
<tr><td>mot interrogatif au début</td><td>Comment tu vas ?</td><td>familier</td></tr>
<tr><td>+ est-ce que</td><td>Quand est-ce qu'il part ?</td><td>neutre</td></tr>
<tr><td>inversion</td><td>Pourquoi travaillez-vous ?</td><td>formel</td></tr>
</table></div>
<h3>Les mots interrogatifs</h3>
<ul>
<li><b>pourquoi</b> (raison) → réponse « parce que ». Jamais à la fin.</li>
<li><b>comment</b> (manière) · <b>où</b> (lieu) · <b>quand</b> (temps)</li>
<li><b>combien</b> (quantité) ; + nom → <b>combien de</b> : combien de temps ?</li>
<li><b>qui</b> (personnes) : Qui aime le thé ? · À qui parles-tu ?</li>
<li><b>que</b> (choses) → <b>quoi</b> seul ou en fin : Que veux-tu ? · Tu veux quoi ? · Qu'est-ce que c'est ?</li>
<li><b>quel, quels, quelle, quelles</b> s'accorde avec le nom : Quel âge as-tu ? Quelle heure est-il ?</li>
</ul>
<ul>
<li>Inversion avec un nom : on ajoute le pronom → <i>Quand Michel part-il ?</i></li>
<li>Deux voyelles qui se touchent → <b>-t-</b> : <i>Va-t-il au restaurant ? Mange-t-elle ?</i></li>
</ul>
<h3>Pays et villes</h3>
<p>Ville → <b>à</b> (à Paris) · pays féminin (en -e) → <b>en</b> (en France) · pays masculin → <b>au</b> (au Japon, au Mexique !) · pays pluriel → <b>aux</b> (aux États-Unis). Retour : de / du / des (je reviens <b>du</b> Japon).</p>
`,
  bank: [
    {q:"Quelle question est la plus formelle ?",
     o:["Pourquoi travaillez-vous ?", "Pourquoi vous travaillez ?", "Pourquoi est-ce que vous travaillez ?", "Vous travaillez pourquoi ?"],
     e:"Inversion (verb-subject) is the formal register. Est-ce que is neutral. The last one is wrong anyway: pourquoi never goes at the end."},
    {q:"Quelle question est neutre ?",
     o:["Quand est-ce qu'il part ?", "Il part quand ?", "Quand part-il ?", "Quand il part ?"],
     e:"Est-ce que = neutral, safe everywhere, including the TCF speaking test."},
    {q:"Quelle question est incorrecte ?",
     o:["Vous chantez pourquoi ?", "Pourquoi vous chantez ?", "Pourquoi chantez-vous ?", "Pourquoi est-ce que vous chantez ?"],
     e:"Pourquoi can never go at the end of the sentence. Où, quand, comment can."},
    {q:"— tu t'appelles ?",
     o:["Comment", "Quel", "Qu'est-ce que", "Qui"],
     e:"Comment = how: comment tu t'appelles ? Literally 'how do you call yourself'."},
    {q:"Vous partez — ? Lundi.",
     o:["quand", "où", "comment", "combien"],
     e:"Answer is a day → quand (when)."},
    {q:"Tu habites — ? À Jakarta.",
     o:["où", "quand", "quel", "comment"],
     e:"Answer is a place → où (where)."},
    {q:"Il y a combien — élèves ?",
     o:["d'", "des", "les", "de les"],
     e:"Combien + noun needs de: combien de temps, combien d'élèves (d' before a vowel)."},
    {q:"Pourquoi tu étudies le français ? — je veux vivre au Canada.",
     o:["Parce que", "Pourquoi", "Car que", "Pour que"],
     e:"Pourquoi → parce que (because). Parce qu' before a vowel: parce qu'il…"},
    {q:"— est ton film préféré ?",
     o:["Quel", "Quelle", "Qu'est-ce que", "Que"],
     e:"Quel agrees with the noun: film is masculine singular → quel."},
    {q:"— heure est-il ?",
     o:["Quelle", "Quel", "Quels", "Combien"],
     e:"Heure is feminine → quelle heure."},
    {q:"Vous cherchez — ?",
     o:["quoi", "que", "qu'", "quel"],
     e:"Que becomes quoi at the end of a sentence or alone: vous cherchez quoi ? C'est quoi ?"},
    {q:"— cherchez-vous ? (formel)",
     o:["Que", "Quoi", "Quel", "Qui"],
     e:"Que at the start with inversion: que cherchez-vous ? Same meaning as 'vous cherchez quoi ?'."},
    {q:"— est-ce que c'est ?",
     o:["Qu'", "Quoi", "Quel", "Qui"],
     e:"Qu'est-ce que c'est ? = what is it? Que elides to qu' before est-ce."},
    {q:"— parles-tu ? (to whom)",
     o:["À qui", "Qui", "À quoi", "Quel"],
     e:"Parler à quelqu'un → the preposition moves to the front: à qui parles-tu ?"},
    {q:"— aime le thé ? (person, subject)",
     o:["Qui", "Que", "Quoi", "Quel"],
     e:"Qui for people. As subject: qui aime le thé ? or qui est-ce qui aime le thé ?"},
    {q:"Va-—-il au restaurant ?",
     o:["t", "s", "l", "n"],
     e:"Va and il would clash vowel to vowel, so add -t-: va-t-il, mange-t-elle, a-t-on."},
    {q:"Quand Michel — ? (partir, inversion)",
     o:["part-il", "part", "il part", "partent-ils"],
     e:"Inversion with a noun subject: keep the noun, then add the matching pronoun after the verb: Michel part-il ?"},
    {q:"Je vais — Japon.",
     o:["au", "en", "à", "aux"],
     e:"Masculine country (doesn't end in -e) → au: au Japon, au Canada, au Portugal."},
    {q:"Je vais — France.",
     o:["en", "au", "à la", "à"],
     e:"Feminine country (ends in -e) → en: en France, en Espagne, en Indonésie."},
    {q:"Je vais — États-Unis.",
     o:["aux", "au", "en", "des"],
     e:"Plural country → aux: aux États-Unis, aux Pays-Bas."},
    {q:"Je vais — Mexique.",
     o:["au", "en", "à", "aux"],
     e:"Mexique ends in -e but is masculine, the famous exception → au Mexique."},
    {q:"Je vais — Montréal.",
     o:["à", "au", "en", "aux"],
     e:"Cities take à: à Montréal, à Paris, à Jakarta."},
    {q:"Je reviens — Japon.",
     o:["du", "de", "au", "des"],
     e:"Coming back from a masculine country: de + le → du Japon. From a feminine one: de France."}
  ],
  vocab: [
    ["pourquoi", "why"],
    ["parce que", "because"],
    ["comment", "how"],
    ["où", "where"],
    ["quand", "when"],
    ["combien (de)", "how much / how many"],
    ["qui", "who"],
    ["qu'est-ce que", "what"],
    ["quel / quelle", "which / what"],
    ["une agence de voyages", "travel agency"],
    ["à l'étranger", "abroad"],
    ["réserver", "to book"],
    ["une auberge de jeunesse", "youth hostel"]
  ]
});
