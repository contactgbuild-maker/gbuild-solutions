import Link from "next/link";
import { companyContact } from "@/lib/contact-info";
import { TestimonialSection } from "@/components/ui/testimonials";

export const metadata = {
  title: "Company",
};

const leaders = [
  {
    id: 1,
    name: "Mokhtar Bouazza",
    role: "CEO",
    bio: "Leads GBuild Solutions with a business-first vision focused on growth, execution, and practical digital transformation.",
    image: "/team/mokhtar-bouazza.jpg",
  },
  {
    id: 2,
    name: "Bakhti Benaoumer",
    role: "CTO",
    bio: "Drives the technical architecture of GBuild, making sure every system is scalable, stable, and aligned with client goals.",
    image: "/team/bakhti-benaoumer.jpg",
  },
  {
    id: 3,
    name: "Hamri Mohamed Amine",
    role: "AI Dev",
    bio: "Builds AI-powered solutions and smart automation workflows that help clients save time and improve business performance.",
    image: "/team/hamri-mohamed-amine.jpg",
  },
  {
    id: 4,
    name: "Farah Keltoum",
    role: "CMO",
    bio: "Shapes the company’s marketing direction, brand communication, and client-facing messaging across channels.",
    image: "/team/farah-keltoum.jpg",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-line">
        <div className="container-shell py-20 md:py-24">
          <p className="inline-flex border-l-2 border-teal pl-3 text-[0.74rem] uppercase tracking-[0.22em] text-teal">
            About GBuild Solutions
          </p>
          <h1 className="mt-8 max-w-4xl text-[clamp(2.8rem,5vw,4.7rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground">
            We help businesses use digital tools in a smarter and simpler way.
          </h1>
          <p className="mt-6 max-w-3xl text-[1.04rem] leading-8 text-ink-soft">
            GBuild Solutions works with companies that want a stronger website, clearer
            internal systems, better automation, and practical digital growth without
            unnecessary complexity.
          </p>
        </div>
      </section>

      <section className="container-shell py-20 md:py-24">
        <h2 className="inline-block border-b border-line pb-3 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.05em] text-foreground">
          The GBuild Difference
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-12">
          <article className="stitch-card md:col-span-8 md:row-span-2 p-8">
            <div className="flex items-center justify-between">
              <span className="grid h-10 w-10 place-items-center text-teal">S</span>
              <span className="bg-teal/10 px-3 py-2 text-[0.68rem] uppercase tracking-[0.14em] text-teal">
                01 / Our Approach
              </span>
            </div>
            <h3 className="mt-28 text-[2rem] font-medium tracking-[-0.04em] text-foreground">
              We focus on business needs before tools.
            </h3>
            <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-ink-soft">
              Before we build anything, we first understand your business, your daily
              operations, and your goals. This helps us recommend the right digital
              solution instead of adding more confusion.
            </p>
          </article>

          <article className="stitch-card md:col-span-4 flex flex-col items-center justify-center p-8 text-center">
            <span className="text-[3rem] font-semibold text-teal">120+</span>
            <span className="mt-3 border-t border-line pt-3 text-sm text-muted">
              Enterprise Deployments
            </span>
          </article>

          <article className="stitch-card md:col-span-4 flex flex-col items-center justify-center p-8 text-center">
            <span className="text-[3rem] font-semibold text-teal">99.99%</span>
            <span className="mt-3 border-t border-line pt-3 text-sm text-muted">
              System Uptime
            </span>
          </article>

          <article className="stitch-card md:col-span-12 relative overflow-hidden p-8">
            <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,rgba(64,143,158,0.7)_1px,transparent_0)] [background-size:24px_24px]" />
            <div className="relative max-w-md border border-line bg-background/90 p-6">
              <h3 className="text-[1.7rem] font-medium tracking-[-0.04em] text-foreground">
                Global Operations
              </h3>
              <p className="mt-3 text-[1rem] leading-8 text-ink-soft">
                We work with businesses across different markets and help them move
                forward with clearer systems, stronger digital presence, and more
                organized operations.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-line bg-background/70 py-20 md:py-24">
        <div className="container-shell">
          <div className="flex flex-col gap-4 border-b border-line pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[0.74rem] uppercase tracking-[0.22em] text-teal">The Architects</p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.05em] text-foreground">
                Leadership Team
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-ink-soft md:text-right">
              Veterans of high-scale engineering and enterprise architecture guiding our
              vision.
            </p>
          </div>
          <div className="mt-10">
            <TestimonialSection
              title="Meet the Team Behind GBuild"
              subtitle="A focused team combining business vision, technical execution, AI capability, and market communication."
              testimonials={leaders.map((leader) => ({
                id: leader.id,
                quote: leader.bio,
                name: leader.name,
                role: leader.role,
                imageSrc: leader.image,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="container-shell py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.05em] text-foreground">
              Initiate a Project
            </h2>
            <p className="mt-3 max-w-2xl text-[1rem] leading-8 text-ink-soft">
              Tell us what your business needs and we will guide you toward the right
              website, automation, system, or AI solution.
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
              <h3 className="border-b border-line pb-4 text-[1.7rem] font-medium tracking-[-0.04em] text-foreground">
                {companyContact.officeName}
              </h3>
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
              <h3 className="border-b border-line pb-4 text-[1.7rem] font-medium tracking-[-0.04em] text-foreground">
                Direct Messaging
              </h3>
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
      </section>
    </div>
  );
}
