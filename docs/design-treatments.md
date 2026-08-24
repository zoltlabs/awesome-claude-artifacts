# Design treatments

The third axis. `use_case` says who it's for, `style` says what you do with it, and
neither one tells you a thing about what it **looks like** — which is the only property a
visitor can judge from a thumbnail.

That matters more here than in most catalogues, because the gallery is a wall of images.
A visitor scrolling the grid is doing visual triage long before they read a single
summary. Two `calculator` / `sales` entries with identical treatments are, at grid
distance, one entry that appears twice.

## The failure mode this exists to prevent

Left alone, generated artifacts converge. The attractor is well documented and easy to
recognise:

> Warm cream ground (`#F4F1EA`), a serif display face, a terracotta accent, hairline
> rules, rounded cards with a coloured left bar, Inter or Space Grotesk as the "safe"
> body face, emoji as section markers, everything centred.

Any one of those is fine. All of them together is the house style of nothing in
particular, and seventy-six entries wearing it would make the grid look like a single
template with the text swapped — which is precisely the criticism the gallery exists to
answer. So `design` is a **seeding constraint first and a filter second**: the point is
that the wall looks varied on day one.

Three rules follow from that:

1. **The subject picks the treatment, not the builder's taste.** A phosphor terminal
   suits an on-call severity wizard and actively fights a gardening log. Where the
   subject has its own visual world — a festival, a field notebook, a trading desk —
   that world wins.
2. **No treatment more than four times in the seed set.** Twelve treatments across 76
   entries averages six, so the cap is deliberately tight at seed time; it loosens once
   real submissions arrive.
3. **A thumbnail must be identifiable by ground colour and dominant shape alone.** If
   two entries read the same at 400px, one of them changes. CI warns on a repeated
   `style` + `design` pair for exactly this reason.

Each recipe below gives a palette you can paste, a type pairing, the structural logic,
a motion posture, and the thumbnail signature. Palettes are the light values; every
entry still ships both themes, so each recipe also names how it inverts.

---

## `swiss` · Swiss grid

`#FFFFFF` ground · `#111111` ink · `#767676` secondary · `#D8D8D8` rule · `#E1140A` signal

**Type.** One grotesque doing everything — Archivo, or Roboto Condensed for labels.
No serif anywhere. Tight tracking on display sizes, flush left, rag right, never
justified, never centred.

**Structure.** A visible 12-column modular grid that content actually snaps to. Type
sits on a baseline rhythm. No boxes, no shadows, no radius — hierarchy comes from size,
weight and position only. White space is the primary material and there should be an
uncomfortable amount of it.

**Motion.** None, or a single 120ms crossfade. Movement is not part of this language.

**Thumbnail.** White field, strong left edge of type, exactly one red element.

**Suits.** Structural subjects where the layout is the argument: comparison tables,
constituency trees, geometric puzzles, product briefs.

**Fails.** Anything that needs warmth, and anything with too many data series for one
accent colour to carry.

**Inverts to.** `#0D0D0D` ground, `#F2F2F2` ink, the red lifted to `#FF3B2F`.

---

## `blueprint` · Technical drawing

`#0E2A47` ground · `#1B3A5C` grid · `#7FA8CE` line · `#E8F0F8` ink · `#F2A33C` callout

**Type.** IBM Plex Mono for every label, dimension and annotation; IBM Plex Sans for
running prose. Labels are uppercase with wide tracking and often set in a rule break.

**Structure.** A graph-paper ground at two grid scales. Measurements drawn with real
dimension lines and arrow terminals. Callouts on leader lines to numbered circles. A
title block in the corner with a revision number. Everything is stroke, nothing is fill.

**Motion.** Lines draw themselves on first render (`stroke-dasharray`), 400ms, once.

**Thumbnail.** Deep blue field with thin pale linework — unmistakable at any size.

**Suits.** Mechanism: how a system is put together, how an incident unfolded, how a
queue behaves.

**Fails.** Long-form reading. Blue-on-blue at body size is tiring past a few hundred
words — use the light variant (`#F2F5F8` ground, `#2B5580` line) when there's real prose.

**Inverts to.** It is already dark; the light variant above is the light theme.

