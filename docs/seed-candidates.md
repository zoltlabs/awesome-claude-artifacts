# Seed candidates

Working brainstorm for Phase 1 of the [spec](taxonomy.html) — the 76 entries that fill
the §4 coverage matrix before launch. **Nothing here is built yet.** This is a slate to
argue with, cut from, and hand to contributors as "good first submissions."

Three rules shaped every concept below:

1. **Style first, subject second.** Each of the 15 styles gets at least two candidates,
   from two different use cases and two unrelated domains — because style is the axis
   that transfers (§1). A slate organised by topic would leave `wizard` with five
   entries and `data-explorer` with none.
2. **The no-network constraint is a design input, not a tax.** Every concept below has
   an answer to "where does the data come from" that survives `file://` with the wifi
   off: it ships inline, the user pastes it, or the artifact computes it. Anything whose
   whole point was an API call was cut before it got a line here.
3. **Every entry carries a distinct visual treatment.** A gallery is browsed as a wall of
   thumbnails, and neither existing axis predicts what a thumbnail looks like. Each
   concept is assigned a `design` from the twelve in
   [design-treatments.md](design-treatments.md), chosen by what the subject argues for
   and capped at four uses across the slate. Two entries that look alike are one entry at
   grid distance.

Each entry gives the classification exactly as it would appear in `meta.yaml`, a
one-line summary, the **hook** (what stops it being the generic version of its shape),
and a **prompt seed** — the thing that actually gets copied off the card. The `design:`
value closing each classification line is the visual treatment; the recipes, the
distribution, and the reasoning behind the axis are in
**[design-treatments.md](design-treatments.md)**.

---

## Present — you read it, front to back

### S1 · Tidewater Robotics — Series A narrative deck
`deck` · **sales**, marketing · topics: startups, fundraising · techniques: keyboard-nav, charts, print-ready · design: `boardroom`

> Fifteen slides of a fictional warehouse-robotics raise, with presenter notes and a
> market-size slide that re-cuts live while you're standing in front of it.

**Hook.** Not a slide *framework* — a finished, opinionated narrative with a real arc
(wedge → why now → unit economics → ask). The bottom-up TAM slide has three toggles, so
the founder can answer "what if you only win the cold-chain segment?" without leaving
the deck. Presenter view on `N`, printable as a leave-behind.

**Prompt seed.** "Build a single-file HTML pitch deck for a fictional warehouse robotics
company raising a Series A. Fifteen slides, arrow-key navigation, a presenter-notes
overlay on N, and one slide where the market sizing is bottom-up and recalculates from
three toggles. Investor-grade typography, no stock photos."

### S2 · Twelve Slides on Cellular Respiration
`deck` · **teaching** · topics: biology, education · techniques: svg, keyboard-nav · design: `field`

> Glycolysis to the electron transport chain in twelve slides, each one an SVG that
> builds up in steps rather than appearing at once.

**Hook.** The build-on-click is the pedagogy: ATP counters accumulate across slides so
the running total is always visible, and the final slide replays the whole pathway. A
teacher can project it, and a student can self-pace the same file.

**Prompt seed.** "A twelve-slide HTML deck teaching cellular respiration to first-year
undergraduates. Every diagram is inline SVG that builds in labelled steps on click. Keep
a running ATP tally in the corner across all slides. Arrow keys advance."

### S3 · Riverside Type Festival — sponsorship prospectus
`one-pager` · **marketing** · topics: events, sponsorship, design · techniques: svg, print-ready · design: `deco`

> One scroll from "what the festival is" to four sponsor tiers to a single booking ask.

**Hook.** The persuasive rhythm is the whole exercise — audience numbers, past-year
proof, tier cards, scarcity, then one ask. Prints to two clean pages because that's how
sponsorship decisions actually get made. Shows the shape for anyone selling anything to
a committee.

**Prompt seed.** "A one-page HTML sponsorship prospectus for a fictional typography
festival. Single scroll: what it is, who attends with real numbers, three proof points,
four sponsor tiers as comparison cards, then one ask with a deadline. Must print to two
tidy A4 pages."

### S4 · Rate Card & Availability — a working illustrator
`one-pager` · **creative**, personal · topics: freelance, illustration · techniques: print-ready, svg · design: `riso`

> A freelancer's rates, terms, turnaround, and next open slot, on one page that ends in
> "book this window."

