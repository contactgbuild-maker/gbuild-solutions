"use client";

import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function GlobalScrollMotion() {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      const root = document.querySelector("main[data-scroll-root]");
      if (!root) return;

      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray<HTMLElement>("section");
        sections.forEach((section) => {
          const sectionHeading = section.querySelectorAll("h1, h2, h3, p");

          gsap.fromTo(
            section,
            { opacity: 0, y: 60 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
              },
            },
          );

          if (sectionHeading.length) {
            gsap.fromTo(
              sectionHeading,
              { opacity: 0, y: 28 },
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power3.out",
                stagger: 0.08,
                scrollTrigger: {
                  trigger: section,
                  start: "top 76%",
                },
              },
            );
          }
        });

        const cards = gsap.utils.toArray<HTMLElement>(".stitch-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 72, scale: 0.96 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 86%",
              },
            },
          );
        });

        const staggerGroups = gsap.utils.toArray<HTMLElement>("[data-gsap-stagger]");
        staggerGroups.forEach((group) => {
          const children = Array.from(group.children) as HTMLElement[];
          if (!children.length) return;

          gsap.fromTo(
            children,
            { opacity: 0, y: 38 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              stagger: 0.12,
              scrollTrigger: {
                trigger: group,
                start: "top 82%",
              },
            },
          );
        });

        const media = gsap.utils.toArray<HTMLElement>("[data-gsap-media]");
        media.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0.3, scale: 0.88, y: 30 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );
        });

        const parallax = gsap.utils.toArray<HTMLElement>("[data-gsap-parallax]");
        parallax.forEach((item) => {
          gsap.fromTo(
            item,
            { yPercent: -6 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            },
          );
        });
      }, root);

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        ctx.revert();
      };
    },
    { dependencies: [pathname] },
  );

  return null;
}
