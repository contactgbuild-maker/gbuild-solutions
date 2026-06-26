import Link from "next/link";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { ClientsCardsStack } from "@/components/blocks/clients-cards-stack";
import { FadeIn, HoverLift, StaggerGroup, StaggerItem } from "@/components/ui/framer-effects";

const trustLogos = [
  {
    name: "Algeria Venture",
    src: "https://aventure.dz/av-tab-logo.webp",
    className: "h-16 w-auto rounded-md",
    width: 64,
    height: 64,
  },
  {
    name: "ARLEM",
    src: "https://www.cor.europa.eu/sites/default/files/styles/hero_left_right_lg/public/2024-07/arlem_logo_1000x1000.png.webp",
    className: "h-20 w-auto",
    width: 228,
    height: 92,
  },
  {
    name: "ICEX",
    src: "/trusted-by/icex-logo.png",
    className: "h-16 w-auto",
    width: 280,
    height: 112,
  },
  {
    name: "GIZ",
    src: "https://www.giz.de/themes/custom/dreist/build/giz-logo-with-claim.svg",
    className: "h-14 w-auto",
    width: 252,
    height: 56,
  },
  {
    name: "Committee of the Regions",
    src: "https://www.cor.europa.eu/sites/default/files/styles/social_media_image/public/2024-07/Default_CoR.png.webp",
    className: "h-20 w-auto",
    width: 228,
    height: 92,
  },
];

