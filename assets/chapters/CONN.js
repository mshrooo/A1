registerChapter("CONN", {
  name: "Connecteurs du récit",
  short: "Connecteurs",
  desc: "Tout d'abord, puis, après, avant de, enfin",
  ref: `<h2>Connecteurs — raconter dans l'ordre</h2>
<div class="vocab-wrap"><table>
<tr><th>Français</th><th>Anglais</th><th>Exemple</th></tr>
<tr><td>Tout d'abord</td><td>First of all</td><td>Tout d'abord, je me réveille à 7h</td></tr>
<tr><td>Premièrement</td><td>Firstly (formel, liste)</td><td>Premièrement... deuxièmement...</td></tr>
<tr><td>Avant</td><td>Before (+ nom)</td><td>Avant le dîner, je fais la vaisselle</td></tr>
<tr><td>Avant de</td><td>Before (+ infinitif)</td><td>Avant de dormir, je lis</td></tr>
<tr><td>Puis</td><td>Then</td><td>Je me rase, puis je m'habille</td></tr>
<tr><td>Après</td><td>After / afterwards</td><td>Après, j'étudie le français</td></tr>
<tr><td>Enfin</td><td>Finally (neutre)</td><td>Enfin, je me couche</td></tr>
<tr><td>Finalement</td><td>Finally / in the end (résultat)</td><td>Finalement, il n'est pas venu</td></tr>
</table></div>
<blockquote>⚠️ <b>Avant</b> + nom (avant le dîner) mais <b>avant de</b> + infinitif (avant de dîner). <b>Puis</b> relie des actions, jamais un nom seul. À l'oral, préférez <b>tout d'abord</b> à « <i>premièrement</i> ».</blockquote>`,
  bank: [
{q:"—, je me réveille à 7 heures. (first of all)",o:["Tout d'abord","Après","Puis","Finalement"],e:"Tout d'abord = first of all — the natural opener in speech. Premièrement works too but sounds more list-like/formal."},
{q:"Je me rase, — je m'habille. (then)",o:["puis","avant","tout d'abord","premièrement"],e:"Puis = then, linking actions in sequence. It starts the next clause: je me rase, puis je m'habille."},
{q:"— le dîner, je fais la vaisselle. (after)",o:["Après","Avant de","Puis","Enfin"],e:"Après + noun = after the dinner. 'Avant de' needs a verb (avant de dîner), 'puis' can't take a noun."},
{q:"— dormir, je lis un peu. (before + verb)",o:["Avant de","Avant","Après de","Puis"],e:"Before a VERB, avant needs DE: avant de dormir. Bare 'avant' works only with nouns (avant le dîner). 'Après de' doesn't exist."},
{q:"— le petit-déjeuner, je me douche. (before + noun)",o:["Avant","Avant de","Puis","Finalement"],e:"Avant + noun directly: avant le petit-déjeuner. The 'de' appears only before infinitives."},
{q:"—, je me couche vers 23 heures. (finally, wrapping up)",o:["Enfin","Avant","Tout d'abord","Puis... non, la toute fin"],e:"Enfin = the neutral 'finally/lastly' for closing a sequence. Finalement also works but carries a hint of 'in the end / after all' (outcome, sometimes surprise)."},
{q:"« Finalement, il n'est pas venu. » Ici, finalement exprime…",o:["un résultat inattendu (« in the end / after all »)","une simple dernière étape","le début d'une liste","la simultanéité"],e:"Finalement often = 'in the end, as it turned out' — an outcome, sometimes against expectation. For a plain last step in a routine, enfin is the cleaner choice."},
{q:"—, je me lève. Deuxièmement, je me douche. (firstly, formal list)",o:["Premièrement","Tout d'abord... les deux marchent, mais ici la liste numérotée continue","Puis","Après"],e:"Premièrement pairs with deuxièmement/troisièmement in numbered lists — formal, structured. Since 'deuxièmement' follows, premièrement is the matching opener."},
{q:"Je finis à 17h. —, je bois un thé avec une amie.",o:["Après","Avant","Avant de","Premièrement"],e:"Après used ALONE = afterwards: Après, je bois un thé. It doesn't need a noun when the timeline is already set."},
{q:"Ordre logique d'un récit de journée :",o:["Tout d'abord → puis → après → enfin","Enfin → puis → tout d'abord → après","Après → avant → puis → enfin","Puis → tout d'abord → enfin → après"],e:"The classic TCF-speaking skeleton: Tout d'abord (opener) → puis (next) → après (later) → enfin (closer). Chain these and any description sounds structured."},
{q:"« Avant » et « après » sont opposés. Complète : — le cours, je révise ; — le cours, je rentre.",o:["Avant / après","Après / avant","Puis / avant","Avant / puis"],e:"Avant le cours = before class (revising), après le cours = after class (going home). Both take the noun directly."},
{q:"Quelle phrase est correcte ?",o:["Avant de me coucher, je me lave les dents.","Avant me coucher, je me lave les dents.","Avant de me couche, je me lave les dents.","Avant que me coucher, je me lave les dents."],e:"Avant de + INFINITIVE, and the reflexive pronoun still matches the subject: avant de ME coucher (je). The verb after 'avant de' never conjugates."},
{q:"Puis ne peut PAS…",o:["être suivi directement d'un nom (« puis le dîner » seul)","commencer une phrase","relier deux actions","s'utiliser à l'oral"],e:"Puis links ACTIONS (clauses with verbs): je dîne, puis je lis. It can't stand before a lone noun the way 'après le dîner' can."},
{q:"Version orale naturelle de « premièrement » :",o:["tout d'abord / d'abord","enfin","finalement","avant"],e:"In speech, tout d'abord (or just d'abord) sounds natural; premièrement leans formal/written, best kept for numbered arguments."},
]
});
