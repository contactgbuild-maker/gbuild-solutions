---
name: Urban Professional
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#0b1c30'
  on-tertiary-container: '#75859d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#d3e4fe'
  tertiary-fixed-dim: '#b7c8e1'
  on-tertiary-fixed: '#0b1c30'
  on-tertiary-fixed-variant: '#38485d'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-xl:
    fontFamily: Urbanist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Urbanist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Urbanist
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Urbanist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Urbanist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Urbanist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Urbanist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Urbanist
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Urbanist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 40px
  gutter: 24px
  margin: 32px
  container-max-width: 1200px
---

## Brand & Style
The design system is built for a professional, execution-focused brand identity that values precision, clarity, and modern efficiency. The target audience consists of high-performing professionals and teams who require a tool that feels reliable yet forward-thinking.

The style is **Corporate Modern** with a lean towards **Minimalism**. It emphasizes heavy whitespace to reduce cognitive load and uses high-quality geometric typography to establish a clear information hierarchy. The interface avoids unnecessary decoration, focusing instead on structural integrity and functional clarity.

## Colors
The palette is rooted in deep slate and vibrant blues to evoke trust and technical proficiency. 

- **Primary**: A deep slate (#0F172A) used for core branding, headings, and primary actions to anchor the UI.
- **Secondary**: A bright blue (#3B82F6) used for interactive elements, progress indicators, and call-to-outs.
- **Tertiary**: A muted blue-grey (#64748B) for secondary text and supporting icons.
- **Neutral**: A clean, cool off-white (#F8FAFC) for backgrounds to ensure a fresh, airy feel.

## Typography
Urbanist is the foundational typeface for this design system. Its geometric construction provides a clean, modern aesthetic that ensures legibility at all scales.

- **Headlines**: Use Bold (700) or SemiBold (600) weights with slightly tighter letter spacing to create a strong visual punch and professional tone.
- **Body**: Use Regular (400) weight for optimal readability in long-form content and data entry.
- **Labels**: Use SemiBold (600) with increased letter spacing for small UI elements like buttons, chips, and table headers to maintain clarity.

## Layout & Spacing
The design system utilizes a **Fixed Grid** model for desktop and a fluid model for mobile.

- **Grid**: A 12-column grid system with 24px gutters. Content is housed within a 1200px max-width container on desktop.
- **Breakpoints**: Mobile (<640px), Tablet (640px - 1024px), Desktop (>1024px).
- **Rhythm**: All spacing follows a 4px baseline. Use 16px (md) for standard padding and 24px (lg) for section separation. On mobile, margins reduce to 16px to maximize screen real estate.

## Elevation & Depth
This design system uses **Tonal Layers** combined with **Ambient Shadows** to define hierarchy.

- **Surface Tiers**: Use subtle shifts in neutral values to distinguish between the background and containers.
- **Shadows**: Shadows are highly diffused and low-opacity, using the primary slate color as a tint (e.g., `rgba(15, 23, 42, 0.08)`).
- **Depth Levels**: 
  - Level 1 (Cards): 2px Y-offset, 4px blur.
  - Level 2 (Dropdowns/Modals): 8px Y-offset, 16px blur.

## Shapes
The design system uses a **Rounded** shape language to balance the geometric rigor of the typography.

- **Standard Components**: Buttons, inputs, and small cards use a 0.5rem (8px) radius.
- **Large Components**: Content containers and modals use a 1rem (16px) radius.
- **Pills**: Use for status indicators and tags where high distinction is needed.

## Components
- **Buttons**: Primary buttons feature the Primary slate background with White text. Secondary buttons use a subtle Slate-100 background. All buttons have a height of 44px for high touch-targets.
- **Inputs**: Use a 1px border (#E2E8F0) with a 0.5rem radius. Focus states are indicated by a 2px Secondary blue border.
- **Cards**: Background is absolute white (#FFFFFF) with a Level 1 ambient shadow and 1rem roundedness.
- **Chips**: Small, 28px height elements with SemiBold labels. Use Tertiary grey for neutral tags and Secondary blue for active filters.
- **Data Tables**: Use 1px horizontal dividers only. Headers are Label-sm in Tertiary grey with a light neutral background fill.