**Hook.** The unglamorous document every freelancer rewrites badly. This one handles the
hard part — usage-based pricing explained without a phone call — with a small
licence-scope selector that changes the quoted band. Ends in an ask, not a price list.

**Prompt seed.** "A one-page HTML rate card for a freelance illustrator. Day rate,
project bands, rush terms, and a usage-scope selector (editorial / campaign / packaging)
that changes which price band is highlighted. Ends with current availability and one
booking ask. Warm, confident, not corporate."

### S5 · State of the Municipal Tree Canopy
`report` · **data-research** · topics: urban-planning, environment · techniques: charts, svg, print-ready · design: `archival`

> A long-form report on canopy loss across a mid-sized city's wards, with figures,
> footnotes, and a methodology appendix.

**Hook.** Proves `report` isn't a blog post: sticky section nav, numbered figures that
cross-reference from the prose, a real footnote apparatus, and an appendix that states
its own limitations. The argument is authored — this is what separates it from a
dashboard (§3).

**Prompt seed.** "A long-form HTML research report on urban tree canopy loss in a
fictional mid-sized city. Eight sections, six numbered figures rendered as inline SVG
charts, in-text footnote references that jump both ways, a methods appendix, and a
sticky section outline. Newspaper-of-record tone."

### S6 · Post-Incident Review: the fourteen-hour outage
`report` · **internal-ops**, consulting · topics: reliability, incident-response · techniques: svg, print-ready · design: `blueprint`

> A blameless PIR: timeline figure, contributing factors, what we're changing, and a
> two-page executive summary that prints on its own.

**Hook.** A genre with a strong house style that almost nobody outside SRE has seen.
Contributing factors are a table with owners and dates, not prose. The timeline figure
distinguishes *what happened* from *what we knew at the time* — the distinction the
whole document exists to make.

**Prompt seed.** "A blameless post-incident review for a fictional fourteen-hour
payments outage. Executive summary, an SVG timeline that separates events from what
responders believed at each moment, contributing factors as an owner/date table,
detection and response gaps, and follow-up actions. The exec summary must print alone."

### B7 · Maturity Assessment: findings and roadmap
`report` · **consulting** · topics: strategy, assessment · techniques: charts, svg, print-ready · design: `boardroom`

> The 40-page PDF the spec keeps promising to replace — a five-dimension maturity
> assessment with scored findings and a sequenced roadmap.

**Hook.** Radar chart, per-dimension evidence, and a roadmap where each move names its
prerequisite. Consulting's flagship present-family entry; the shape every boutique firm
rebuilds from scratch every engagement.

**Prompt seed.** "A consulting findings report assessing a fictional retailer's data
maturity across five dimensions. Scored radar summary, one section per dimension with
evidence and a rating rationale, then a 12-month roadmap where each initiative names its
prerequisites. Print-ready."

### B8 · Launch narrative deck — a category-creation story
`deck` · **marketing** · topics: positioning, launch · techniques: keyboard-nav, svg · design: `brutalist`

> The "why now" deck marketing gives sales the week before a launch.

**Hook.** Distinct from S1 by job: this one arms a room rather than closing one. Includes
the before/after framing slide and a messaging hierarchy slide that most launch decks
skip and every sales team asks for.

**Prompt seed.** "A twelve-slide launch narrative deck for a fictional B2B product.
Problem shift, why now, the old way vs the new way, the messaging hierarchy, and three
objection-handling slides. Arrow-key nav, dark presentation aesthetic."

---

## Explain — you poke it to understand something

### S7 · Anatomy of a Sentence
`diagram` · **teaching** · topics: linguistics, language · techniques: svg, keyboard-nav · design: `swiss`

> An interactive constituency tree: click any phrase and it highlights in the sentence,
> names its role, and shows what happens if you move it.

**Hook.** Six sentences of escalating nastiness, including a garden-path one. The
"move it" affordance is the teaching moment — grammaticality judgements you can feel
rather than memorise. The layout carries the meaning, which is exactly the `diagram`
test (§3).

**Prompt seed.** "An interactive syntax-tree explainer. Six English sentences of
increasing complexity; clicking a node in the tree highlights the matching span in the
sentence and names its grammatical role. One control that fronts or extraposes a
constituent and marks the result grammatical or not. Inline SVG, keyboard navigable."

### S8 · Checkout Journey Map
`diagram` · **product-design** · topics: ux-research, ecommerce · techniques: svg, drag-drop · design: `clinical`

