'use client'

import { useMemo, useRef, useState } from "react";
import Image from "next/image";

type HeroLogo = {
  name: string;
  src: string;
  width: number;
  height: number;
  className?: string;
};

type HeroGeometricProps = {
  badge: string;
  title1: string;
  title2: string;
  description?: string;
  logos: HeroLogo[];
};

export function HeroGeometric({
  badge,
  title1,
  title2,
  description,
  logos,
}: HeroGeometricProps) {
  const topLogos = logos.slice(0, 2);
  const sideLogos = logos.slice(2);
  const rootRef = useRef<HTMLElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0, active: false });

  const accentStyle = useMemo(
    () => ({
      transform: `translate3d(${pointer.x * 18}px, ${pointer.y * 18}px, 0)`,
    }),
    [pointer.x, pointer.y],
  );

  const beamStyle = useMemo(
    () => ({
      transform: `translate3d(${pointer.x * -24}px, ${pointer.y * 10}px, 0) rotate(12deg)`,
    }),
    [pointer.x, pointer.y],
  );

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = rootRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    setPointer({ x, y, active: true });
  };

  const handleLeave = () => {
    setPointer({ x: 0, y: 0, active: false });
  };

  return (
    <section
      ref={rootRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative overflow-hidden border-y border-white/8 bg-[#050507] px-6 py-24 text-white sm:px-8 lg:px-14 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(64,143,158,0.14),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(185,113,55,0.12),transparent_24%)]" />
      <div
        className="absolute left-[-12%] top-[24%] h-32 w-[58%] rounded-full border border-white/12 bg-[linear-gradient(90deg,rgba(140,144,255,0.16),rgba(255,255,255,0.04))] blur-[0.5px] transition-transform duration-300 ease-out"
        style={beamStyle}
      />
      <div
        className="absolute bottom-[-8%] right-[-10%] h-36 w-[34%] rotate-[-18deg] rounded-full border border-white/10 bg-[linear-gradient(90deg,rgba(255,189,100,0.12),rgba(255,255,255,0.02))] transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${pointer.x * 20}px, ${pointer.y * -14}px, 0) rotate(-18deg)` }}
      />
      <div
        className="absolute left-[18%] top-[14%] h-28 w-28 rounded-full bg-[#6c7cff]/10 blur-3xl transition-transform duration-300 ease-out"
        style={accentStyle}
      />
      <div
        className="absolute bottom-[18%] right-[20%] h-28 w-28 rounded-full bg-[#ff9eb2]/10 blur-3xl transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${pointer.x * -16}px, ${pointer.y * 18}px, 0)` }}
      />

      {topLogos.map((logo, index) => (
        <div
          key={logo.name}
          className={`absolute hidden rounded-full border border-white/12 bg-white/[0.05] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-transform duration-300 ease-out lg:flex ${
            index === 0
              ? "left-[20%] top-8 rotate-[-28deg]"
              : "right-[16%] top-10 rotate-[18deg]"
          }`}
          style={{
            transform:
              index === 0
                ? `translate3d(${pointer.x * -18}px, ${pointer.y * 14}px, 0) rotate(-28deg)`
                : `translate3d(${pointer.x * 16}px, ${pointer.y * -12}px, 0) rotate(18deg)`,
          }}
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            className={`h-8 w-auto object-contain opacity-90 ${logo.className ?? ""}`}
          />
        </div>
      ))}

      {sideLogos.map((logo, index) => (
        <div
          key={logo.name}
          className={`absolute hidden items-center justify-center rounded-[26px] border border-white/12 bg-white/[0.05] px-5 py-4 shadow-[0_18px_48px_rgba(0,0,0,0.22)] backdrop-blur-md transition-transform duration-300 ease-out md:flex ${
            index === 0
              ? "left-[8%] top-[62%] rotate-[-10deg]"
              : index === 1
                ? "right-[9%] top-[58%] rotate-[8deg]"
                : "right-[18%] bottom-10 rotate-[-6deg]"
          }`}
          style={{
            transform:
              index === 0
                ? `translate3d(${pointer.x * 20}px, ${pointer.y * -16}px, 0) rotate(-10deg)`
                : index === 1
                  ? `translate3d(${pointer.x * -16}px, ${pointer.y * 14}px, 0) rotate(8deg)`
                  : `translate3d(${pointer.x * 12}px, ${pointer.y * 18}px, 0) rotate(-6deg)`,
          }}
        >
          <Image
            src={logo.src}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            className={`h-9 w-auto object-contain opacity-90 ${logo.className ?? ""}`}
          />
        </div>
      ))}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-md">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b8a]" />
          <span className="text-[0.92rem] font-medium tracking-[0.02em] text-white/72">
            {badge}
          </span>
        </div>

        <h2 className="mt-10 text-[clamp(3.1rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white">
          {title1}
        </h2>
        <h3 className="bg-[linear-gradient(90deg,#b8c0ff_0%,#e5d9df_48%,#ff9eb2_100%)] bg-clip-text text-[clamp(3.1rem,8vw,7rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-transparent">
          {title2}
        </h3>

        {description ? (
          <p className="mx-auto mt-8 max-w-2xl text-[1.04rem] leading-8 text-white/58">
            {description}
          </p>
        ) : null}

        <div className="mx-auto mt-10 h-px w-full max-w-3xl bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)]" />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:hidden">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center rounded-[22px] border border-white/12 bg-white/[0.05] px-5 py-4 backdrop-blur-md"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className={`h-8 w-auto object-contain opacity-90 ${logo.className ?? ""}`}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
