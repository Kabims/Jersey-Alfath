import React, { useState } from 'react';
import {
  Crown,
  ExternalLink,
  Flame,
  GraduationCap,
  Info,
  Layers,
  Ruler,
  Sparkles,
  Tag,
  ZoomIn,
} from 'lucide-react';
import { categories, categoryList } from '../data/jerseys';

const facultyBadgeColors = {
  FTE: 'bg-blue-700 text-white',
  FRI: 'bg-emerald-800 text-white',
  FIF: 'bg-amber-400 text-zinc-950',
  FEB: 'bg-sky-500 text-white',
  FKB: 'bg-purple-700 text-white',
  FIK: 'bg-orange-500 text-white',
  FIT: 'bg-green-500 text-white',
};

function CategoryHeaderSpecBanner({ category }) {
  const isPremium = category.id === 'premium';
  const isRunning = category.id === 'running';
  const Icon = isPremium ? Crown : isRunning ? Flame : GraduationCap;

  return (
    <div
      className={`rounded-2xl border p-5 shadow-card sm:rounded-3xl sm:p-7 ${
        isPremium
          ? 'border-amber-500/40 bg-gradient-to-br from-zinc-900 via-zinc-900 to-red-950 text-white'
          : 'border-zinc-200 bg-white text-zinc-900'
      }`}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider ${
                isPremium
                  ? 'border border-amber-400/40 bg-amber-400/15 text-amber-300'
                  : 'bg-red-600 text-white'
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              KATEGORI {category.number}
            </span>
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold ${
                isPremium
                  ? 'bg-white/10 text-zinc-200'
                  : 'border border-zinc-200 bg-[#FAF8F5] text-zinc-700'
              }`}
            >
              {category.editionLabel}
            </span>
          </div>

          <h3
            className={`mt-3 font-display text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl ${
              isPremium ? 'text-white' : 'text-zinc-900'
            }`}
          >
            {category.name}
          </h3>
        </div>

        {/* Prominent Category Price Badge */}
        <div
          className={`flex shrink-0 flex-col justify-center rounded-2xl border px-5 py-4 lg:min-w-[240px] ${
            isPremium
              ? 'border-amber-400/35 bg-white/10 backdrop-blur-sm'
              : 'border-zinc-200 bg-[#FAF8F5]'
          }`}
        >
          <span
            className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider ${
              isPremium ? 'text-amber-300' : 'text-zinc-500'
            }`}
          >
            <Tag className="h-3.5 w-3.5" />
            Harga Resmi PO
          </span>
          <div
            className={`mt-1 font-display text-2xl font-black tracking-tight sm:text-3xl ${
              isPremium ? 'text-amber-300' : 'text-red-600'
            }`}
          >
            {category.price}
          </div>
          <p
            className={`mt-0.5 text-xs font-medium ${
              isPremium ? 'text-zinc-300' : 'text-zinc-600'
            }`}
          >
            {category.priceNote}
          </p>
        </div>
      </div>

      {/* Form Info Note + Quick Size Chart Shortcut */}
      <div
        className={`mt-4 flex flex-col items-start justify-between gap-2.5 rounded-xl border px-3.5 py-2.5 text-xs font-semibold sm:flex-row sm:items-center sm:text-sm ${
          isPremium
            ? 'border-amber-400/30 bg-amber-400/10 text-amber-100'
            : 'border-red-200 bg-red-50/80 text-red-950'
        }`}
      >
        <div className="flex items-center gap-2">
          <Ruler
            className={`h-4 w-4 shrink-0 ${
              isPremium ? 'text-amber-300' : 'text-red-600'
            }`}
          />
          <p>{category.callout}</p>
        </div>

        <a
          href="#size-chart"
          className={`inline-flex shrink-0 items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-extrabold transition-colors ${
            isPremium
              ? 'bg-amber-400 text-zinc-950 hover:bg-amber-300'
              : 'bg-white text-red-700 shadow-sm ring-1 ring-red-200 hover:bg-red-100'
          }`}
        >
          <span>Lihat Size Chart</span>
        </a>
      </div>
    </div>
  );
}