> Swimlanes across a five-step checkout, with an emotion curve on top and evidence
> hiding behind every drop-off.

**Hook.** Clicking a step opens the actual research quotes and the funnel number behind
it, so the map stops being decoration. Drag to reorder steps and the emotion curve
re-renders — how you argue for reordering the flow in front of stakeholders.

**Prompt seed.** "An interactive customer journey map for an ecommerce checkout. Lanes
for user actions, touchpoints, and backstage systems; an emotion curve across the top;
clicking any step reveals verbatim research quotes and its drop-off rate. Steps can be
dragged to reorder and the curve follows."

### S9 · Story Bible Timeline — a four-POV novel
`timeline` · **creative** · topics: writing, fiction · techniques: svg, keyboard-nav · design: `archival`

> Scrub a novel's chronology and watch what each of four narrators knows at any moment.

**Hook.** Solves a real writing problem: dramatic irony is a bookkeeping problem, and
nobody has a tool for it. Filter to one POV to see their information state; the gap
between story order and told order is drawn as a second track.

**Prompt seed.** "A story-bible timeline for a fictional four-POV mystery novel. A
scrubber across story chronology; per-character tracks showing what each narrator knows
at that instant; a second track showing the order the reader receives events in. Filter
by character, and mark the moments where dramatic irony opens."

### S10 · Sea Level, 20,000 BCE → 2100
`timeline` · **data-research**, teaching · topics: climate, geology · techniques: charts, svg · design: `field`

> A log-scaled timeline you can zoom from the last glacial maximum to next Tuesday.

**Hook.** The log scale *is* the argument — it puts a century of industrial rise next to
twenty millennia of natural change without either disappearing. Era bands, proxy-vs-
instrument shading, and an uncertainty envelope that widens honestly toward both ends.

**Prompt seed.** "A zoomable timeline of global sea level from 20,000 BCE to 2100 on a
logarithmic time axis. Shade proxy-derived versus instrumental data differently, show an
uncertainty envelope, and let the reader zoom smoothly between millennia and decades.
Cite each data regime in a footer."

### S11 · Herd Immunity Sandbox
`simulator` · **teaching**, data-research · topics: epidemiology, public-health · techniques: canvas, charts, physics-sim · design: `clinical`

> An agent grid where you set R₀, vaccination coverage, and mixing, then watch an
> outbreak either fizzle or tear through.

**Hook.** The threshold behaviour is the lesson, and it lands in about nine seconds of
watching. Runs the same seed twice to show stochasticity — two identical settings, two
different epidemics — which is the thing static explainers never convey. State evolves,
so it's a simulator and not a calculator (§3).

**Prompt seed.** "An SIR outbreak sandbox on a canvas grid of agents. Sliders for R₀,
vaccination coverage, and clustering of the unvaccinated. Live epidemic curve alongside
the grid, a re-run button that keeps settings but changes the seed, and a marker on the
curve where herd-immunity threshold sits."

### S12 · Why Adding a Person Didn't Help
`simulator` · **consulting**, internal-ops · topics: operations, queueing · techniques: charts, canvas · design: `blueprint`

> A staffing simulator that shows wait times going vertical as utilisation approaches
> capacity.

**Hook.** The single most useful counter-intuitive result in operations, made playable.
Set arrival rate, handle time, and headcount; watch the queue. Adding the fifth agent at
92% utilisation does something the spreadsheet never shows you. Every consultant who has
argued about a service desk wants this file.

**Prompt seed.** "A queueing simulator for a support desk. Inputs for arrival rate,
average handle time, and number of agents. Animate arrivals and service, plot wait time
against utilisation live, and highlight the knee of the curve. Include a preset that
shows adding one agent at 92% utilisation halving the wait."

### B6 · Slingshot
`simulator` · **play** · topics: physics, space · techniques: canvas, physics-sim · design: `terminal`

> A gravity-assist sandbox: place bodies, launch a probe, try to get somewhere far on
> almost no fuel.

**Hook.** Play's one explain-family slot. No score, no fail state, just orbital mechanics
you develop intuition for. Trails persist so near-misses are legible.

**Prompt seed.** "A two-dimensional gravity sandbox. Place massive bodies, aim and launch
a probe with a fuel budget, and watch trajectories with persistent trails. Time controls
and a reset. Correct n-body integration, no collision gore."

