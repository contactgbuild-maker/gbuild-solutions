# GBuild Solutions - Development Roadmap

**Date:** 2026-06-26

## Phase 0 - Strategy and content

**Tasks**

- define positioning
- define service architecture
- define page architecture
- define brand direction
- define content direction
- define technical scope

**Dependencies**

- founder brief
- project and ecosystem context

**Acceptance criteria**

- all core strategy documents approved
- service list confirmed
- launch scope clarified

**Risks**

- unclear public positioning
- trying to serve too many audiences at once

**Files likely involved**

- strategy docs in `business/gbuild-solutions/`

**Can Codex implement alone**

- yes, draft level

**Founder approval needed**

- yes

## Phase 1 - UI design

**Tasks**

- finalize visual direction
- create Stitch prompt
- generate UI references
- choose page-by-page layout direction

**Dependencies**

- Phase 0 approval

**Acceptance criteria**

- approved visual direction
- approved page structures
- approved responsive plan

**Risks**

- generic AI-generated look
- brand drift between pages

**Files likely involved**

- `DESIGN.md`
- `GOOGLE_STITCH_GBUILD_MASTER_PROMPT.md`

**Can Codex implement alone**

- partially

**Founder approval needed**

- yes

## Phase 2 - Static website

**Tasks**

- scaffold frontend project
- build all static pages
- implement navigation, sections, footer, CTAs
- implement responsive design

**Dependencies**

- approved UI direction
- approved content structure

**Acceptance criteria**

- all core pages visible and responsive
- brand is consistent
- no broken layout on mobile/desktop

**Risks**

- premature complexity
- design inconsistency

**Files likely involved**

- frontend routes
- layout components
- design tokens

**Can Codex implement alone**

- yes

**Founder approval needed**

- yes for final design direction

## Phase 3 - Contact + lead capture

**Tasks**

- build contact form UI
- build backend endpoint
- add validation and spam protection
- send notifications
- optionally store leads

**Dependencies**

- Phase 2 ready
- contact flow decision

**Acceptance criteria**

- form submits successfully
- lead reaches internal channel
- spam protections working

**Risks**

- email deliverability
- spam or abuse

**Files likely involved**

- contact page
- API routes
- env configuration

**Can Codex implement alone**

- yes

**Founder approval needed**

- yes for destination email/process

## Phase 4 - Blog / CMS

**Tasks**

- choose static or CMS-backed blog
- add article templates
- add SEO metadata structure
- define categories

**Dependencies**

- editorial direction

**Acceptance criteria**

- at least one article flow works cleanly
- blog pages are indexable and readable

**Risks**

- launching a CMS before content discipline exists

**Files likely involved**

- blog routes
- content models
- optional CMS config

**Can Codex implement alone**

- yes

**Founder approval needed**

- yes

## Phase 5 - Case studies

**Tasks**

- build case-study listing
- create case-study template
- publish approved public project stories

**Dependencies**

- founder approval on public proof items

**Acceptance criteria**

- portfolio section is credible
- no fake claims
- case studies are readable and structured

**Risks**

- lack of approved screenshots or public project details

**Files likely involved**

- portfolio routes
- structured content or DB models

**Can Codex implement alone**

- yes, if content is approved

**Founder approval needed**

- yes

## Phase 6 - Admin dashboard

**Tasks**

- add secure admin auth
- build lead view
- build content editing or moderation tools

**Dependencies**

- database and role decisions

**Acceptance criteria**

- admin can review data safely
- no public exposure of admin tools

**Risks**

- scope growth
- unnecessary complexity too early

**Files likely involved**

- auth layer
- admin routes
- DB schema

**Can Codex implement alone**

- yes technically

**Founder approval needed**

- yes

## Phase 7 - SEO and analytics

**Tasks**

- metadata refinement
- structured headings
- analytics events
- sitemap and robots handling
- page performance refinement

**Dependencies**

- stable page set

**Acceptance criteria**

- analytics firing correctly
- crawlability confirmed
- core pages optimized

**Risks**

- tracking clutter
- SEO added too late in page design

**Files likely involved**

- metadata config
- analytics integration
- sitemap config

**Can Codex implement alone**

- yes

**Founder approval needed**

- light approval

## Phase 8 - Launch

**Tasks**

- QA
- final copy review
- deployment
- domain connection
- live verification

**Dependencies**

- all earlier phases stable

**Acceptance criteria**

- live site working on canonical domain
- forms working
- metadata visible
- mobile and desktop QA complete

**Risks**

- DNS misconfiguration
- email issues
- forgotten placeholder content

**Files likely involved**

- deployment config
- domain/DNS settings
- production environment variables

**Can Codex implement alone**

- mostly yes

**Founder approval needed**

- yes

## Summary of approval gates

- positioning and public brand story
- service priority order
- visual direction
- public case studies
- contact workflow
- launch content

## Suggested next step

Before coding, approve:

- business positioning
- launch pages
- primary CTA
- brand direction
- which proof items can be public
