---
name: Architectural Precision
colors:
  surface: '#f7fafb'
  surface-dim: '#d8dadb'
  surface-bright: '#f7fafb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f5'
  surface-container: '#eceeef'
  surface-container-high: '#e6e9e9'
  surface-container-highest: '#e0e3e4'
  on-surface: '#181c1d'
  on-surface-variant: '#3f484b'
  inverse-surface: '#2d3132'
  inverse-on-surface: '#eef1f2'
  outline: '#6f797b'
  outline-variant: '#bec8cb'
  surface-tint: '#026876'
  primary: '#006674'
  on-primary: '#ffffff'
  primary-container: '#2c7f8d'
  on-primary-container: '#f8fdff'
  inverse-primary: '#86d2e2'
  secondary: '#326667'
  on-secondary: '#ffffff'
  secondary-container: '#b4e9ea'
  on-secondary-container: '#376b6c'
  tertiary: '#854f20'
  on-tertiary: '#ffffff'
  tertiary-container: '#a26636'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a2eeff'
  primary-fixed-dim: '#86d2e2'
  on-primary-fixed: '#001f25'
  on-primary-fixed-variant: '#004e5a'
  secondary-fixed: '#b7eced'
  secondary-fixed-dim: '#9bd0d1'
  on-secondary-fixed: '#002020'
  on-secondary-fixed-variant: '#164e4f'
  tertiary-fixed: '#ffdcc4'
  tertiary-fixed-dim: '#ffb781'
  on-tertiary-fixed: '#2f1400'
  on-tertiary-fixed-variant: '#6c3a0c'
  background: '#f7fafb'
  on-background: '#181c1d'
  surface-variant: '#e0e3e4'
typography:
  headline-xl:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  max-width: 1280px
---

## Brand & Style

This design system embodies a sophisticated, urban professional aesthetic that merges architectural rigor with organic warmth. The brand personality is grounded, authoritative, and meticulously organized, targeting high-level professionals who value clarity and structural integrity. 

The visual style is a blend of **Minimalism** and **Tactile Modernism**. It relies on generous whitespace, high-quality typography, and a strict adherence to a heritage-inspired color palette. The emotional response should be one of "composed confidence"—the feeling of standing in a well-lit, modern gallery or a high-end architectural firm. Interactions should feel deliberate and weighted, eschewing excessive animations for precise, meaningful transitions.

## Colors

The palette is restricted to five core tones to maintain a high-density, professional atmosphere. 

- **Surfaces & Backgrounds:** #EDECEF (Light Gray) serves as the singular canvas for all interfaces. No pure whites or generic grays are permitted.
- **Primary Technicals:** #408F9E (Teal) is used for primary actions and active states. #144D4E (Forest Green) provides deep contrast for text, iconography, and secondary structural elements.
- **Accents & Indicators:** #B97137 (Amber) is reserved for highlighting, warnings, or specialty "featured" actions. #982510 (Deep Red) is strictly used for critical errors and destructive actions.

For typography on the light gray background, use #144D4E for maximum legibility. Avoid the use of standard black (#000000).

## Typography

This design system utilizes **Hanken Grotesk** (as the closest available match to the Urbanist profile) to provide a clean, sharp, and contemporary feel. 

Headlines use tighter letter spacing and heavy weights to ground the page layout. Labels are set in medium or semi-bold weights with slight tracking (letter spacing) to ensure readability in small-scale technical contexts. All type should be rendered in #144D4E or #408F9E; never use pure black. For hierarchy, use weight and color shifts (Teal vs. Forest Green) rather than size alone.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to mimic architectural blueprints, transitioning to a fluid model on mobile devices.

- **Grid:** A 12-column system is used for desktop (1280px max-width). 
- **Rhythm:** Spacing follows an 8px baseline grid. Internal component padding should utilize increments of 8px (e.g., 16px, 24px).
- **Breakpoints:** 
  - Mobile: < 600px (4 columns, 16px margins)
  - Tablet: 600px - 1024px (8 columns, 24px margins)
  - Desktop: > 1024px (12 columns, 64px margins)

Alignment is strictly flush-left for headlines and body copy to reinforce the structural, professional tone.

## Elevation & Depth

Elevation in this design system is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows.

1.  **Level 0 (Base):** #EDECEF.
2.  **Level 1 (Cards/Floating elements):** Use a 1px solid border of #408F9E at 20% opacity. 
3.  **Level 2 (Modals/Popovers):** Use a subtle, large-radius ambient shadow tinted with #144D4E (opacity 10%) to suggest depth without breaking the minimalist aesthetic.

Avoid multi-colored glows or heavy drop shadows. Depth should feel "flat yet layered," like sheets of high-quality paper stacked on a desk.

## Shapes

The shape language is **Soft (0.25rem)**. This provides a subtle nod to human-centric design while maintaining the professional rigor of sharp corners.

- **Buttons & Inputs:** 4px (0.25rem) corner radius.
- **Cards & Containers:** 8px (0.5rem) corner radius for a slightly more approachable feel on large surfaces.
- **Icons:** Use linear icons with a 2px stroke weight to match the architectural precision of the typeface.

## Components

- **Buttons:** Primary buttons are solid #408F9E with #EDECEF text. Secondary buttons use a 1px border of #144D4E with #144D4E text.
- **Input Fields:** Backgrounds are #EDECEF with a bottom-border only of #144D4E (2px) to mimic form-based architectural documents. Active states shift the border to #408F9E.
- **Chips:** Solid #144D4E with #EDECEF text for high-contrast categorizations.
- **Cards:** No background color change; differentiate via a 1px #408F9E border or a subtle 4px top-accent bar in #B97137 for "featured" content.
- **Status Indicators:** Use #982510 for errors and #B97137 for warnings. Success states should be represented by #408F9E rather than green to stay within the strict palette.
- **Lists:** Use thin 1px dividers in #144D4E (at 10% opacity) to separate line items without creating visual clutter.