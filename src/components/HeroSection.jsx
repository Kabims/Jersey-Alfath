import React from 'react';
import {
  ArrowDown,
  CalendarClock,
  Sparkles,
  ZoomIn,
} from 'lucide-react';
import { siteMetadata } from '../data/jerseys';

export default function HeroSection({ onOpenShowcase }) {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 pt-6 pb-10 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
      {/* Subtle Atmospheric Glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-red-600/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-64 w-64 rounded-full bg-amber-400/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-x-10 lg:gap-y-6">
          {/* Block 1: Badge + Headline */}
          <div className="min-w-0 lg:col-span-7 lg:col-start-1 lg:row-start-1">
            {/* Open PO Pill Badge (No Countdown Timer) */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-600/25 bg-red-50 px-3 py-1 shadow-sm sm:px-3.5 sm:py-1.5">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600 sm:h-2.5 sm:w-2.5" />
              </span>
              <span className="text-[10px] font-extrabold tracking-wider text-red-700 sm:text-xs">
                {siteMetadata.heroBadge}
              </span>
            </div>

            {/* Bold Responsive Headline */}
            <h1 className="mt-3.5 font-display text-2xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:mt-4 sm:text-4xl lg:text-5xl">
              Tampil Sporty &amp; Beridentitas dengan{' '}
              <span className="text-red-600">Jersey Resmi</span> UKM Al-Fath Universitas Telkom
            </h1>
          </div>

          {/* Block 2: Featured 1:1 Jersey Preview Card */}
          <div className="relative mx-auto w-full min-w-0 max-w-sm sm:max-w-md lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-2 hidden rotate-2 rounded-3xl border border-zinc-200 bg-white/70 shadow-sm sm:block lg:-inset-3"
            />

            <div className="relative rounded-2xl border border-zinc-200 bg-white p-3 shadow-card sm:rounded-3xl sm:p-4 lg:animate-float-slow lg:shadow-card-hover">
              {/* Top Label Strip */}
              <div className="mb-2.5 flex flex-wrap items-center justify-between gap-2 px-1">
                <span className="inline-flex items-center gap-1 rounded-full bg-zinc-900 px-2.5 py-1 text-[10px] font-bold text-white sm:text-[11px]">
                  <Sparkles className="h-3 w-3 text-amber-400" />
                  FEATURED 1:1 MOCKUP
                </span>
                <span className="font-mono text-xs font-bold text-red-600">@alfathtelu</span>
              </div>

              {/* 1:1 Square Mockup Container */}
              <button
                type="button"
                onClick={onOpenShowcase}
                className="group relative block w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-100 transition-transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 sm:rounded-2xl"
                aria-label="Perbesar mockup jersey unggulan"
              >
                <div className="aspect-square w-full overflow-hidden">
                  <img
                    src={siteMetadata.heroShowcaseImage}
                    alt="Preview Jersey Resmi UKM Al-Fath Universitas Telkom"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Zoom Hint Overlay */}
                <div className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-zinc-950/65 via-transparent to-transparent p-3 sm:p-4">
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-amber-300 sm:text-xs">
                      Depan • Belakang • Celana
                    </p>
                    <p className="text-xs font-extrabold text-white sm:text-sm">
                      Official Al-Fath Jersey Set
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold text-zinc-900 shadow-md sm:px-3 sm:py-1.5">
                    <ZoomIn className="h-4 w-4 text-red-600" />
                    <span>Perbesar Gambar</span>
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Block 3: CTAs */}
          <div className="min-w-0 lg:col-span-7 lg:col-start-1 lg:row-start-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#katalog"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-red-700 active:scale-[0.98] sm:w-auto sm:text-base"
              >
                <span>Lihat Katalog Jersey</span>
                <ArrowDown className="h-4 w-4 shrink-0" />
              </a>

              <a
                href="#timeline"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-bold text-zinc-800 shadow-sm transition-all duration-200 hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.98] sm:w-auto sm:text-base"
              >
                <CalendarClock className="h-4 w-4 shrink-0 text-red-600" />
                <span>Cek Timeline PO</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