### B9 · Your First Ninety Days
`timeline` · **internal-ops** · topics: onboarding, hr · techniques: svg, print-ready · design: `riso`

> The onboarding plan as a scrubable timeline instead of a wiki page nobody reads.

**Hook.** Filter by role and the milestones change; each week states who owns it, which
is where most onboarding documents quietly fail. Read-only and authored, which keeps it
a `timeline` rather than a `tracker` (§3).

**Prompt seed.** "An employee onboarding timeline covering days 1–90. Filter by role
(engineer, sales, support); every milestone names an owner and a definition of done;
week-level and day-level zoom. Printable as a one-page summary for the manager."

---

## Calculate — inputs go in, an answer comes out

### S13 · Warehouse Automation Payback
`calculator` · **sales**, consulting · topics: logistics, capex · techniques: charts, print-ready · design: `boardroom`

> Throughput, labour cost, and shift pattern in; payback period, five-year NPV, and a
> sensitivity band out.

**Hook.** Built for the meeting, not the website: everything on one screen, a sensitivity
strip that shows which assumption the answer actually hangs on, and a print view with the
prospect's numbers already in it. The canonical sales calculator, done at the standard
the shape deserves.

**Prompt seed.** "An ROI calculator for warehouse picking automation. Inputs: units per
day, pickers per shift, shifts, fully-loaded labour cost, system cost. Outputs: payback
months, five-year NPV, and a tornado chart showing which input the result is most
sensitive to. One screen, printable with the entered values."

### S14 · Repair or Replace?
`calculator` · **personal** · topics: household, money · techniques: charts · design: `toybox`

> Quote in hand, decide whether fixing the machine beats buying a new one.

**Hook.** Cost per remaining year is the right mental model and almost nobody uses it.
Handles the parts people get wrong — expected remaining life, energy-efficiency delta,
disposal, and the option value of waiting. Not on the saturated list, and it settles a
genuine argument.

**Prompt seed.** "A repair-or-replace calculator for household appliances. Inputs: repair
quote, replacement price, age, typical lifespan, annual running cost of each option.
Output: cost per remaining year for both paths, a break-even chart, and a plain-language
verdict with the one assumption that would flip it."

### S15 · Weighted Vendor Scorecard
`comparator` · **consulting**, sales · topics: procurement, decision-making · techniques: drag-drop, charts · design: `swiss`

> Five vendors, eight criteria, weights you drag — and a check on whether your winner
> survives a wobble in those weights.

**Hook.** The sensitivity view is the reason it exists. Any weighted scorecard produces a
winner; this one tells you how much the weights would have to move before the ranking
flips, which is the question the steering committee should have asked.

**Prompt seed.** "A weighted vendor comparison. Five options scored against eight
criteria, weights adjustable by dragging, live ranking. Add a stability panel showing how
far each weight can move before the top choice changes, and flag when the winner is
within noise of second place."

### S16 · Which Programme, Actually
`comparator` · **personal**, teaching · topics: education, money · techniques: charts · design: `clinical`

> Graduate programmes side by side on stipend against local cost of living, time to
> completion, and placement.

**Hook.** Reframes prestige as arithmetic. Stipend-minus-rent is the column that changes
minds, and it ships with real cost-of-living indices inline so nothing phones home. Rows
are choices, not observations — the `comparator` test (§3).

**Prompt seed.** "A comparator for graduate programmes. Rows are programmes; columns are
stipend, local cost-of-living index, funded years, median time to completion, and
placement rate. Compute real disposable stipend per year. Sortable, weightable, with the
cost-of-living data embedded and cited."

### S17 · Incident Severity Wizard
`wizard` · **internal-ops** · topics: reliability, on-call · techniques: keyboard-nav · design: `terminal`

> Six questions at 3 a.m. that end in a severity level, a page list, and a copyable
> incident-channel opener.

**Hook.** A wizard whose output is a *decision plus the next action* — the copy button is
the product. Severity matrices exist in every runbook and get misapplied under stress
precisely because they're a table, not a question sequence.

**Prompt seed.** "A six-question incident severity wizard. Questions about user impact,
revenue path, data integrity, workaround availability, and blast radius resolve to SEV1–4
with the reasoning shown. Output the severity, who to page, and a pre-filled incident
channel opening message with a copy button. Keyboard-only usable."

### S18 · Positioning Statement Wizard
`wizard` · **marketing**, sales · topics: positioning, messaging · techniques: keyboard-nav · design: `brutalist`