function CategoryOrderCtaBox({ category }) {
  const isPremium = category.id === 'premium';

  return (
    <div
      className={`flex flex-col items-start justify-between gap-4 rounded-2xl border p-5 shadow-sm sm:flex-row sm:items-center sm:p-6 ${
        isPremium
          ? 'border-amber-400/40 bg-zinc-900 text-white'
          : 'border-zinc-200 bg-white text-zinc-900'
      }`}
    >
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-wider text-red-500">
          {category.name} • {category.price}
        </p>
        <p
          className={`mt-1 flex items-center gap-1.5 text-xs font-medium sm:text-sm ${
            isPremium ? 'text-zinc-300' : 'text-zinc-600'
          }`}
        >
          <Info
            className={`h-4 w-4 shrink-0 ${
              isPremium ? 'text-amber-300' : 'text-red-600'
            }`}
          />
          <span>{category.shortCallout}</span>
        </p>
      </div>

      <a
        href={category.formUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 text-center text-sm font-bold text-white shadow-md transition-transform hover:bg-red-700 active:scale-[0.98] sm:w-auto sm:min-w-[280px] sm:shrink-0"
      >
        <span>{category.ctaText}</span>
        <ExternalLink className="h-4 w-4 shrink-0" />
      </a>
    </div>
  );
}

export default function CatalogSection({ onSelectItem }) {
  const [activeQuickTab, setActiveQuickTab] = useState('premium');

  const premiumCategory = categories.premium;
  const runningCategory = categories.running;
  const fakultasCategory = categories.fakultas;

  return (
    <section id="katalog" className="border-b border-zinc-200 pb-16 sm:pb-20 lg:pb-24">
      {/* Sticky Category Quick-Jump Bar */}
      <div className="sticky top-14 z-30 border-b border-zinc-200 bg-[#FAF8F5]/95 py-2.5 backdrop-blur sm:top-16">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <span className="hidden items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-zinc-600 lg:inline-flex">
            <Layers className="h-4 w-4 text-red-600" />
            Lompat ke Kategori:
          </span>

          <div className="no-scrollbar flex w-full snap-x items-center gap-2 overflow-x-auto whitespace-nowrap lg:w-auto">
            {categoryList.map((cat) => {
              const isActive = activeQuickTab === cat.id;
              return (
                <a
                  key={cat.id}
                  href={`#kategori-${cat.id}`}
                  onClick={() => setActiveQuickTab(cat.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`inline-flex min-h-[48px] shrink-0 snap-start items-center justify-center rounded-full px-4 py-2 text-xs font-extrabold shadow-sm transition-all active:scale-[0.98] sm:text-sm ${
                    isActive
                      ? 'bg-red-600 text-white'
                      : 'border border-zinc-200 bg-white text-zinc-800 hover:border-red-600/40 hover:bg-red-50 hover:text-red-700'
                  }`}
                >
                  {cat.shortTabLabel}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Catalog Content */}
      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 sm:pt-14 lg:px-8">
        {/* Section Title Only */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-red-600 shadow-sm">
            <Layers className="h-3.5 w-3.5" />
            Katalog Resmi • 3 Kategori • 10 Desain
          </span>
          <h2 className="mt-3 font-display text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl lg:text-3xl">
            Jelajahi Semua Seri Jersey UKM Al-Fath
          </h2>
        </div>

        {/* 3 Category Sections: 1. Premium, 2. Running, 3. Fakultas */}
        <div className="mt-8 space-y-16 sm:mt-10 sm:space-y-20">
          {/* ============================================================ */}
          {/* KATEGORI 01: JERSEY PREMIUM (2 DESAIN)                       */}
          {/* ============================================================ */}
          <div id="kategori-premium" className="scroll-mt-32 space-y-6">
            <CategoryHeaderSpecBanner category={premiumCategory} />

            {/* 2-Column Showcase Grid (1:1 Image, Badge, Title Only) */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
              {premiumCategory.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectItem(item, premiumCategory)}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-amber-500/40 bg-white text-left shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                  aria-label={`Perbesar gambar ${item.name}`}
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-zinc-900">
                    <img
                      src={item.imageUrl}
                      alt={`${item.name} - Mockup 1:1 Premium Edition`}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />

                    <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 px-3 py-1 text-[11px] font-black text-zinc-950 shadow-md">
                        <Sparkles className="h-3.5 w-3.5 text-red-700" />
                        PREMIUM EDITION
                      </span>
                      <span className="rounded-full bg-red-600 px-2.5 py-1 font-mono text-[11px] font-bold text-white shadow-md">
                        {item.facultyCode}
                      </span>
                    </div>

                    <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-zinc-900 shadow-md">
                      <ZoomIn className="h-4 w-4 shrink-0 text-red-600" />
                      <span>Perbesar Gambar</span>
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700">
                      {item.facultyName}
                    </p>
                    <h4 className="mt-1 font-display text-lg font-extrabold text-zinc-900 sm:text-xl">
                      {item.name}
                    </h4>
                  </div>
                </button>
              ))}
            </div>

            <CategoryOrderCtaBox category={premiumCategory} />
          </div>

          {/* ============================================================ */}
          {/* KATEGORI 02: JERSEY RUNNING (1 DESAIN)                       */}
          {/* ============================================================ */}
          <div id="kategori-running" className="scroll-mt-32 space-y-6">
            <CategoryHeaderSpecBanner category={runningCategory} />

            {/* Single Clean Visual Preview Card */}
            <div className="mx-auto max-w-md">
              {runningCategory.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectItem(item, runningCategory)}
                  className="group flex w-full flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white text-left shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                  aria-label={`Perbesar gambar ${item.name}`}
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-zinc-50">
                    <img
                      src={item.imageUrl}
                      alt={`${item.name} - Mockup 1:1`}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />

                    <span className="absolute top-3 left-3 rounded-full bg-red-600 px-3 py-1 text-[11px] font-extrabold text-white shadow-sm">
                      RUNNING SERIES
                    </span>

                    <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-zinc-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-md">
                      <ZoomIn className="h-4 w-4 shrink-0" />
                      <span>Perbesar Gambar</span>
                    </span>
                  </div>

                  <div className="p-4 sm:p-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-red-600">
                      {item.facultyName}
                    </p>
                    <h4 className="mt-1 font-display text-lg font-extrabold text-zinc-900">
                      {item.name}
                    </h4>
                  </div>
                </button>
              ))}
            </div>

            <CategoryOrderCtaBox category={runningCategory} />
          </div>

          {/* ============================================================ */}
          {/* KATEGORI 03: JERSEY FAKULTAS (7 DESAIN)                      */}
          {/* ============================================================ */}
          <div id="kategori-fakultas" className="scroll-mt-32 space-y-6">
            <CategoryHeaderSpecBanner category={fakultasCategory} />

            {/* Responsive Card Grid (1:1 Image, Badge, Title Only) */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {fakultasCategory.items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onSelectItem(item, fakultasCategory)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white text-left shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
                  aria-label={`Perbesar gambar ${item.name} (${item.facultyName})`}
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-zinc-50">
                    <img
                      src={item.imageUrl}
                      alt={`${item.name} (${item.facultyName}) - Mockup 1:1`}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                    />

                    <span
                      className={`absolute top-3 left-3 rounded-lg px-2.5 py-1 font-mono text-xs font-extrabold shadow-md ${
                        facultyBadgeColors[item.facultyCode] || 'bg-zinc-900 text-white'
                      }`}
                    >
                      {item.facultyCode}
                    </span>

                    <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-zinc-900/90 px-3 py-1.5 text-[11px] font-bold text-white shadow-md">
                      <ZoomIn className="h-4 w-4 shrink-0" />
                      <span>Perbesar Gambar</span>
                    </span>
                  </div>

                  <div className="p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                      {item.facultyName}
                    </p>
                    <h4 className="mt-1 font-display text-lg font-extrabold text-zinc-900">
                      {item.name}
                    </h4>
                  </div>
                </button>
              ))}
            </div>

            <CategoryOrderCtaBox category={fakultasCategory} />
          </div>
        </div>
      </div>
    </section>
  );
}
