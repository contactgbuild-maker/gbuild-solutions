create extension if not exists pgcrypto;

create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  company_name text,
  inquiry_type text not null,
  status text not null default 'new' check (status in ('new', 'qualified', 'in_progress', 'closed')),
  budget_range text,
  message text not null,
  created_at timestamptz not null default now()
);

create index if not exists contact_leads_status_idx
  on public.contact_leads (status);

create index if not exists contact_leads_created_at_idx
  on public.contact_leads (created_at desc);

insert into public.contact_leads (
  full_name,
  email,
  company_name,
  inquiry_type,
  status,
  budget_range,
  message
)
values
  (
    'Amine Bensaid',
    'amine@novacargo.dz',
    'NovaCargo',
    'Website & Automation',
    'new',
    'EUR 2,000 - 5,000',
    'We need a modern company website and a simpler workflow for handling quotation requests.'
  ),
  (
    'Sofia Rahmani',
    'sofia@agriflow.io',
    'AgriFlow',
    'AI & Operations',
    'qualified',
    'EUR 5,000 - 10,000',
    'Our team wants AI support for client communication and internal reporting across multiple tools.'
  ),
  (
    'Karim Messaoud',
    'karim@buildsphere.co',
    'BuildSphere',
    'Custom Platform',
    'in_progress',
    'EUR 10,000+',
    'We are looking for a custom dashboard to centralize leads, project follow-up, and service delivery.'
  );