> Five steps — competitive alternative, unique attribute, value, target, category — into
> a positioning statement and a messaging hierarchy you can paste into a brief.

**Hook.** Follows the discipline properly: it makes you name the *competitive
alternative* before the differentiator, which is the step everyone skips and the reason
most positioning is mush. No right answers, only a result — the `wizard`/`quiz` line
(§3).

**Prompt seed.** "A five-step positioning wizard following the April Dunford sequence:
competitive alternatives, unique attributes, the value those enable, who cares most, and
the market frame. Each step shows a worked example alongside the input. Ends in a
formatted positioning statement plus a three-tier messaging hierarchy, copyable."

### B5 · Will This Test Finish?
`calculator` · **product-design**, data-research · topics: experimentation, statistics · techniques: charts · design: `dense`

> Baseline rate, effect you care about, traffic — how long the A/B test runs, and whether
> to bother.

**Hook.** Answers the question that kills experiment programmes: the honest duration.
Shows the minimum detectable effect at the traffic you actually have, which usually
reveals the test was never going to work.

**Prompt seed.** "A sample-size and duration calculator for A/B tests. Inputs: baseline
conversion, minimum detectable effect, daily traffic, number of variants, power and
alpha. Outputs: required sample per arm, days to completion, and a curve of detectable
effect against test duration. Warn plainly when the test would take over 90 days."

---

## Explore — data in, many views out

### S19 · Reef Bleaching Watch
`dashboard` · **data-research** · topics: marine-biology, climate · techniques: charts, svg · design: `field`

> Twenty years of bleaching severity across forty reef sites, in four views that talk to
> each other.

**Hook.** Brushing the time series filters the map, the small multiples, and the severity
histogram at once — coordinated views are the thing a dashboard is *for*, and most
artifact dashboards are four charts that ignore each other. Data ships inline (§ the
`dashboard`/`data-explorer` line).

**Prompt seed.** "A coordinated-views dashboard over twenty years of coral bleaching
observations at forty sites. A schematic map, a time series, small multiples per region,
and a severity histogram — brushing any one filters all the others. Embed a plausible
synthetic dataset and label it clearly as synthetic."

### S20 · Hiring Funnel
`dashboard` · **internal-ops** · topics: hiring, people-analytics · techniques: charts · design: `dense`

> Applications to offers by stage, by source, by cohort — with pass-through rates where
> the drop-offs actually are.

**Hook.** Includes the stage-by-stage demographic pass-through panel most hiring
dashboards omit, with small-n suppression handled properly so it doesn't invite bad
conclusions. Cohort view rather than snapshot, because the snapshot lies when volume
changes.

**Prompt seed.** "A hiring funnel dashboard over synthetic data. Funnel by stage with
pass-through rates, breakdowns by source and by requisition, monthly cohorts rather than
snapshots, and a stage-conversion panel that suppresses cells below n=10. Note clearly
that the data is synthetic."

### B3 · Engagement Health Board
`dashboard` · **consulting** · topics: professional-services, delivery · techniques: charts · design: `dense`

> Every live client engagement on one board: burn against budget, milestone slippage,
> and the one that's about to go red.

**Hook.** The internal artifact every services firm rebuilds in a spreadsheet. Burn-vs-
value-delivered is the diagonal that matters, and the board sorts by "weeks until this is
a problem" rather than by revenue.

**Prompt seed.** "A delivery health dashboard for a consulting firm's eight live
engagements. Budget burn against milestone completion, staffing utilisation, and a risk
column. Sort by weeks-to-trouble. Clicking an engagement opens its milestone detail.
Synthetic data, embedded."

### S21 · Paste a CSV, Get a Codebook
`data-explorer` · **data-research** · topics: data-quality, statistics · techniques: file-upload, charts, drag-drop · design: `brutalist`

> Drop in a spreadsheet and get inferred types, distributions, missingness, outliers, and
> a data dictionary you can paste into a methods section.

**Hook.** The first thing anyone does with a new dataset, and it's a chore every time.
Everything happens locally, which is precisely why people will use it on data they can't
upload anywhere. The output is a *view* plus a copyable dictionary — still an explorer,
not a generator, because the artifact isn't handing you a file.