---

## `terminal` · Terminal

`#0B0E0C` ground · `#1E5C3A` dim · `#35E07E` phosphor · `#C8F5DA` ink · `#E8B33A` alert

**Type.** Monospace and nothing else. Box-drawing characters (`─ │ ┌ ┤`) for rules and
frames. A fixed measure — 80 or 100 characters — held even on wide screens.

**Structure.** One column, hard left. A status line pinned to the bottom showing state.
Prompts and results in a scrollback, not in cards. Keyboard is the primary input and
every action shows its key.

**Motion.** A block cursor blink, and nothing else. Optionally a typed-out reveal on
first paint, skipped under `prefers-reduced-motion`.

**Thumbnail.** Near-black with green text. The most instantly recognisable tile on the
grid, which is why it's capped hard.

**Suits.** On-call and operator work, developer tools, anything where the output is
meant to be copied and pasted somewhere else.

**Fails.** Print. Anything a non-technical audience has to trust. Charts with more than
two series.

**Inverts to.** It doesn't. This is a single-theme treatment — declare it deliberately
and paint every colour explicitly.

---

## `brutalist` · Brutalist web

`#FFFFFF` ground · `#000000` ink · `#EDEDED` fill · `#FF4D00` accent

**Type.** Deliberately plain — system UI stack, or Times for display. Enormous weight
and size contrast: a 72px heading directly above 14px body. Links underlined, visited
links a different colour, like it's 1996 on purpose.

**Structure.** 2px solid borders on everything, zero radius, zero shadow. Asymmetric
columns of unequal width. Headings allowed to overflow their container. Tables with
visible borders on every cell. The rawness is composed, not accidental — every ugly
decision is a decision.

**Motion.** Instant state changes. No transitions at all.

**Thumbnail.** White with heavy black rules and one orange block.

**Suits.** Tools that want to signal "utility, not product": data explorers, blunt
positioning exercises, loud launch narratives.

**Fails.** Anything selling to a conservative buyer, and anything where the content is
already visually noisy.

**Inverts to.** `#000000` ground, `#FFFFFF` ink, borders stay 2px, accent to `#FF6A2B`.

---

## `clinical` · Soft clinical

`#F7F9FB` ground · `#FFFFFF` surface · `#1D2A32` ink · `#5E7280` muted · `#2E7D8F` accent
· semantic `#3E8E5A` / `#C2543A`

**Type.** A humanist sans at generous size — Source Sans 3, Public Sans. Line height
1.7. Nothing below 14px anywhere, including footnotes.

**Structure.** White cards on a pale ground, 12px radius, one soft shadow. Wide padding.
A single column at a comfortable measure. Semantic colour carries meaning and is never
decorative. Every control has a visible label, never a placeholder standing in for one.

**Motion.** 200ms ease-out on state change. Calm, never bouncy.

**Thumbnail.** Pale blue-grey with floating white cards.

**Suits.** Health, education, onboarding, training — anywhere the reader may be anxious
or unfamiliar and legibility outranks personality.

**Fails.** It is the closest recipe here to generic SaaS. Earn it with real semantic
colour and typographic care, or it becomes wallpaper.

**Inverts to.** `#0F161B` ground, `#18222A` surface, accent lifted to `#59B6C7`.

---

## `riso` · Risograph

`#F5F0E4` paper · `#1A1A1A` key · `#FF4A3D` ink one · `#0B57A4` ink two · overprint via
`mix-blend-mode: multiply`

**Type.** A chunky grotesque for display (Archivo Black weight) against a plain body
face. Display type set large and slightly cramped, like it was cut to fit the page.

**Structure.** Two spot inks only — the third colour exists only where they overlap, and
that overlap must be visible somewhere. A grain overlay at 3–5% opacity. Elements offset
by 1–2px from their outlines, as if the second pass missed registration. Occasional 1°
rotation.

**Motion.** None. This is a printed object.

**Thumbnail.** Cream ground with two saturated inks overlapping into a third.

**Suits.** Creative work, zines, cultural and community subjects, anything handmade.

**Fails.** Precision. Do not use it where an exact number carries weight — the whole
grammar says "approximately."

