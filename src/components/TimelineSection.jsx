import React from 'react';
import {
  CalendarCheck2,
  ClipboardCheck,
  Clock,
  Factory,
  PackageCheck,
} from 'lucide-react';
import { timelineSteps } from '../data/jerseys';

const stepIcons = [CalendarCheck2, ClipboardCheck, Factory, PackageCheck];

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      className="border-b border-zinc-200 bg-white/75 py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl md:mx-auto md:text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-[#FAF8F5] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-red-600 shadow-sm">
            <Clock className="h-3.5 w-3.5" />
            Alur Pre-Order Resmi
          </span>
          <h2 className="mt-3 font-display text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl lg:text-3xl">
            Timeline Pre-Order &amp; Produksi
          </h2>
        </div>

        {/* Vertical Left-Aligned Red Timeline (Mobile) -> 4-Column Horizontal Grid (Desktop md:) */}
        <div className="mt-10 border-l-2 border-red-600 pl-4 space-y-6 md:mt-12 md:grid md:grid-cols-4 md:gap-6 md:space-y-0 md:border-l-0 md:pl-0">
          {timelineSteps.map((item, idx) => {
            const Icon = stepIcons[idx] || CalendarCheck2;
            const isActive = item.status === 'active';

            return (
              <div key={item.step} className="relative">
                {/* Mobile Left Red Dot */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[25px] top-1.5 h-4 w-4 rounded-full border-2 border-white shadow md:hidden ${
                    isActive ? 'bg-red-600 ring-4 ring-red-100' : 'bg-red-600'
                  }`}
                />

                <div
                  className={`h-full rounded-2xl border p-5 transition-shadow ${
                    isActive
                      ? 'border-red-600/35 bg-[#FAF8F5] shadow-card'
                      : 'border-zinc-200 bg-white shadow-sm hover:shadow-card'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <div
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${
                        isActive
                          ? 'border-red-600 bg-red-600 text-white'
                          : 'border-zinc-200 bg-[#FAF8F5] text-zinc-700'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`font-mono text-xs font-extrabold ${
                          isActive ? 'text-red-600' : 'text-zinc-500'
                        }`}
                      >
                        TAHAP {item.step}
                      </span>
                      {isActive && (
                        <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-extrabold text-red-700">
                          AKTIF
                        </span>
                      )}
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-base font-extrabold text-zinc-900 sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-1.5 inline-block rounded-md bg-zinc-900/5 px-2.5 py-1 font-mono text-xs font-bold text-zinc-800">
                    {item.date}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
