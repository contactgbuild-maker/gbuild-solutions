# GBuild Solutions - Animation Libraries Review

## Framer Motion

Recommendation: **Yes, likely V1**

Use for:

- section reveals
- CTA and card micro-motion
- controlled presence transitions

Why:

- good React ergonomics
- enough power for premium motion without jumping to heavier tooling first

Risk:

- easy to overuse

## GSAP

Recommendation: **Optional, targeted**

Use only if:

- a specific pinned or scrubbed storytelling section clearly justifies it

Why:

- excellent for advanced scroll choreography

Risk:

- adds complexity quickly
- can push the site toward motion theater if used too broadly

## Three.js / React Three Fiber

Recommendation: **Optional, one-surface maximum in V1**

Use for:

- hero or single capability visualization

Risk:

- performance cost
- easy to become decorative noise

## Lenis Or Smooth Scroll Utility

Recommendation: **Maybe, after performance testing**

Only if:

- it materially improves the premium feel without reducing accessibility or causing lag

## Tailwind CSS

Recommendation: **Yes**

## shadcn/ui

Recommendation: **Selective use only**

Use for:

- accessible primitives if needed

Risk:

- can pull the design toward standard template aesthetics if copied too literally
