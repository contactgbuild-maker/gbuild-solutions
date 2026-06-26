# GBuild Solutions - Backend Plan

**Date:** 2026-06-26

## 1. Backend objective

Support a professional B2B website without building a heavy application too early.

V1 backend should do a few things very well:

- capture leads
- store inquiries
- notify the team
- protect forms from spam
- prepare the foundation for later content and admin systems

## 2. V1 backend scope

- contact form endpoint
- basic lead capture
- email notification
- optional database storage
- analytics event hooks

## 3. Contact form endpoint

### Purpose

Receive qualified inbound requests from the public site.

### Recommended behavior

- validate required fields
- sanitize inputs
- reject obvious spam
- save the request
- send a success response
- trigger internal notification

### Suggested fields

- `name`
- `company`
- `email`
- `service_interest`
- `project_summary`
- `timeline` optional

## 4. Lead capture

Lead capture should not rely only on email inboxes.

Recommended:

- store the submission in a database
- notify the founder/team by email
- optionally mirror to a sheet or CRM later

## 5. CMS or admin dashboard options

### V1

No full CMS required.

### V2

Add either:

- a lightweight admin dashboard
- or a CMS with role-based access

Use cases:

- manage case studies
- publish blog posts
- manage testimonials
- review leads

## 6. Email notifications

Recommended notifications:

- internal new inquiry alert
- optional auto-confirmation to the sender

Internal email should contain:

- sender name
- company
- contact info
- service interest
- short summary
- timestamp

## 7. Spam protection

Recommended baseline:

- honeypot field
- server-side validation
- rate limiting
- optional CAPTCHA only if spam becomes real

Do not make the contact experience feel hostile at launch.

## 8. Database storage

### Minimal V1

Store:

- contact requests
- leads

### Later

Store:

- blog posts
- case studies
- newsletter subscribers
- admin activity

## 9. Analytics events

Track backend-relevant events such as:

- contact form submitted
- newsletter subscribed
- lead source tagged

## 10. Future client portal possibility

The architecture should leave space for:

- auth
- client project access
- shared documents
- dashboard modules
- status updates

But this is a future product stage, not a V1 requirement.

## 11. Operational recommendation

Keep the first backend small, robust, and easy to maintain.

The best first backend is the one that supports real sales conversations cleanly without adding avoidable complexity.
