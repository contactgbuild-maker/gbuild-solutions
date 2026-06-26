# GBuild Solutions - Styling Plan

## Styling Recommendation

Use Tailwind CSS with a small internal token layer for colors, spacing, typography, radii, and motion values.

## Why Tailwind Fits

- fast iteration
- strong control over spacing and responsive behavior
- easy mapping from brand tokens to UI
- good fit for a custom design system if used with discipline

## Guardrails

- do not let utility speed collapse visual discipline
- extract repeated patterns into components
- centralize theme values
- avoid random one-off classes for spacing drift

## Token Areas

- colors
- font sizes and line-heights
- spacing scale
- radii
- shadows
- motion timing and easing
