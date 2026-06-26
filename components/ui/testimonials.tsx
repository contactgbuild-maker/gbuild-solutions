"use client";

import Image from "next/image";

type TestimonialItem = {
  id: number;
  quote: string;
  name: string;
  role: string;
  imageSrc: string;
};

type TestimonialSectionProps = {
  title: string;
  subtitle: string;
  testimonials: TestimonialItem[];
};

export function TestimonialSection({
  title,
  subtitle,
  testimonials,
}: TestimonialSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_2px_2px,rgba(64,143,158,0.55)_1px,transparent_0)] [background-size:22px_22px]" />
      <div className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[clamp(2rem,4vw,3.3rem)] font-semibold tracking-[-0.05em] text-foreground">
            {title}
          </h2>
          <p className="mt-4 text-[1rem] leading-8 text-ink-soft">{subtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="stitch-card group overflow-hidden border border-line bg-background/90 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="grid md:grid-cols-[220px_1fr]">
                <div className="relative min-h-[280px] border-b border-line md:min-h-full md:border-b-0 md:border-r">
                  <Image
                    src={testimonial.imageSrc}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 220px"
                  />
                </div>

                <div className="flex flex-col justify-between p-6 md:p-8">
                  <div>
                    <div className="inline-flex rounded-full border border-teal/20 bg-teal/10 px-3 py-1 text-[0.68rem] uppercase tracking-[0.16em] text-teal">
                      Team Member
                    </div>
                    <p className="mt-6 text-[1.05rem] leading-8 text-ink-soft">
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-line pt-5">
                    <h3 className="text-[1.35rem] font-medium tracking-[-0.04em] text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="mt-1 text-sm uppercase tracking-[0.12em] text-teal">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
