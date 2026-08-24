# Contributing

Thanks for submitting. Everything here is reviewed by a human — the CI gates below
catch mechanical problems so review time goes to the things a machine can't judge.

## The bar

An entry gets merged when all five are true:

| | |
| --- | --- |
| **Complete** | It does the whole job. Demos, stubs, and "imagine this worked" are declined. |
| **Standalone** | Works with no network, no API keys, no accounts. |
| **Distinct** | Not the fortieth pomodoro timer. See `saturated` in [`taxonomy.yaml`](taxonomy.yaml). |
| **Robust** | Legible in light *and* dark, usable at 390px wide. |
| **Attributable** | A named author and a license that permits remixing. |

## Format rules

- **Exactly one `.html` file per entry.** No JSX, no bundler, nothing to compile.
- **Fully self-contained.** All CSS and JS inline; images and fonts as `data:` URIs.
  No CDN `<script>`, no remote stylesheets, no external `<img src>`.
- **No network.** `fetch`, `XMLHttpRequest`, `WebSocket`, `<form action>`, and
  `<input type="password">` are rejected by CI.
- **Under 2 MB.** Larger usually means an unoptimised embedded asset.

An artifact that inlines its own runtime is still one HTML file, and that's fine.

## Submitting

The easy way is the [artifact submission issue form][issue] — pick your
classification from dropdowns, paste the code, and a maintainer converts it into a PR.

By hand:

```bash
git clone https://github.com/zoltlabs/awesome-claude-artifacts
cd awesome-claude-artifacts
npm install
mkdir -p artifacts/your-slug
# add artifact.html and meta.yaml (see schema/meta.schema.json)
npm run validate
```

Open the PR. A bot renders `thumb.webp` and pushes it to your branch — you don't need
Playwright locally unless you want to preview it, in which case `npm run shoot`.

[issue]: https://github.com/zoltlabs/awesome-claude-artifacts/issues/new?template=submit-artifact.yml

## meta.yaml

```yaml
title: Runway & Dilution Modeler
summary: Models how a seed round dilutes founder equity across follow-on rounds.
tier: source

use_case: [consulting, sales]   # 1–2, first is primary
style: calculator               # exactly one, from taxonomy.yaml
topics: [finance, startups]
techniques: [charts, localstorage]

source: artifact.html

prompt: |
  The prompt that produced this, verbatim.
customize:
  - Swap the funding rounds in ROUNDS for your own.
  - Ask Claude to add a secondary-sale scenario.
technical: false

author: { name: Your Name, github: yourhandle }
license: MIT
```

### Picking a style

**Exactly one.** The moment an entry can be `[deck, report, one-pager]`, every filter
returns everything and the taxonomy stops meaning anything.

Choose by **what a person does in the first ten seconds**, not by what the artifact
contains. A deck full of charts is still a `deck`. A report with a calculator halfway
down is still a `report`. When two genuinely fit, take the more specific one —
`simulator` over `diagram`, `comparator` over `dashboard`.

### Picking a use case

Use cases are **jobs, not industries**. A healthcare ROI calculator is `sales` with
`healthcare` in `topics`. Proposals to add `fintech` or `edtech` to the use-case
vocabulary will be declined with a pointer to `topics`.

### The prompt field

Most of this audience — marketers, teachers, consultants — will never edit the HTML.
For them the prompt *is* the deliverable, and "Copy prompt" is the primary action on
every card. Entries without one are accepted but rank below entries with one.

## Changing the vocabulary

New terms in `use_case`, `style`, or `techniques` go through their own PR against
`taxonomy.yaml`, with a rationale and at least three existing entries that would move.
Nobody invents a term inside a submission.

## Provenance

Submit only work **you made yourself**. You can't license someone else's artifact, and
an entry nobody may copy is just a screenshot.

Artifacts that embed third-party content — logos, game clones, song lyrics, copyrighted
images — are declined regardless of who generated them. This is the one check that
isn't automatable, and it's why every entry gets human review.

**Rights holders:** open an issue titled `DMCA`, or email `dmca@awesomeclaudeartifacts.com`.
Entries are removed while the claim is reviewed.

## Code of conduct

Be decent. Harassment, discrimination, and bad-faith participation get you removed.
Report problems to `conduct@awesomeclaudeartifacts.com`.