**Inverts to.** `#1C1A16` ground with the inks lifted; keep the grain, drop the paper
texture.

---

## `deco` · Deco poster

`#10182B` ground · `#EFE7D6` cream · `#C8A24A` gold · `#7A2E36` oxblood

**Type.** A high-contrast geometric display face, letterspaced small caps for labels, a
quiet serif for body. Numerals are a feature — set them large.

**Structure.** Bilateral symmetry, which is the one place in this whole document where
centring is correct. Stepped rules, fans, arcs and rays drawn in SVG. Framed panels with
mitred corners. Composition is vertical and poster-like.

**Motion.** A single staged entrance — rules extending, then type fading in. 600ms
total, once.

**Thumbnail.** Dark navy with gold symmetry. Reads as a poster at any size.

**Suits.** Events, festivals, performance, anything with a sense of occasion.

**Fails.** Dense data. Symmetry and tables are natural enemies.

**Inverts to.** Cream ground with ink navy type and the same gold — a genuinely
different-looking light mode, which is fine as long as both are designed.

---

## `archival` · Archival

`#FBF8F1` ivory · `#232019` ink · `#6E6659` warm grey · `#DED6C6` rule · `#8C5A2B` accent

**Type.** An oldstyle serif with real oldstyle figures (`font-variant-numeric:
oldstyle-nums`) — EB Garamond, Spectral. Small caps for section labels. Italic for
apparatus.

**Structure.** A wide outer margin carrying marginal notes and figure numbers — this is
the load-bearing detail, and the thing that separates it from generic cream. Footnote
rules. Figures numbered and referenced from the prose in both directions. Measure held
at 62–66 characters.

**Motion.** None. Consider `scroll-behavior: smooth` for internal references and stop
there.

**Thumbnail.** Ivory with dense serif text, a hairline rule, and notes hanging in the
margin.

**Suits.** Reports, scholarship, timelines, manuscripts — anything with an apparatus.

**Fails.** ⚠️ This is the recipe nearest the generated-artifact default. Cream plus a
serif plus a warm accent is *the* attractor. It earns its place through the marginalia,
the oldstyle figures, and the footnote culture. Without those three, use something else.

**Inverts to.** `#14120E` ground, `#E8E2D5` ink, accent to `#C4874A`.

---

## `dense` · Data terminal

`#12151A` ground · `#191D24` panel · `#262C36` grid · `#D6DCE5` ink · `#4ED88A` up ·
`#F2645A` down · `#6E9BF5` accent

**Type.** A condensed grotesque for labels, tabular monospace for every digit.
`font-variant-numeric: tabular-nums` everywhere without exception. 12–13px body.

**Structure.** 22px rows. Tables, not cards. Chrome reduced to nothing — no padding you
could remove. Inline sparklines in table cells. Colour is semantic and only semantic.
Density itself is the aesthetic: the screen should look like it knows more than you do.

**Motion.** Values flash their delta colour for 300ms on change. Nothing else moves.

**Thumbnail.** A dark, tight grid flecked with red and green.

**Suits.** Dashboards, monitoring, anything with a professional operator.

**Fails.** Mobile, unless the table degrades to stacked records deliberately. Also fails
anyone who doesn't already know the domain.

**Inverts to.** `#F5F7FA` ground with `#E4E8EE` grid lines; semantic colours darken to
`#1F7A4D` / `#C0392B`.

---

## `toybox` · Toybox

`#FFF6E5` ground · `#211C1B` ink · `#FF5C39` · `#2B7FFF` · `#FFC531`

**Type.** A chunky rounded display face against a friendly geometric sans. Big. Nothing
timid.

**Structure.** 3px strokes on every shape, hard 4px offset shadows with no blur, generous
rounding, oversized touch targets. Saturated primaries used at full strength. Playful
but never sloppy — the grid underneath should be as strict as the Swiss recipe.

**Motion.** Spring easing on interaction, `cubic-bezier(.34,1.56,.64,1)`, 250ms.
Everything the user touches responds physically. Honour `prefers-reduced-motion`.

**Thumbnail.** Warm cream-yellow with primary-coloured blobs.

