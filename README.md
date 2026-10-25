# Français Progressif — fiches, drills & deck Anki

Site : fiches de révision + drills interactifs + examen final + deck Anki, générés à partir des mêmes fichiers.

## Ajouter un chapitre (le seul geste à faire)

1. Copie `assets/chapters/_TEMPLATE.js` → `L26.js` (le nom du fichier = la clé du chapitre), remplis-le.
2. Sur GitHub : ouvre le dossier `assets/chapters/` → **Add file → Upload files** → dépose `L26.js` → **Commit**.

C'est tout. ~1 minute plus tard, le menu, l'accueil, l'examen et le deck Anki contiennent la leçon.

- Remplacer un fichier : upload un fichier du même nom, il écrase l'ancien (pas besoin de supprimer avant).
- Si un chapitre a une erreur, l'onglet **Actions** affiche ❌ avec le fichier et la question fautive. Le site en ligne garde la dernière bonne version.
- Ordre automatique : L1…L33, puis autres préfixes numérotés (ex. `P2L1` pour FP2), puis le reste (CONN, VOCAB).

## Le deck Anki

Lien « Deck Anki » sur la page d'accueil (`francais-fp1.apkg`). Réimporte-le quand tu veux : les cartes existantes sont mises à jour, pas dupliquées, et ton historique de révision est conservé.
Sous-decks : Vocabulaire (champ `vocab` des chapitres, 2 sens) · Contexte · Conjugaison (+ dictée) · Règles.

## Structure

```
index.html, chapitre.html, examen.html, dialogue.html
assets/app.js, style.css
assets/manifest.js        généré à la publication (copie locale seulement)
assets/chapters/*.js      UN fichier = fiche + questions + vocab
tools/build.mjs           vérifie les chapitres, construit le site
tools/build_anki.py       construit le deck Anki
.github/workflows/deploy.yml
```

## Réglage unique (déjà fait une fois)

Settings → Pages → Build and deployment → Source : **GitHub Actions**.

## Tester en local (optionnel)

```
node tools/build.mjs && pip install genanki && python3 tools/build_anki.py
cd _site && python3 -m http.server 8000
```