const clientLogos = [
  {
    name: "Voltagaz",
    website: "https://voltagaz.com/",
    logo: "https://voltagaz.com/vite.svg",
    width: 52,
    height: 52,
    summary:
      "Digital support for a business-facing energy brand with a stronger online presence and clearer presentation.",
    tag: "Website",
    accent: "bg-[#1d4ed8]/18 text-[#bcd0ff]",
    textLogo: true,
  },
  {
    name: "Gardens of Babylon",
    website: "https://gardenofbabylon.tech/",
    logo: "https://gardenofbabylon.tech/assets/gb-logo-light-4cpS7k6Q.svg",
    width: 230,
    height: 56,
    summary:
      "AgriTech platform and digital experience work for intelligent irrigation, vertical farming, and operations systems.",
    tag: "AgriTech",
    accent: "bg-[#1b6e57]/18 text-[#98f0cd]",
  },
  {
    name: "Cellular Voyages & Immo",
    website: "https://www.cellularvoyages-immo.fr/fr",
    logo: "https://www.cellularvoyages-immo.fr/logo-navy.svg",
    width: 230,
    height: 64,
    summary:
      "Travel and service website work focused on clearer offers, trust, conversion, and client-facing presentation.",
    tag: "Travel",
    accent: "bg-[#c8a96e]/18 text-[#f1dfb6]",
  },
  {
    name: "STA-PRA",
    website: "https://www.sta-pra.com/",
    logo: "https://www.sta-pra.com/logo/logo.jpg",
    width: 88,
    height: 88,
    summary:
      "Platform and product-facing support for a jobs and internships experience designed for accessibility and growth.",
    tag: "Platform",
    accent: "bg-[#2557a7]/18 text-[#c3d8ff]",
  },
  {
    name: "AirCrop",
    website: "https://aircrop.io/",
    logo: "https://aircrop.io/assets/logo.png",
    width: 180,
    height: 64,
    summary:
      "Brand and web support for a drone and AI-powered agriculture business serving modern farming operations.",
    tag: "AI & Drone",
    accent: "bg-[#018d6b]/18 text-[#9cf0db]",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-line bg-dark text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-gsap-parallax
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKHOWU0RPpvTfwCBgL3TT-zclw6fkpKDssO7y7yRxlHJS068wKlIpU_viycFnfHOrP7Bd6daJoiTh-J1ZiPAWP5Gn6Wpqa0qQWzUhEnz3KerNJTyoYSrceJgMPQyHuZwApGV2v7uRHnPzxsViTJQ2_QvZQEV6-Wx4OnOl0OzRADEnjY2iZ2gjUcRooO6fF13xyGHE_jW9Qi5Il4wMlNLHMFGG0fdeBxl4v9eNmodEOEtHY522tt7p2UqQjkaiAFVyDZcQpq9teUZ3O')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,77,78,0.68),rgba(20,77,78,0.38),rgba(20,77,78,0.12))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,77,78,0.06),rgba(20,77,78,0.48))]" />
        <Spotlight className="-top-32 left-0 md:left-[48%] md:-top-12" fill="white" />

        <div className="container-shell relative py-20 md:py-24" data-gsap-stagger>
          <div className="grid gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <StaggerGroup className="max-w-2xl">
              <StaggerItem>
                <p className="inline-flex border border-sand/40 bg-sand/16 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-sand">
                  Digital Solutions For Growing Businesses
                </p>
              </StaggerItem>
              <StaggerItem>
                <h1 className="mt-6 max-w-xl text-[clamp(3rem,6vw,4.9rem)] font-bold leading-[0.95] tracking-[-0.05em]">
                  We build websites, systems, and automation that help your business grow.
                </h1>
              </StaggerItem>
              <StaggerItem>
                <p className="mt-6 max-w-lg text-[1.04rem] leading-8 text-white/78">
                  If your business is losing time because of manual work, scattered tools,
                  or an outdated website, we help you turn that into a clear digital system
                  that saves time and supports sales.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <HoverLift>
                    <Link href="/contact" className="stitch-button-primary">
                      Start Your Project
                    </Link>
                  </HoverLift>
                  <HoverLift>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center border border-white/30 bg-white/8 px-6 py-3 text-sm text-white transition-colors hover:bg-white/14"
                    >
                      Explore Services
                    </Link>
                  </HoverLift>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-12 flex items-center gap-4 border-t border-white/20 pt-8">
                  <div className="flex -space-x-3">
                    {["AWS", "GC", "AZR"].map((item) => (
                      <HoverLift key={item}>
                        <div className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-dark text-[0.62rem] text-white">
                          {item}
                        </div>
                      </HoverLift>
                    ))}
                  </div>
                  <p className="text-sm text-white/78">
                    Trusted support for businesses that want practical digital progress
                  </p>
                </div>
              </StaggerItem>
            </StaggerGroup>

            <FadeIn className="relative z-10" data-gsap-media>
              <HoverLift>
                <div className="relative overflow-hidden rounded-[28px] border border-white/12 bg-black/30 shadow-[0_24px_80px_rgba(0,0,0,0.34)] backdrop-blur-sm">
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-[linear-gradient(180deg,rgba(13,23,25,0.88),rgba(13,23,25,0))]" />
                  <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-[linear-gradient(90deg,rgba(13,23,25,0.78),rgba(13,23,25,0))]" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-[linear-gradient(270deg,rgba(13,23,25,0.78),rgba(13,23,25,0))]" />
                  <div className="relative h-[360px] md:h-[460px]">
                    <SplineScene
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </HoverLift>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="container-shell py-24">
        <FadeIn className="max-w-3xl">
          <p className="text-[0.74rem] uppercase tracking-[0.22em] text-teal">
            What We Help You With
          </p>
          <h2 className="mt-5 max-w-3xl text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-foreground">
            Clear digital services that solve real business problems.
          </h2>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-12" data-gsap-stagger>
          <HoverLift className="md:col-span-8">
            <article className="stitch-card h-full p-8">
              <div className="flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center bg-teal/16 text-teal">
                  AI
                </div>
                <span className="text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                  Faster Workflows
                </span>
              </div>

              <h3 className="mt-16 text-[2rem] font-medium tracking-[-0.04em] text-foreground">
                AI and Smart Automation
              </h3>
              <p className="mt-4 max-w-2xl text-[1rem] leading-8 text-ink-soft">
                We use AI and automation to reduce manual work, speed up repetitive tasks,
                and help your team focus on higher-value work instead of routine follow-up.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <div className="flex flex-wrap gap-2 text-[0.68rem] uppercase tracking-[0.12em]">
                  {["Save Time", "Reduce Errors", "Work Faster"].map((item) => (
                    <span key={item} className="border border-line px-2 py-1 text-foreground">
                      {item}
                    </span>
                  ))}
                </div>
                <Link href="/services" className="text-sm text-teal hover:underline">
                  Learn More
                </Link>
              </div>
            </article>
          </HoverLift>

          <HoverLift className="md:col-span-4">
            <article className="stitch-card h-full p-8">
              <div className="grid h-12 w-12 place-items-center border border-line text-foreground">
                CS
              </div>
              <h3 className="mt-10 text-[1.9rem] font-medium tracking-[-0.04em] text-foreground">
                Business Systems Built For You
              </h3>
              <p className="mt-4 text-[1rem] leading-8 text-ink-soft">
                We create internal tools, client portals, dashboards, and custom systems
                designed around the way your business actually works.
              </p>
              <Link href="/services" className="mt-10 inline-block text-sm text-teal hover:underline">
                See Service Details
              </Link>
            </article>
          </HoverLift>

          <HoverLift className="md:col-span-4">
            <article className="stitch-card h-full p-8">
              <div className="grid h-12 w-12 place-items-center border border-line text-foreground">
                DE
              </div>
              <h3 className="mt-10 text-[1.9rem] font-medium tracking-[-0.04em] text-foreground">
                Better Follow-Up and Better Visibility
              </h3>
              <p className="mt-4 text-[1rem] leading-8 text-ink-soft">
                We organize your data, customer follow-up, and reporting so you can see
                what is happening in the business without jumping between disconnected
                tools.
              </p>
            </article>
          </HoverLift>

          <HoverLift className="md:col-span-8">
            <article className="stitch-card grid h-full gap-8 p-8 md:grid-cols-[1fr_auto_1fr]">
              <div>
                <h3 className="text-[1.9rem] font-medium tracking-[-0.04em] text-foreground">
                  Why Businesses Choose Us
                </h3>
                <div className="mt-8 grid gap-4">
                  {[
                    ["Clarity", "You know what will be built", "w-[96%]", "bg-teal"],
                    ["Speed", "Faster delivery and less confusion", "w-[84%]", "bg-sand"],
                    ["Support", "Systems you can keep using", "w-[90%]", "bg-foreground"],
                  ].map(([label, value, width, color]) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>{label}</span>
                        <span className="text-teal">{value}</span>
                      </div>
                      <div className="h-2 bg-teal/12">
                        <div className={`h-2 ${width} ${color}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden w-px bg-line md:block" />
              <div className="flex items-center">
                <div>
                  <p className="border-l-2 border-sand pl-4 text-[1rem] italic leading-8 text-ink-soft">
                    We do not build digital products just to look impressive. We build
                    tools and experiences that make business operations simpler and more
                    profitable.
                  </p>
                  <p className="mt-6 text-sm text-muted">GBuild Solutions Approach</p>
                </div>
              </div>
            </article>
          </HoverLift>
        </div>
      </section>

      <section className="border-y border-line">
        <div className="container-shell grid gap-14 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto aspect-square w-full max-w-md" data-gsap-media>
            <div className="absolute inset-x-8 top-6 bottom-14 border border-line bg-background p-6">
              <div className="flex items-center justify-between border-b border-line pb-4">
                <span className="text-[0.72rem] uppercase tracking-[0.16em] text-muted">
                  Protocol Alpha
                </span>
                <span className="h-2 w-2 rounded-full bg-teal" />
              </div>
              <div className="mt-6 flex h-[72%] items-center justify-center border border-dashed border-line">
                <span className="text-sm uppercase tracking-[0.16em] text-muted">
                  System Grid
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-56 border border-line bg-background p-6 shadow-[0_12px_28px_rgba(20,77,78,0.08)]">
              <p className="border-b border-line pb-4 text-[0.72rem] uppercase tracking-[0.16em] text-rust">
                Execution Node
              </p>
              <div className="mt-6 grid gap-3">
                <div className="h-2 w-full bg-teal/10" />
                <div className="h-2 w-3/4 bg-teal/10" />
                <div className="h-2 w-5/6 bg-teal/10" />
                <div className="mt-4 h-2 w-1/2 bg-teal/20" />
              </div>
            </div>
          </div>

          <StaggerGroup className="max-w-2xl" data-gsap-stagger>
            <p className="text-[0.74rem] uppercase tracking-[0.22em] text-teal">
              How We Work
            </p>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-foreground">
              Simple process, clear communication, real outcomes.
            </h2>
            <p className="mt-6 text-[1.04rem] leading-8 text-ink-soft">
              We start by understanding your business, your team, and your current
              challenges. Then we recommend the right digital solution without making
              the process confusing or full of unnecessary technical language.
            </p>
            <div className="mt-8 grid gap-5">
              {[
                [
                  "Clear Project Scope",
                  "You understand what we are building, why it matters, and what result to expect.",
                ],
                [
                  "Business-Friendly Communication",
                  "We explain services in practical terms so business owners can make confident decisions.",
                ],
              ].map(([title, body]) => (
                <div key={title} className="flex gap-4">
                  <div className="mt-1 grid h-6 w-6 place-items-center border border-line bg-teal/10 text-[0.72rem] text-teal">
                    +
                  </div>
                  <div>
                    <h3 className="text-[1rem] font-medium text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-7 text-ink-soft">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerGroup>
        </div>
      </section>

      <section className="py-20">
        <HeroGeometric
          badge="Trusted by"
          title1="Trusted"
          title2="Partners"
          description="Recognized by entrepreneurship programs, regional institutions, and international development organizations."
          logos={trustLogos}
        />
      </section>

      <section className="border-t border-white/8 bg-[#050507]">
        <ClientsCardsStack clients={clientLogos} />
      </section>
    </div>
  );
}
