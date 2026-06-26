"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/solutions") {
      return pathname === "/solutions" || pathname === "/business-digitalization";
    }

    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/96 backdrop-blur-sm">
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3 text-foreground">
            <Image
              src="/gb-logo.png"
              alt="GB logo"
              width={42}
              height={42}
              className="h-10 w-10 object-contain"
            />
            <p className="text-[1.05rem] font-semibold tracking-[-0.04em]">
              GBuild Solutions
            </p>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`border-b px-0 py-2 text-[0.82rem] transition-colors ${
                    active
                      ? "border-teal text-foreground"
                      : "border-transparent text-foreground/72 hover:border-teal/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="border border-teal bg-teal px-5 py-3 text-[0.82rem] text-white transition-colors hover:bg-teal-strong"
            >
              Build with Us
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="grid h-11 w-11 place-items-center border border-line bg-white/70 text-foreground md:hidden"
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>

        {open ? (
          <div className="mb-4 border border-line bg-background md:hidden">
            <nav className="grid gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-foreground/80 hover:bg-black/4 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 border border-teal bg-teal px-4 py-3 text-sm text-white"
              >
                Build with Us
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