**Suits.** Language drills, household decisions, anything where the reader is a
volunteer rather than a professional.

**Fails.** Money, medicine, and bad news. Do not use it to deliver a number someone will
act on financially.

**Inverts to.** `#231F1D` ground; the primaries hold, the shadows become ink-black.

---

## `field` · Field guide

`#F3F1E7` paper · `#2B3327` ink · `#7A6A4F` sepia · `#6E8B5C` sage · `#A6552F` rust

**Type.** A text serif for prose, italic for Latin binomials, and a light condensed face
for plate labels. Figure captions are small, italic and hang under a hairline.

**Structure.** Specimen plates: subjects drawn as fine SVG linework with hand-numbered
callouts, arranged on the page like a naturalist's plate. A ruled margin down the left.
Cross-hatching rather than fills for tone. Season and scale bars where they apply.

**Motion.** Callout numbers fade in on hover. Otherwise still.

**Thumbnail.** Warm paper with green and rust linework — distinct from `archival` because
the ink is drawn, not typeset.

**Suits.** The living world: biology, gardening, marine science, geology, food.

**Fails.** Abstractions. There has to be something worth drawing.

**Inverts to.** `#161A14` ground, `#E4E7DB` ink, linework at 90% opacity.

---

## `boardroom` · Boardroom

`#FFFFFF` ground · `#0E1A2B` ink · `#47586E` slate · `#1B6E8C` accent · `#2F8F6B` /
`#B4553F` semantic

**Type.** A confident neutral sans — Archivo, Inter Tight — with tabular numerals in
every table. No serif. Headings tight and dark; body at 16px minimum.

**Structure.** A deep ink header band, a strict left rail, and generous room given to
charts. Rules are sparing and never decorative. Everything is print-safe: page breaks
respected, no dark fills that eat toner, a print stylesheet that is actually tested.

**Motion.** 150ms on hover states. Nothing that would distract in a live meeting.

**Thumbnail.** White with a navy band across the top and one chart.

**Suits.** Sales, consulting, anything a stranger will judge your competence by inside
thirty seconds.

**Fails.** Standing out. It's meant to be trusted, not remembered — so cap it, and never
let two land side by side on the grid.

**Inverts to.** `#0B121C` ground, `#E8EDF3` ink, accent to `#4FB0CE`.

---

## Distribution across the seed slate

Thirty-nine candidates, twelve treatments, nothing above four:

| Treatment | Count | Entries |
| --- | --- | --- |
| `swiss` | 4 | B1, S7, S15, S25 |
| `clinical` | 4 | S8, S11, S16, B4 |
| `deco` | 4 | S3, S23, S28, S30 |
| `dense` | 4 | B5, S20, B3, S26 |
| `field` | 4 | S2, S10, S19, S29 |
| `terminal` | 3 | B6, S17, B2 |
| `brutalist` | 3 | B8, S18, S21 |
| `riso` | 3 | S4, B9, S27 |
| `archival` | 3 | S5, S9, S22 |
| `boardroom` | 3 | S1, B7, S13 |
| `blueprint` | 2 | S6, S12 |
| `toybox` | 2 | S14, S24 |

Ground colours across the wall: pale or white 14, dark 14, cream or ivory 11. No run of
similar tiles longer than two in the default sort.

### Same shape, different world

Four deliberate pairs — identical `style`, unrelated treatment — placed to demonstrate
that the axes are independent. These are the entries to show anyone who asks why the
gallery needs three axes:

| Style | | |
| --- | --- | --- |
| `wizard` | **S17** Incident Severity — `terminal` | **S18** Positioning — `brutalist` |
| `dashboard` | **S19** Reef Bleaching — `field` | **S20** Hiring Funnel — `dense` |
| `tracker` | **S29** Seedling Log — `field` | **S30** Tempo Ladder — `deco` |
| `game` | **S25** Lattice — `swiss` | **S26** Bullwhip — `dense` |

### The first batch

The five recommended first builds land on five unrelated treatments, so the earliest
version of the grid already reads as varied rather than as one template:

`blueprint` (S12) · `brutalist` (S21) · `terminal` (S17) · `archival` (S5) · `swiss` (S25)
