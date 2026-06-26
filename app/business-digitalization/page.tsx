import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Solutions",
};

const processCards = [
  {
    phase: "PHASE 01",
    title: "Understanding Your Business",
    body:
      "We begin by understanding how your business works today, where time is being lost, and where digital improvements can create the biggest impact.",
    tags: ["Business Review", "Needs Analysis"],
  },
  {
    phase: "PHASE 02",
    title: "Choosing The Right Solution",
    body:
      "We define the best digital path for your business, whether that means a website, internal system, automation, or a full platform.",
    tags: ["Clear Plan"],
  },
  {
    phase: "PHASE 03",
    title: "Building and Launching",
    body:
      "We build the solution, refine the experience, and prepare it to be used smoothly by your team and your clients.",
    tags: [],
  },
  {
    phase: "PHASE 04",
    title: "Improvement and Support",
    body:
      "After launch, we help you improve the system over time so it continues to support your growth as your business evolves.",
    tags: ["Ongoing Support", "Continuous Improvement"],
  },
];

export default function BusinessDigitalizationPage() {
  return (
    <div className="grid-bg">
      <section className="border-b border-line">
        <div className="container-shell grid gap-14 py-20 md:grid-cols-[1fr_0.9fr] md:items-center md:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex border border-rust px-3 py-1 text-[0.74rem] uppercase tracking-[0.22em] text-rust">
              Business Digital Growth
            </span>
            <h1 className="mt-8 text-[clamp(2.9rem,5.4vw,4.9rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-foreground">
              We help businesses move from manual work to clear digital systems.
            </h1>
            <p className="mt-6 max-w-2xl text-[1.06rem] leading-9 text-ink-soft">
              If your business depends on spreadsheets, scattered tools, or slow manual
              follow-up, we help you replace that with simpler workflows, better
              visibility, and stronger digital support.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="stitch-button-primary">
                Book A Consultation
              </Link>
              <Link href="/case-studies" className="stitch-button-secondary">
                See Our Approach
              </Link>
            </div>
          </div>

          <div className="stitch-frame p-2">
            <div className="relative aspect-square overflow-hidden border border-line">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwAwhYIojKcqSdULYhgiPa8kT4nBQk3s7BjTJSRwL0yBXrQwvb-ZiX-9dk7rnrExFIBtProIZrjE7pPiCvJ5nPvlbEiyMEIorUK5dCbgXty78Sdsk8EgMdVoFrlVhdbuQIgviE5xQc6Wjx2azFgQPYfAYa-_Xg0u8L2k1BFHcUeRm5FR5aVY-4DrlNDiTYM_lEKJg45O0KwxFFzAtawkxPnUlPrEUmGaSbKKS6r6FvxyvAYxM90Jv1-G84waqupzYDTvTOfOIed6Il"
                alt="Architectural systems visualization"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-20 md:py-24">
        <div className="max-w-3xl">
          <h2 className="inline-block border-b-2 border-teal pb-2 text-[clamp(2rem,4vw,3rem)] font-semibold tracking-[-0.05em] text-foreground">
            How We Work With You
          </h2>
          <p className="mt-5 max-w-2xl text-[1rem] leading-8 text-ink-soft">
            We keep the process simple, clear, and focused on business value from the
            first discussion to the final launch.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <article className="stitch-card md:col-span-2 p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="text-[0.74rem] uppercase tracking-[0.16em] text-rust">
                {processCards[0].phase}
              </span>
              <div className="grid h-8 w-8 place-items-center border border-line">1</div>
            </div>
            <h3 className="mt-5 text-[2rem] font-medium tracking-[-0.04em] text-foreground">
              {processCards[0].title}
            </h3>
            <p className="mt-4 text-[1rem] leading-8 text-ink-soft">{processCards[0].body}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {processCards[0].tags.map((tag) => (
                <span key={tag} className="border border-line px-3 py-2 text-[0.7rem] uppercase tracking-[0.12em]">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          <article className="stitch-card p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="text-[0.74rem] uppercase tracking-[0.16em] text-sand">
                {processCards[1].phase}
              </span>
              <div className="grid h-8 w-8 place-items-center border border-line">2</div>
            </div>
            <h3 className="mt-5 text-[2rem] font-medium tracking-[-0.04em] text-foreground">
              {processCards[1].title}
            </h3>
            <p className="mt-4 text-[1rem] leading-8 text-ink-soft">{processCards[1].body}</p>
            <div className="mt-8">
              <span className="border border-line px-3 py-2 text-[0.7rem] uppercase tracking-[0.12em]">
                {processCards[1].tags[0]}
              </span>
            </div>
          </article>

          <article className="stitch-card p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="text-[0.74rem] uppercase tracking-[0.16em] text-teal">
                {processCards[2].phase}
              </span>
              <div className="grid h-8 w-8 place-items-center border border-line">3</div>
            </div>
            <h3 className="mt-5 text-[2rem] font-medium tracking-[-0.04em] text-foreground">
              {processCards[2].title}
            </h3>
            <p className="mt-4 text-[1rem] leading-8 text-ink-soft">{processCards[2].body}</p>
          </article>

          <article className="stitch-card md:col-span-2 p-6">
            <div className="flex items-center justify-between border-b border-line pb-4">
              <span className="text-[0.74rem] uppercase tracking-[0.16em] text-rust">
                {processCards[3].phase}
              </span>
              <div className="grid h-8 w-8 place-items-center border border-line">4</div>
            </div>
            <h3 className="mt-5 text-[2rem] font-medium tracking-[-0.04em] text-foreground">
              {processCards[3].title}
            </h3>
            <p className="mt-4 text-[1rem] leading-8 text-ink-soft">{processCards[3].body}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {processCards[3].tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-line px-3 py-2 text-[0.7rem] uppercase tracking-[0.12em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="container-shell pb-24">
        <div className="stitch-card flex flex-col items-start justify-between gap-8 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] font-semibold tracking-[-0.05em] text-foreground">
              Ready to improve how your business works?
            </h2>
            <p className="mt-3 max-w-2xl text-[1rem] leading-8 text-ink-soft">
              Let us help you identify the right digital steps for your company and turn
              them into a clear, practical project.
            </p>
          </div>
          <Link href="/contact" className="stitch-button-primary">
            Start The Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
