"""Builds the Anki deck from the same chapter files as the site.
Run after tools/build.mjs (GitHub Actions does both). Output: _site/francais-fp1.apkg

Deck layout (one subdeck per skill, every chapter feeds them automatically):
  Français FP1 (auto)::1 Vocabulaire   <- each chapter's `vocab` pairs, FR->EN and EN->FR
  Français FP1 (auto)::2 Contexte      <- the VOCAB chapter (daily-life sentences)
  Français FP1 (auto)::3 Conjugaison   <- fill-the-blank questions + the dialogue dictée
  Français FP1 (auto)::4 Règles        <- everything else (rules, traps, meanings)

Note IDs are derived from the chapter key + question text, so re-importing a newer
deck updates existing cards instead of duplicating them, and keeps your review history.
"""
import html, json, os, re
import genanki

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
data = json.load(open(os.path.join(ROOT, '_build', 'data.json'), encoding='utf-8'))
order, CH, D = data['order'], data['chapters'], data['dictee']

CSS = """
.card{font-family:Georgia,serif;font-size:20px;color:#1E2A4A;background:#FCFCF8;text-align:left;padding:14px;line-height:1.55}
.q{font-size:22px;margin-bottom:8px}.hint{color:#5A6685;font-size:15px}
.opts li{margin:3px 0}.ans{color:#1B6B50;font-weight:bold;font-size:24px}
.expl{margin-top:10px;padding:10px 12px;border-left:3px solid #C42B2B;background:#FDF9F4;font-size:16px}
.tag{display:inline-block;font-size:12px;color:#C42B2B;border:1px solid #E7C7C7;border-radius:999px;padding:0 10px;margin-bottom:8px}
hr#answer{border:none;border-top:1px dashed #AEBBDE;margin:12px 0}
"""

vocab_model = genanki.Model(1720001001, 'FP1 auto Vocab',
  fields=[{'name': 'Francais'}, {'name': 'Anglais'}, {'name': 'Chapitre'}],
  templates=[
    {'name': 'FR → EN', 'qfmt': '<span class="tag">{{Chapitre}}</span><div class="q"><b>{{Francais}}</b></div><div class="hint">→ anglais ?</div>',
     'afmt': '{{FrontSide}}<hr id="answer"><div class="ans">{{Anglais}}</div>'},
    {'name': 'EN → FR', 'qfmt': '<span class="tag">{{Chapitre}}</span><div class="q"><b>{{Anglais}}</b></div><div class="hint">→ français ?</div>',
     'afmt': '{{FrontSide}}<hr id="answer"><div class="ans">{{Francais}}</div>'}],
  css=CSS)
mcq_model = genanki.Model(1720001002, 'FP1 auto MCQ',
  fields=[{'name': 'Question'}, {'name': 'Options'}, {'name': 'Reponse'}, {'name': 'Explication'}, {'name': 'Chapitre'}],
  templates=[{'name': 'MCQ',
    'qfmt': '<span class="tag">{{Chapitre}}</span><div class="q">{{Question}}</div><ul class="opts">{{Options}}</ul>',
    'afmt': '{{FrontSide}}<hr id="answer"><div class="ans">{{Reponse}}</div><div class="expl">{{Explication}}</div>'}],
  css=CSS)
dictee_model = genanki.Model(1720001003, 'FP1 auto Dictee',
  fields=[{'name': 'Phrase'}, {'name': 'Reponse'}, {'name': 'Explication'}],
  templates=[{'name': 'Dictée',
    'qfmt': '<span class="tag">Dictée</span><div class="q">{{Phrase}}</div><div class="hint">Écris le verbe conjugué (accents !)</div>',
    'afmt': '{{FrontSide}}<hr id="answer"><div class="ans">{{Reponse}}</div><div class="expl">{{Explication}}</div>'}],
  css=CSS)

root = 'Français FP1 (auto)'
d_vocab = genanki.Deck(1720002001, root + '::1 Vocabulaire')
d_ctx = genanki.Deck(1720002002, root + '::2 Contexte')
d_conj = genanki.Deck(1720002003, root + '::3 Conjugaison')
d_rules = genanki.Deck(1720002004, root + '::4 Règles')

BLANK = '<b>______</b>'
CONJ_HINT = re.compile(r'\((?:[^)]*\b(?:se |s\'|futur)|[a-zéèêîôûç\' ]+(?:er|ir|re|oir)(?: / [a-zéèêîôûç\' ]+)?)\)\s*\.?$', re.I)

counts = dict(vocab=0, ctx=0, conj=0, rules=0, dictee=0)
seen_vocab = set()
for key in order:
    c = CH[key]
    tag = c['short']
    for fr, en in c.get('vocab', []) or []:
        if fr in seen_vocab:
            continue
        seen_vocab.add(fr)
        d_vocab.add_note(genanki.Note(model=vocab_model, fields=[html.escape(fr), html.escape(en), tag],
                                      guid=genanki.guid_for('vocab', fr), tags=['FP1', key]))
        counts['vocab'] += 1
    for item in c['bank']:
        q, o, e = item['q'], item['o'], item['e']
        opts = ''.join('<li>%s</li>' % html.escape(x) for x in sorted(o, key=str.lower))
        note = genanki.Note(model=mcq_model,
                            fields=[html.escape(q).replace('—', BLANK), opts, html.escape(o[0]), html.escape(e), tag],
                            guid=genanki.guid_for(key, q), tags=['FP1', key])
        if key == 'VOCAB':
            d_ctx.add_note(note); counts['ctx'] += 1
        elif '—' in q and CONJ_HINT.search(q):
            d_conj.add_note(note); counts['conj'] += 1
        else:
            d_rules.add_note(note); counts['rules'] += 1

for line in D:
    phrase = re.sub(r'\[([^\]]+)\]', lambda m: BLANK + ' <i style="color:#C42B2B">(%s)</i>' % html.escape(m.group(1)), html.escape(line['t']))
    d_conj.add_note(genanki.Note(model=dictee_model,
        fields=['<span class="hint">%s :</span><br>%s' % (html.escape(line['w']), phrase), ' · '.join(line['a']), html.escape(line['e'])],
        guid=genanki.guid_for('dictee', line['t']), tags=['FP1', 'dictee']))
    counts['dictee'] += 1

out = os.path.join(ROOT, '_site', 'francais-fp1.apkg')
genanki.Package([d_vocab, d_ctx, d_conj, d_rules]).write_to_file(out)
cards = counts['vocab'] * 2 + counts['ctx'] + counts['conj'] + counts['rules'] + counts['dictee']
print(f"✅ Anki deck: {cards} cards ({counts}) -> _site/francais-fp1.apkg")