**Prompt seed.** "A local-only CSV explorer. Drop or paste a file; infer column types;
show per-column distributions, missingness, cardinality, and candidate outliers; flag
likely keys and likely date columns. Produce a copyable markdown data dictionary. Handle
50k rows without freezing. Nothing leaves the browser — say so in the UI."

### S22 · Manuscript Pacing Explorer
`data-explorer` · **creative**, data-research · topics: writing, fiction · techniques: file-upload, charts · design: `archival`

> Paste a draft and see its shape: sentence-length rhythm, dialogue ratio by chapter,
> POV drift, and where the pace sags.

**Hook.** Turns a body of prose into a dataset a novelist can actually act on. The
sentence-length variance sparkline per chapter catches monotony that reading aloud takes
an afternoon to find. Same privacy story as S21, and the reason a writer would trust it.

**Prompt seed.** "A manuscript analysis tool. Paste prose; split it into chapters on
headings; chart sentence-length rhythm, dialogue-to-narration ratio, paragraph density,
and unique-word rate per chapter. Highlight the three flattest passages by sentence-
length variance. All local, nothing uploaded."

---

## Engage — a loop, a score, or state that persists

### S23 · Which Espresso Setup Are You?
`quiz` · **marketing** · topics: coffee, ecommerce · techniques: svg · design: `deco`

> Eight questions about budget, patience, and how you actually drink coffee, resolving to
> one of six setups.

**Hook.** The lead-gen result-type quiz done with actual craft — weighted scoring across
three axes instead of a lookup table, a result page that explains *why* you landed there,
and a graceful "you're between two of these" state. The archetype marketers copy;
somebody should ship an excellent one.

**Prompt seed.** "An eight-question result-type quiz that recommends one of six home
espresso setups. Score across three hidden axes (budget, ritual tolerance, volume) rather
than counting answers. The result explains which answers drove it, shows the runner-up,
and handles ties honestly. No email gate."

### S24 · False Friends
`quiz` · **teaching** · topics: spanish, language · techniques: localstorage, keyboard-nav · design: `toybox`

> A drill on the Spanish–English words that betray you, scheduled so you see the ones you
> keep missing.

**Hook.** Real spaced repetition — a Leitner schedule persisted locally — inside a quiz
shell, so you can come back tomorrow and it knows. Typed answers rather than
multiple-choice, because recognition isn't recall. Loads in the first ten seconds as a
quiz, which is how it's tagged (Rule 2).

**Prompt seed.** "A spaced-repetition drill on 60 Spanish–English false friends. Type the
meaning; a Leitner box schedule decides what comes next and persists across reloads. Show
retention per box, let the learner reset, and reveal a memorable disambiguation on every
miss. Fully keyboard-driven."

### S25 · Lattice
`game` · **play** · topics: puzzle, geometry · techniques: canvas, drag-drop, localstorage · design: `swiss`

> Pack the pentominoes into the tray. The tray changes every day, deterministically.

**Hook.** A daily seed derived from the date means the file is the same for everyone
without a server — the trick that makes a shareable daily puzzle possible under the
no-network rule. Losable, replayable, and a proper solver-checked guarantee that each
day's board is solvable.

**Prompt seed.** "A polyomino packing puzzle. Drag pieces into a tray, rotate and flip
with keyboard, snap to grid. Generate the daily board from the date so everyone gets the
same one, and verify at generation time that it's solvable. Track streaks locally, and
offer a spoiler-free share string."

### S26 · Bullwhip
`game` · **teaching**, play · topics: operations, supply-chain · techniques: charts, canvas · design: `dense`

> Four tiers of a supply chain, one order per round, and a demand signal that lies to you.

**Hook.** You can lose, and you lose in a specific, instructive way: your own orders
oscillate wildly from a demand curve that barely moved. The post-mortem overlays your
orders against true demand — the moment the lesson lands. A classroom exercise that
usually needs four people and an hour, playable alone in eight minutes.

**Prompt seed.** "A four-tier supply chain game. Each round you place one order; shipments
and information both lag two rounds. Score on total holding plus backorder cost across 30
rounds. At the end, chart your orders at each tier against true consumer demand and name
the amplification factor."

### S27 · Zine Forge
`generator` · **creative** · topics: publishing, print · techniques: print-ready, svg, localstorage · design: `riso`

> Type eight pages, pick a fold, get a correctly imposed sheet that becomes a zine when
> you cut it once.

