import Link from "next/link";

export const metadata = {
  title: "Services",
};

const services = [
  {
    id: "SYS.01",
    title: "AI and Automation",
    technical:
      "We use AI and automation to handle repetitive tasks, organize information, and reduce the time your team spends on manual work.",
    value:
      "Your business saves time, reduces operational mistakes, and gets faster day-to-day execution.",
    cta: "Learn More",
    accent: "bg-sand text-white",
  },
  {
    id: "SYS.02",
    title: "CRM and Business Management Systems",
    technical:
      "We build systems that help you track clients, sales, tasks, and internal operations in one clear place.",
    value:
      "You gain more control, better follow-up, and better visibility across your business.",
    cta: "See How It Works",
    accent: "bg-teal text-white",
  },
  {
    id: "SYS.03",
    title: "Websites and Digital Platforms",
    technical:
      "We create modern websites, customer portals, and digital platforms that present your business clearly and support growth.",
    value:
      "You get a stronger online presence, a better customer experience, and a platform built around your business goals.",
    cta: "View Service Details",
    accent: "border border-line text-foreground",
  },
  {
    id: "SYS.04",
    title: "Workflow Improvement",
    technical:
      "We connect your tools and simplify the steps your team repeats every day so work moves with less friction.",
    value:
      "This means smoother operations, fewer delays, and more time for sales, service, and growth.",
    cta: "Discover The Benefit",
    accent: "bg-teal text-white",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="container-shell grid gap-14 py-20 md:grid-cols-[1fr_0.55fr] md:items-start md:py-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-sand" />
            <span className="text-[0.74rem] uppercase tracking-[0.22em] text-sand">
              Services For Business Growth
            </span>
          </div>
          <h1 className="mt-8 text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground">
            Practical digital services for companies that want to grow better.
          </h1>
          <p className="mt-6 max-w-3xl text-[1.06rem] leading-9 text-ink-soft">
            We help businesses improve their website, organize their operations, automate
            repetitive work, and build digital systems that support sales and everyday
            execution.
          </p>
          <Link href="/contact" className="stitch-button-secondary mt-10">
            Talk To Our Team
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="grid h-[18rem] grid-cols-4 grid-rows-3 border border-line">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={`border-b border-r border-line ${index === 3 ? "bg-teal/7" : ""}`}
              />
            ))}
            <div className="col-span-4 border-r border-line" />
          </div>
        </div>
      </section>

      <section className="container-shell grid gap-6 pb-24 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.id} className="stitch-card">
            <div className="flex items-start justify-between gap-6 border-b border-line bg-background px-6 py-6">
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center border border-line text-foreground">
                  {service.id.slice(-2)}
                </div>
                <h2 className="text-[2rem] font-medium tracking-[-0.04em] text-foreground">
                  {service.title}
                </h2>
              </div>
              <span className={`px-3 py-2 text-[0.7rem] uppercase tracking-[0.14em] ${service.accent}`}>
                {service.id}
              </span>
            </div>
            <div className="grid gap-8 px-6 py-6 lg:grid-cols-2">
              <div>
                <p className="inline-block border-b border-line pb-1 text-[0.74rem] uppercase tracking-[0.16em] text-muted">
                  What We Do
                </p>
                <p className="mt-4 text-[1rem] leading-8 text-ink-soft">{service.technical}</p>
              </div>
              <div>
                <p className="inline-block border-b border-line pb-1 text-[0.74rem] uppercase tracking-[0.16em] text-muted">
                  What You Gain
                </p>
                <p className="mt-4 text-[1rem] leading-8 text-ink-soft">{service.value}</p>
              </div>
            </div>
            <div className="px-6 pb-6">
              <Link href="/contact" className="text-sm text-rust hover:underline">
                {service.cta}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
