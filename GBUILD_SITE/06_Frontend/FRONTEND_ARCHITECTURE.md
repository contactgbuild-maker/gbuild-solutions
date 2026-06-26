# GBuild Solutions - Frontend Architecture

## Recommended Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## Architecture Recommendation

Use Next.js App Router with route groups for marketing pages and future expansion. Keep V1 static-first, content-driven, and componentized.

## Key Requirements

- strong metadata support
- server-rendered marketing pages
- clean component boundaries
- high accessibility baseline
- performance-aware motion and media usage

## SEO Metadata Strategy

- page-specific titles and descriptions
- Open Graph defaults plus page overrides
- canonical URLs
- schema markup where useful for organization and articles later

## Performance Constraints

- no heavy animation library usage by default
- lazy-load large visuals and 3D
- keep hero interactive layer lightweight
- optimize images and fonts carefully

## Responsive Behavior

- mobile-first layout logic
- strict overflow control
- readable headline line lengths across breakpoints

## 3D Performance Rules

- isolate 3D to one or two key surfaces
- provide no-3D fallback
- avoid loading 3D assets on every route