**Hook.** The imposition maths — which page goes where, which ones are upside down — is
the thing that stops people making zines, and it's exactly the kind of fiddly correctness
a generator should absorb. The output is a physical object, which is a good look for a
gallery of HTML files.

**Prompt seed.** "A mini-zine generator. Eight pages of text and simple shapes; choose the
eight-page single-cut fold or a folio; output a print sheet with correct imposition and
rotation, crop marks, and a fold guide. Live preview of the folded result. Save the draft
locally."

### S28 · Truchet Studio
`generator` · **play**, creative · topics: generative-art, geometry · techniques: canvas, svg · design: `deco`

> Truchet tiles, six rule sets, a seed you can share, and a PNG at print resolution.

**Hook.** Deep parameter space with a shallow floor — every random seed looks good, and
half an hour in you're designing rather than rolling dice. Seeds are shareable strings, so
people can trade outputs without an account. Exports a real file, which is the
`generator` test (§3).

**Prompt seed.** "A Truchet tile generative art studio. Six tile rule sets, adjustable
palette, density, curvature, and jitter, driven by a seeded PRNG shown as a shareable
string. Live canvas, export PNG at 4× resolution. Every default should look good."

### B2 · Fixture Forge
`generator` · **product-design** · topics: prototyping, data · techniques: file-upload, drag-drop · design: `terminal`

> Describe a shape, get believable seed data — names, addresses, timestamps, prices — as
> JSON or CSV.

**Hook.** Designers ship prototypes full of "Lorem Ipsum" and "John Doe" and then wonder
why the layout breaks in production. This generates data with realistic *distributions* —
long names, empty fields, edge-case dates — because that's the point.

**Prompt seed.** "A seed-data generator for prototypes. Build a schema by adding typed
fields (name, email, address, timestamp, currency, category, free text), set row count and
a null rate per field, and generate believable rows — including deliberately awkward ones:
very long names, non-Latin characters, empty optionals. Download as JSON or CSV, seeded so
it's reproducible."

### B4 · Spot the Phish
`quiz` · **internal-ops** · topics: security, training · techniques: svg, localstorage · design: `clinical`

> Twelve rendered emails. Click what's wrong with each one before the timer runs out.

**Hook.** Security training that trains the actual skill — spotting the tell in a realistic
render, not answering "should you click suspicious links?" Wrong clicks are as instructive
as right ones, and it ends with the three tells you personally kept missing. Uses invented
brands only.

**Prompt seed.** "A phishing-recognition drill. Twelve realistic email renders using
entirely fictional companies; the learner clicks the suspicious element (sender domain,
urgency framing, mismatched link, attachment type). Score on precision and recall, and end
with a personalised summary of which tell types they missed most."

### S29 · Seedling Log
`tracker` · **personal** · topics: gardening, food · techniques: localstorage, charts · design: `field`

> Sowings, germination dates, transplants, and the succession schedule that keeps the bed
> producing.

**Hook.** Tracks the thing gardeners actually get wrong: not watering, but *timing*. Enter
your last frost date and it works backwards; log a real germination date and next year's
estimates adjust to your conditions. State survives a reload — the one style that requires
it (§3).

**Prompt seed.** "A vegetable sowing tracker. Add crops with sow date, expected and actual
germination, and transplant date; set a local last-frost date and generate a succession
schedule working backwards from it. Show a season timeline and adjust future estimates
from logged actuals. Persist locally, export and import JSON."

### S30 · Tempo Ladder
`tracker` · **creative**, personal · topics: music, practice · techniques: localstorage, charts · design: `deco`

> Log practice by piece and tempo, and watch the ladder you're actually climbing.

**Hook.** Musicians practise by time and improve by tempo, and only one of those is worth
recording. The per-passage tempo curve makes plateaus visible, and the heatmap makes
avoidance visible — you can see, in colour, the passage you've been skipping for three
weeks.

**Prompt seed.** "A musician's practice tracker. Log sessions per piece and per marked
passage with tempo and a clean-run count. Chart tempo progression per passage over weeks,
show a calendar heatmap of practice, and surface the passages you've avoided longest.
Local storage only, with JSON export."

### B1 · Guest Checkout — a product brief
`one-pager` · **product-design** · topics: product-management, ecommerce · techniques: print-ready, svg · design: `swiss`

> One page: the problem with evidence, the bet, what we're not doing, and the decision
> being asked for.

**Hook.** A one-pager that sells *internally*. The non-goals section is the load-bearing
part and the reason these documents work. Ends in a specific ask with a date, not a
summary.

