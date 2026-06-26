# GBuild Solutions - Lead Capture Plan

## Core Flow

1. visitor submits contact form
2. route handler validates and sanitizes input
3. spam checks run
4. inquiry is sent by email
5. inquiry is stored if database is enabled
6. visitor receives success confirmation

## Form Fields

- name
- company
- email
- service interest
- project summary
- timeline optional

## Anti-Spam

- honeypot
- server-side validation
- rate limiting
- CAPTCHA only if needed later

## Notification Destination

Founder/team email destination is To Verify.
