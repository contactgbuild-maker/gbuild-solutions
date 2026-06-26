import Link from "next/link";

export const metadata = {
  title: "Ecosystem",
};

const partnerColumns = [
  {
    title: "Cloud Infrastructure",
    color: "text-teal",
    items: [
      ["AWS", "Tier 1", "Integration Scope: Compute, Storage, AI Services"],
      ["Google Cloud", "Tier 1", "Integration Scope: Data Analytics, Kubernetes"],
    ],
  },
  {
    title: "AI and Machine Learning",
    color: "text-sand",
    items: [
      ["OpenAI", "Strategic", "Integration Scope: LLMs, Generative AI"],
      ["Hugging Face", "Partner", "Integration Scope: Open Source Models"],
    ],
  },
  {
    title: "Enterprise SaaS",
    color: "text-teal",
    items: [["Salesforce", "Integration", "Integration Scope: CRM, Data Sync"]],
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="container-shell relative py-20 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-[clamp(2.8rem,5vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground">
              Ecosystem of Innovation
            </h1>
            <p className="mt-6 max-w-3xl text-[1.04rem] leading-8 text-ink-soft">
              We collaborate with world-class technology leaders to engineer robust,
              future-proof architectures. Our validated network ensures seamless
              integration and unparalleled performance across your enterprise stack.
            </p>
            <Link href="/contact" className="stitch-button-primary mt-10">
              Explore Partners
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-background/70 py-20 md:py-24">
        <div className="container-shell">
          <div className="mb-10">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.05em] text-foreground">
              Validated Partners
            </h2>
            <p className="mt-3 text-[1rem] leading-8 text-ink-soft">
              Strategic alliances across key technology domains.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {partnerColumns.map((column) => (
              <div key={column.title} className="grid gap-4">
                <h3 className={`border-b border-line pb-3 text-[0.82rem] uppercase tracking-[0.22em] ${column.color}`}>
                  {column.title}
                </h3>
                {column.items.map(([name, level, scope]) => (
                  <article key={name} className="stitch-card p-5">
                    <div className="flex items-center justify-between border-b border-line pb-4">
                      <div className="grid h-10 w-10 place-items-center border border-line text-foreground">
                        {name.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="border border-line px-2 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-muted">
                        {level}
                      </span>
                    </div>
                    <h4 className="mt-4 text-[1.55rem] font-medium tracking-[-0.04em] text-foreground">
                      {name}
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-ink-soft">{scope}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-20 md:py-24">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.05em] text-foreground">
              Certified Engineering Excellence
            </h2>
            <p className="mt-4 text-[1rem] leading-8 text-ink-soft">
              Our processes and infrastructure meet the highest global standards for
              security, reliability, and technical proficiency.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["ISO 27001", "SOC2 Type II", "AWS Certified", "GCP Partner"].map((item) => (
              <div key={item} className="stitch-card flex min-h-32 items-center justify-center px-4 text-center text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-background/70 py-20 md:py-24">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.05em] text-foreground">
              Integration Architecture
            </h2>
            <p className="mt-4 text-[1rem] leading-8 text-ink-soft">
              A high-level schematic of how our middleware bridges client infrastructure
              with advanced partner APIs.
            </p>
          </div>

          <div className="stitch-card mx-auto mt-12 max-w-5xl p-8">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr_0.8fr] md:items-center">
              <div className="stitch-node">Client Node</div>
              <div className="stitch-core-node">GBuild Core</div>
              <div className="grid gap-4">
                <div className="stitch-node">Partner API</div>
                <div className="stitch-node">Data Lake</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-20 text-center md:py-24">
        <h2 className="text-[clamp(2.2rem,4vw,3.4rem)] font-semibold tracking-[-0.05em] text-foreground">
          Build with a Validated Network
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-8 text-ink-soft">
          Leverage our partnerships to accelerate your engineering goals. Get in touch
          to discuss integration architectures tailored to your enterprise.
        </p>
        <Link href="/contact" className="stitch-button-primary mt-10">
          Contact Engineering
        </Link>
      </section>
    </div>
  );
}
