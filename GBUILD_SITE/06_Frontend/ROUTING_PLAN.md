# GBuild Solutions - Routing Plan

## Suggested App Router Structure

```text
app/
  (marketing)/
    page.tsx
    about/page.tsx
    services/page.tsx
    ai-solutions/page.tsx
    web-saas-development/page.tsx
    business-digitalization/page.tsx
    case-studies/page.tsx
    process/page.tsx
    insights/page.tsx
    contact/page.tsx
  blog/
    [slug]/page.tsx
```

## Future Expansion

- `admin/` only when a dashboard is justified
- `api/` route handlers for forms and lightweight services
- optional dynamic case-study and blog content later

## URL Guidance

- keep service URLs explicit and search-readable
- avoid vague slugs like `/solutions` if pages have clearer service intent
