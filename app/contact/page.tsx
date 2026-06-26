import Link from "next/link";
import { companyContact } from "@/lib/contact-info";

export const metadata = {
  title: "Build with Us",
};

export default function ContactPage() {
  return (
    <div className="container-shell py-20 md:py-24">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="inline-flex border-l-2 border-teal pl-3 text-[0.74rem] uppercase tracking-[0.22em] text-teal">
            Contact Engineering
          </p>
          <h1 className="mt-8 text-[clamp(2.8rem,5vw,4.6rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground">
            Initiate a Project
          </h1>
          <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-ink-soft">
            Share your business goals with us and we will guide you toward the right
            website, system, automation, or AI solution for your company.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link href={companyContact.whatsappUrl} target="_blank" rel="noreferrer" className="stitch-button-primary">
              WhatsApp Us
            </Link>
            <Link
              href={`tel:${companyContact.phoneRaw}`}
              className="inline-flex items-center justify-center border border-line bg-background px-6 py-3 text-sm text-foreground transition-colors hover:bg-black/4"
            >
              Call {companyContact.phoneDisplay}
            </Link>
          </div>

          <form className="mt-8 grid gap-4 border border-line bg-background p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input className="border border-line bg-background px-4 py-3 outline-none" placeholder="First Name" />
              <input className="border border-line bg-background px-4 py-3 outline-none" placeholder="Last Name" />
            </div>
            <input className="border border-line bg-background px-4 py-3 outline-none" placeholder="Work Email" />
            <input className="border border-line bg-background px-4 py-3 outline-none" placeholder="Company / Organization" />
            <select className="border border-line bg-background px-4 py-3 outline-none">
              <option>Cloud Architecture Restructuring</option>
              <option>AI and LLM Enterprise Integration</option>
              <option>High-Availability Database Design</option>
              <option>Other Technical Inquiry</option>
            </select>
            <textarea
              rows={5}
              className="border border-line bg-background px-4 py-3 outline-none"
              placeholder="Project Scope / Technical Details"
            />
            <button type="submit" className="stitch-button-primary w-fit">
              Submit Inquiry
            </button>
          </form>
        </div>

        <div className="grid gap-6">
          <article className="stitch-card p-6">
            <h2 className="border-b border-line pb-4 text-[1.7rem] font-medium tracking-[-0.04em] text-foreground">
              {companyContact.officeName}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="text-sm leading-7 text-ink-soft">
                <p className="mb-1 text-muted">Address</p>
                <p>{companyContact.addressLine1}</p>
                <p>{companyContact.addressLine2}</p>
                <p>{companyContact.city}</p>
              </div>
              <div className="text-sm leading-7 text-ink-soft">
                <p className="mb-1 text-muted">Contact</p>
                <p>{companyContact.phoneDisplay}</p>
                <p>Same number on WhatsApp</p>
              </div>
            </div>
          </article>

          <article className="stitch-card p-6">
            <h2 className="border-b border-line pb-4 text-[1.7rem] font-medium tracking-[-0.04em] text-foreground">
              Direct Messaging
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="text-sm leading-7 text-ink-soft">
                <p className="mb-1 text-muted">WhatsApp</p>
                <p>Fastest way to discuss your project.</p>
                <p>Send your website, business idea, or workflow problem.</p>
              </div>
              <div className="text-sm leading-7 text-ink-soft">
                <p className="mb-1 text-muted">Actions</p>
                <Link href={companyContact.whatsappUrl} target="_blank" rel="noreferrer" className="text-teal hover:underline">
                  Open WhatsApp Chat
                </Link>
                <p>{companyContact.phoneDisplay}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
