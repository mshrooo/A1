# Français Progressif 1 — fiches & drills

Site statique : fiches de révision + drills interactifs + examen final.

## Structure
```
index.html            accueil (cartes générées automatiquement)
chapitre.html         page générique — chapitre.html?ch=L13, ?ch=L15, …
examen.html           examen : ~moitié de chaque chapitre, tiré au hasard
dialogue.html         interview orale + dictée des verbes
assets/
  manifest.js         ← LA liste des chapitres (une ligne par chapitre)
  app.js              moteur (nav, accueil, examen, quiz) — ne pas toucher
  style.css
  chapters/
    _TEMPLATE.js      modèle à copier
    L13.js L15.js L16.js CONN.js   un fichier = fiche + questions
```

## Ajouter un chapitre (ex. leçon 17)
1. Copier `assets/chapters/_TEMPLATE.js` → `assets/chapters/L17.js`, remplir
   `name`, `short`, `desc`, la fiche HTML dans `ref`, et les questions dans `bank`
   (la 1re option est toujours la bonne réponse ; tout est mélangé à l'affichage).
2. Ajouter `"L17"` dans `CHAPTER_LIST` (`assets/manifest.js`).

C'est tout : le menu, l'accueil et l'examen final intègrent le chapitre
automatiquement. Aucune autre page à modifier.

## Déploiement
GitHub Pages → Settings → Pages → Deploy from branch (`main`, root ou /docs).
