# GBuild Solutions - Database Plan

**Date:** 2026-06-26

## 1. Database philosophy

A full database is not required for every part of V1.

The smart approach is:

- keep marketing content mostly static at launch
- make lead and contact data dynamic first
- move blog, case studies, and admin data to the database only when content volume justifies it

## 2. Static first vs dynamic later

### Can be static in V1

- homepage content
- service descriptions
- process steps
- about page content
- early portfolio summaries
- ecosystem explanation

### Better dynamic from V1 or early V2

- contact requests
- leads
- newsletter subscribers

### Better dynamic in V2+

- blog posts
- case studies
- testimonials
- team members
- admin users

## 3. Entity plan

## Leads

**Purpose**

Track potential clients who show interest.

**Key fields**

- `id`
- `full_name`
- `company_name`
- `email`
- `phone`
- `service_interest`
- `project_summary`
- `budget_range`
- `timeline`
- `source`
- `status`
- `created_at`

**Relationships**

- may be linked to one or more contact requests

**Future use**

- qualification tracking
- pipeline management
- CRM sync

## Contact Requests

**Purpose**

Store form submissions from the public contact page.

**Key fields**

- `id`
- `lead_id` nullable
- `name`
- `email`
- `company`
- `message`
- `service_interest`
- `website_url`
- `created_at`
- `ip_hash` optional
- `spam_score` optional

**Relationships**

- can create or attach to a lead

**Future use**

- spam review
- response SLAs
- analytics

## Services

**Purpose**

Store service definitions if made dynamic later.

**Key fields**

- `id`
- `slug`
- `title`
- `summary`
- `description`
- `status`
- `sort_order`

**Relationships**

- can link to case studies
- can link to client segments

**Future use**

- CMS-driven service pages

## Projects

**Purpose**

Internal record of work, including non-public work.

**Key fields**

- `id`
- `title`
- `slug`
- `client_name` nullable
- `sector`
- `type`
- `visibility`
- `summary`
- `status`
- `start_date`
- `end_date`

**Relationships**

- may have one public case study
- may connect to services and testimonials

**Future use**

- project operations
- selective publication pipeline

## Case Studies

**Purpose**

Public-facing proof pages.

**Key fields**

- `id`
- `project_id`
- `slug`
- `title`
- `overview`
- `problem`
- `approach`
- `solution`
- `outcomes`
- `featured_image`
- `visibility`
- `published_at`

**Relationships**

- belongs to a project
- can connect to services

**Future use**

- portfolio section
- filtered industry pages

## Blog Posts

**Purpose**

Support insights, SEO, and thought clarity.

**Key fields**

- `id`
- `slug`
- `title`
- `excerpt`
- `content`
- `category`
- `author_id`
- `seo_title`
- `seo_description`
- `published_at`
- `status`

**Relationships**

- may belong to an author/team member

**Future use**

- editorial workflow
- search indexing

## Testimonials

**Purpose**

Store approved quotes and proof.

**Key fields**

- `id`
- `client_name`
- `client_role`
- `company_name`
- `quote`
- `source_project_id`
- `visibility`

**Relationships**

- may link to a project or case study

**Future use**

- homepage trust sections
- service page proof blocks

## Team Members

**Purpose**

Public or internal representation of people.

**Key fields**

- `id`
- `full_name`
- `role`
- `bio`
- `photo_url`
- `linkedin_url`
- `visibility`
- `sort_order`

**Relationships**

- may author blog posts

**Future use**

- about page
- author pages

## Client Segments

**Purpose**

Define audience clusters for messaging and filtering.

**Key fields**

- `id`
- `name`
- `slug`
- `description`

**Relationships**

- can link to services and case studies

**Future use**

- sector landing pages
- lead segmentation

## Newsletter Subscribers

**Purpose**

Store consent-based subscribers for updates or insights.

**Key fields**

- `id`
- `email`
- `source`
- `consent_status`
- `created_at`

**Relationships**

- none required at first

**Future use**

- campaign exports
- editorial list management

## Admin Users

**Purpose**

Control secure back-office access.

**Key fields**

- `id`
- `email`
- `full_name`
- `role`
- `auth_provider_id`
- `created_at`
- `last_login_at`

**Relationships**

- may create or edit content

**Future use**

- CMS
- dashboard
- approvals

## 4. Recommended V1 database scope

If you want the leanest launch:

- `contact_requests`
- `leads`
- `newsletter_subscribers` optional

Everything else can be file-based first.

## 5. Recommended V2 database scope

Add:

- `case_studies`
- `blog_posts`
- `testimonials`
- `admin_users`

## 6. Relationship summary

- one `lead` can have many `contact_requests`
- one `project` can have one or many `case_studies`
- one `service` can map to many `case_studies`
- one `team_member` can author many `blog_posts`

## 7. Final recommendation

Do not start with a heavy CMS database model if the content is still being defined.

Start small, with leads and contact handling only, then expand when the marketing and content model stabilizes.
