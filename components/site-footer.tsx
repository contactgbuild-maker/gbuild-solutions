import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/site-data";
import { companyContact } from "@/lib/contact-info";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-background py-12">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.8fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/gb-logo.png"
              alt="GB logo"
              width={42}
              height={42}
              className="h-10 w-10 object-contain"
            />
            <p className="text-[1.15rem] font-semibold tracking-[-0.04em] text-foreground">
              GBuild Solutions
            </p>
          </div>
          <p className="mt-5 max-w-sm text-[0.98rem] leading-8 text-ink-soft">
            Architecting the infrastructure for tomorrow&apos;s technology leaders.
            Precision, stability, and scale.
          </p>
          <div className="mt-6 h-px w-full max-w-sm bg-line" />
          <p className="mt-6 text-sm leading-7 text-muted">
            Copyright 2024 GBuild Solutions. Engineering the future of AI and SaaS.
          </p>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.14em] text-muted">Navigation</p>
          <div className="mt-5 grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/82 transition-colors hover:text-teal"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.14em] text-muted">Legal</p>
          <div className="mt-5 grid gap-3 text-sm text-foreground/82">
            <Link href="/contact" className="hover:text-teal">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-teal">
              Terms of Service
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.14em] text-muted">Contact</p>
          <div className="mt-5 grid gap-3 text-sm text-foreground/82">
            <p>{companyContact.addressLine1}</p>
            <p>{companyContact.addressLine2}</p>
            <p>{companyContact.city}</p>
            <Link href={`tel:${companyContact.phoneRaw}`} className="hover:text-teal">
              {companyContact.phoneDisplay}
            </Link>
            <Link href={companyContact.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-teal">
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