**Prompt seed.** "A one-page product brief proposing guest checkout for a fictional store.
Problem with three pieces of evidence, the proposed bet, explicit non-goals, the success
metric with a target and a guardrail metric, risks, and one clear decision request with a
date. Prints to a single page."

---

## Coverage against §4

Thirty-nine candidates. All fifteen styles have at least two. Against the seed matrix:

| Use case | Present | Explain | Calculate | Explore | Engage | Have / target |
| --- | --- | --- | --- | --- | --- | --- |
| teaching | 1/2 | 2/4 | 0/1 | 0/1 | 2/3 | **5 / 11** |
| marketing | 2/3 | 0/1 | 1/1 | 0/1 | 1/2 | **4 / 8** |
| sales | 1/2 | 0/1 | 1/3 | 0/1 | 0/1 | **2 / 8** |
| consulting | 1/2 | 1/1 | 1/3 | 1/2 | 0/1 | **4 / 9** |
| product-design | 1/2 | 1/2 | 1/1 | 0/1 | 1/1 | **4 / 7** |
| data-research | 1/1 | 1/1 | 0/1 | 2/3 | 0/1 | **4 / 7** |
| internal-ops | 1/2 | 1/1 | 1/1 | 1/1 | 1/2 | **5 / 7** |
| personal | 0/1 | 0/1 | 2/2 | 0/1 | 1/3 | **3 / 8** |
| creative | 1/1 | 1/1 | — | 1/1 | 2/3 | **5 / 6** |
| play | — | 1/1 | — | — | 2/4 | **3 / 5** |
| **Total** | **10/16** | **8/14** | **7/13** | **5/12** | **10/21** | **39 / 76** |

Second use cases aren't counted — only the primary, since that's what drives grouping
(Rule 4).

### Where the remaining 37 sit

- **sales (6 short)** — thinnest column relative to target, and the highest-intent
  audience on the site. Needs two more calculators, an explain-family entry (a
  configurator walkthrough), a dashboard, and an engage entry.
- **teaching (6 short)** — two more explain entries, plus its calculate and explore slots,
  which are currently empty.
- **personal (5 short)** — no present, explain, or explore entry yet. Two more engage.
- **consulting (5 short)** — two more calculators; consulting is where `calculator` and
  `comparator` earn their keep.
- **marketing (4)**, **product-design (3)**, **data-research (3)**, **internal-ops (2)**,
  **play (2)**, **creative (1)**.

Empty cells that are deliberately empty per §4 (creative/calculate, play/present,
play/calculate, play/explore) stay empty.

### Suggested first batch

Five entries that between them prove every part of the pipeline — a chart-heavy print
path, canvas, local persistence, file input, and a print-ready layout — while landing in
five different families, five different use cases, and five unrelated visual treatments,
so the earliest version of the grid already reads as varied rather than as one template:

1. **S12 · Why Adding a Person Didn't Help** — `blueprint`. Canvas plus charts, and the
   most quotable result in the set.
2. **S21 · Paste a CSV, Get a Codebook** — `brutalist`. File input, and the entry most
   likely to be bookmarked rather than admired.
3. **S17 · Incident Severity Wizard** — `terminal`. Small, complete, and the clearest
   demonstration that `wizard` ≠ `quiz`.
4. **S5 · State of the Municipal Tree Canopy** — `archival`. Proves `report` is a real
   style and exercises the print path.
5. **S25 · Lattice** — `swiss`. The daily-seed trick, and the entry people share.

### Open questions

- **Is `design` a filter or just a seeding constraint?** It ships as secondary navigation
  like `techniques`, and the §9 Phase 4 instrumentation will say whether visitors actually
  filter on it. If they do, it earns a place in the main filter bar; if they don't, it
  still did its job by keeping the wall varied.

- **Synthetic data disclosure.** Several entries embed plausible-but-invented datasets.
  Worth a house rule: synthetic data is labelled in the UI, not just the metadata.
- **`quiz` with persistence.** S24 and B4 both persist. Rule 2 says style is the first ten
  seconds, so they're quizzes — but if this keeps happening it's an argument for a
  `techniques` flag rather than a taxonomy change.
- **Fictional brands.** B4 and S1 invent companies. Fine under the provenance rule, but
  the review checklist should say so explicitly, since "realistic phishing email" is
  exactly the shape §7 warns about.
