# GBuild Solutions - Technical Architecture

**Date:** 2026-06-26

## 1. Architecture goal

Start with a professional marketing and lead-generation website that can later expand into:

- blog/CMS
- dynamic portfolio
- lead management
- admin dashboard
- client portal

Do not over-engineer V1.

## 2. Recommended stack

### Frontend

- `Next.js` with App Router
- `TypeScript`
- server-rendered marketing pages
- component-based design system

Why:

- strong SEO base
- flexible content architecture
- easy extension into forms, dashboards, and future authenticated areas

### Styling

- `Tailwind CSS`
- optional lightweight component primitives, but avoid over-reliance on template-heavy UI kits

### Backend

For V1:

- Next.js route handlers for contact forms and lightweight APIs

For V2+:

- dedicated backend service only if the platform outgrows the website scope

### Database

Recommended:

- `PostgreSQL`

Good hosted options:

- Supabase
- Neon + Prisma

For speed and simplicity, Supabase is a strong V1/V2 choice if you want:

- Postgres
- auth later
- storage later
- admin-friendly evolution

### ORM / data access

- `Prisma` if using hosted Postgres outside Supabase-generated APIs
- or direct Supabase SDK if the team prefers that route

## 3. Frontend architecture

Recommended structure:

- route groups by page domain
- reusable section components
- content objects for services, process, and case studies
- clear separation between static marketing content and dynamic data-backed content

V1 should keep most content file-based, not DB-driven.

## 4. Backend architecture

V1 backend responsibilities:

- contact form submission
- lead capture
- email notification
- spam protection
- analytics event capture

V2 backend responsibilities:

- admin access
- content editing
- case-study management
- newsletter and lead management

## 5. Database architecture approach

### V1

Static-first:

- services
- team members
- process steps
- case-study placeholders
- homepage content

Dynamic from day one if desired:

- leads
- contact requests
- newsletter subscribers

### V2

Dynamic:

- blog posts
- case studies
- testimonials
- admin users
- lead status tracking

## 6. CMS / content strategy

### Recommended V1

Use file-based content or local structured content collections.

Why:

- fastest to launch
- clean version control
- no CMS overhead before content stabilizes

### Recommended V2

Add a lightweight CMS or admin-managed content workflow for:

- blog posts
- case studies
- testimonials
- service updates

Possible options:

- Sanity
- Payload
- Supabase-backed admin interface

## 7. Contact form handling

Recommended flow:

1. visitor submits form
2. route handler validates input
3. spam checks run
4. lead is stored in database or sent to inbox plus storage
5. confirmation message shown to user
6. internal notification email sent

## 8. Lead management

V1 options:

- email inbox + database record
- optional Google Sheets sync if founder wants operational simplicity

Preferred approach:

- store leads in database
- notify by email
- optionally mirror to a spreadsheet or CRM later

## 9. Admin dashboard

Not required in V1.

Recommended only after:

- contact volume justifies it
- portfolio and blog become dynamic
- the founder wants lead/status visibility in one place

## 10. Blog system

### V1 option

- static or MDX-based blog

### V2 option

- CMS-backed blog with categories, authors, and SEO metadata

## 11. Portfolio / case-study system

### V1

- static structured content

### V2

- dynamic collection with tags, sectors, screenshots, outcomes, and visibility controls

## 12. Analytics

Recommended:

- privacy-respectful analytics such as Plausible or simple GA4 if needed

Track:

- page views
- CTA clicks
- form starts
- form submits
- service page engagement

## 13. SEO foundations

- semantic page structure
- clean metadata
- schema where relevant
- service-focused landing pages
- fast load times
- crawlable content
- blog for long-tail authority later

## 14. Hosting and deployment

Recommended:

- `Vercel` for frontend deployment

If database is added:

- Supabase or Neon hosting separately

## 15. Domain setup for gbuildsolutions.online

Considerations:

- connect `gbuildsolutions.online` and `www.gbuildsolutions.online`
- choose one canonical host
- configure SSL
- set proper redirects
- set branded email later if needed
- configure SPF, DKIM, and DMARC when using outbound email

## 16. Security basics

- server-side form validation
- rate limiting on public form endpoints
- bot/spam protection
- secret management in environment variables
- avoid exposing admin routes before auth is ready
- sanitize user inputs
- store minimum necessary lead data
- keep dependencies updated

## 17. Extensibility path

### Phase-ready evolution

- V1: marketing website + lead capture
- V2: blog + dynamic portfolio
- V3: admin dashboard
- V4: client portal or authenticated workspace

## 18. Recommended conclusion

Use a static-first, database-light architecture with Next.js and Postgres readiness.

This gives:

- speed now
- clean SEO
- low complexity
- future extensibility
