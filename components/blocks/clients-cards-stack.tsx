"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type ClientItem = {
  name: string;
  website: string;
  logo: string;
  width: number;
  height: number;
  summary: string;
  tag: string;
  accent: string;
  textLogo?: boolean;
};

type ClientsCardsStackProps = {
  clients: ClientItem[];
};

export function ClientsCardsStack({ clients }: ClientsCardsStackProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const glowStyle = useMemo(
    () => ({
      transform: `translate3d(${pointer.x * 26}px, ${pointer.y * 18}px, 0)`,
    }),
    [pointer.x, pointer.y],
  );

  const beamStyle = useMemo(
    () => ({
      transform: `translate3d(${pointer.x * -22}px, ${pointer.y * 16}px, 0) rotate(-12deg)`,
    }),
    [pointer.x, pointer.y],
  );

  const orderedClients = useMemo(
    () => clients.map((_, index) => clients[(activeIndex + index) % clients.length]),
    [activeIndex, clients],
  );

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const bounds = rootRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setPointer({ x, y });
  };

  const handleLeave = () => {
    setPointer({ x: 0, y: 0 });
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % clients.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + clients.length) % clients.length);
  };

  return (
    <section
      ref={rootRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="relative overflow-hidden px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(69,164,180,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(211,125,59,0.12),transparent_24%),linear-gradient(180deg,#040406_0%,#050507_45%,#07080b_100%)]" />
      <div
        className="absolute left-[-10%] top-24 h-40 w-[56%] rounded-full border border-white/10 bg-[linear-gradient(90deg,rgba(96,203,223,0.12),rgba(255,255,255,0.02))] blur-[1px] transition-transform duration-300 ease-out"
        style={beamStyle}
      />
      <div
        className="absolute right-[8%] top-[20%] h-36 w-36 rounded-full bg-[#59bfd4]/10 blur-3xl transition-transform duration-300 ease-out"
        style={glowStyle}
      />
      <div
        className="absolute bottom-[10%] left-[10%] h-40 w-40 rounded-full bg-[#ca7a3a]/10 blur-3xl transition-transform duration-300 ease-out"
        style={{ transform: `translate3d(${pointer.x * -18}px, ${pointer.y * 18}px, 0)` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:68px_68px] opacity-[0.18]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="text-[0.78rem] uppercase tracking-[0.24em] text-white/55">
          Clients We Worked With
        </p>
        <h2 className="mt-4 text-[clamp(2.4rem,5vw,4rem)] font-semibold tracking-[-0.06em] text-white">
          Real businesses, real websites, real delivery.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[1rem] leading-8 text-white/58">
          اسحب البطاقة يمينا أو يسارا لتتنقل بين الشركات التي عملنا معها.
        </p>
      </div>

      <div className="relative z-10 mx-auto mt-8 flex max-w-5xl flex-wrap items-center justify-center gap-3 text-sm text-white/40">
        {clients.map((client, index) => (
          <button
            key={client.name}
            type="button"
            onClick={() => {
              setDirection(index >= activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
            className={`rounded-full border px-4 py-2 transition ${
              index === activeIndex
                ? "border-white/30 bg-white/[0.1] text-white"
                : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06] hover:text-white/78"
            }`}
          >
            {client.name}
          </button>
        ))}
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative flex min-h-[620px] items-center justify-center">
            {orderedClients.slice(1, 4).reverse().map((client, depth) => (
              <div
                key={`${client.name}-backdrop`}
                className="absolute w-full max-w-[470px] rounded-[34px] border border-white/10 bg-[rgba(12,12,16,0.42)] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-md"
                style={{
                  transform: `translate3d(${depth * 16}px, ${depth * 26 + 22}px, 0) scale(${0.95 - depth * 0.05})`,
                  opacity: 0.32 - depth * 0.07,
                  zIndex: 1 + depth,
                }}
              >
                <div className="h-[420px]" />
              </div>
            ))}

            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <FrontCard
                key={orderedClients[0].name}
                client={orderedClients[0]}
                direction={direction}
                pointer={pointer}
                onNext={goNext}
                onPrev={goPrev}
              />
            </AnimatePresence>
          </div>

          <div className="max-w-xl">
            <p className="text-[0.78rem] uppercase tracking-[0.24em] text-white/45">
              Client Showcase
            </p>
            <h3 className="mt-4 text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-white">
              Swipe through the brands we helped build online.
            </h3>
            <p className="mt-6 text-[1rem] leading-8 text-white/60">
              Each card opens a real client website. The interaction is now direct:
              drag the main card left or right, or use the controls below.
            </p>

            <div className="mt-8 grid gap-4 text-sm text-white/56">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-4">
                Active client: <span className="text-white">{orderedClients[0].name}</span>
              </div>
              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] px-5 py-4">
                Website: <span className="text-white/80">{orderedClients[0].website}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex items-center rounded-full border border-white/14 bg-white/[0.05] px-5 py-3 text-sm text-white transition hover:bg-white/[0.1]"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center rounded-full border border-white/14 bg-white/[0.05] px-5 py-3 text-sm text-white transition hover:bg-white/[0.1]"
              >
                Next
              </button>
              <Link
                href={orderedClients[0].website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[#59bfd4]/30 bg-[#59bfd4]/14 px-5 py-3 text-sm text-white transition hover:bg-[#59bfd4]/20"
              >
                Visit Active Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type FrontCardProps = {
  client: ClientItem;
  direction: 1 | -1;
  pointer: { x: number; y: number };
  onNext: () => void;
  onPrev: () => void;
};

function FrontCard({ client, direction, pointer, onNext, onPrev }: FrontCardProps) {
  return (
    <motion.article
      custom={direction}
      initial={{ opacity: 0, x: direction > 0 ? 120 : -120, rotate: direction > 0 ? 8 : -8 }}
      animate={{
        opacity: 1,
        x: pointer.x * 10,
        y: pointer.y * 8,
        rotate: pointer.x * 4,
      }}
      exit={{ opacity: 0, x: direction > 0 ? -160 : 160, rotate: direction > 0 ? -10 : 10 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.18}
      onDragEnd={(_, info) => {
        if (info.offset.x < -90) onNext();
        if (info.offset.x > 90) onPrev();
      }}
      className="relative z-10 flex h-[440px] w-full max-w-[470px] cursor-grab flex-col justify-between overflow-hidden rounded-[34px] border border-white/12 bg-[rgba(12,12,16,0.82)] p-7 text-white shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl active:cursor-grabbing"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(89,191,212,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(202,122,58,0.13),transparent_24%)]" />
      <div>
        <div className="relative z-10 flex items-start justify-between gap-4">
          <div className={`rounded-full px-3 py-1 text-[0.72rem] uppercase tracking-[0.18em] ${client.accent}`}>
            {client.tag}
          </div>
          <div className="text-right text-[0.74rem] uppercase tracking-[0.16em] text-white/36">
            Drag Me
          </div>
        </div>

        <div className="relative z-10 mt-8 flex min-h-24 items-center justify-center rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-6">
          {client.textLogo ? (
            <span className="text-center text-[2.25rem] font-semibold tracking-[-0.06em] text-white">
              {client.name}
            </span>
          ) : (
            <Image
              src={client.logo}
              alt={client.name}
              width={client.width}
              height={client.height}
              className="h-16 w-auto object-contain"
            />
          )}
        </div>

        <h3 className="relative z-10 mt-8 text-[2rem] font-semibold tracking-[-0.05em] text-white">
          {client.name}
        </h3>
        <p className="relative z-10 mt-4 text-[1rem] leading-8 text-white/60">
          {client.summary}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
        <span className="truncate text-sm text-white/48">{client.website}</span>
        <Link
          href={client.website}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center rounded-full border border-white/14 bg-white/[0.05] px-4 py-2 text-sm text-white transition hover:bg-white/[0.1]"
        >
          Visit Site
        </Link>
      </div>
    </motion.article>
  );
}
