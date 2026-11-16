import React, { useEffect, useState } from 'react';
import { Info, Ruler, Users, X, ZoomIn } from 'lucide-react';
import { sizeChart } from '../data/jerseys';

const chartTabs = [sizeChart.ikhwan, sizeChart.akhwat];

export default function SizeChartSection() {
  const [activeKey, setActiveKey] = useState('ikhwan');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeChart = sizeChart[activeKey] || sizeChart.ikhwan;

  useEffect(() => {
    if (!isModalOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <section
      id="size-chart"
      className="scroll-mt-20 border-b border-zinc-200 py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl md:mx-auto md:text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-red-600 shadow-sm">
            <Ruler className="h-3.5 w-3.5" />
            Panduan Ukuran Resmi
          </span>
          <h2 className="mt-3 font-display text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl lg:text-3xl">
            Size Chart Jersey (Ikhwan &amp; Akhwat)
          </h2>
        </div>

        {/* Prominent Touch-Friendly Ikhwan / Akhwat Tab Switcher */}
        <div
          role="tablist"
          aria-label="Pilih Kategori Size Chart"
          className="mx-auto mt-8 grid max-w-xl grid-cols-1 gap-2.5 sm:grid-cols-2"
        >
          {chartTabs.map((tab) => {
            const isSelected = activeKey === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveKey(tab.id)}
                className={`inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-extrabold transition-all active:scale-[0.98] ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-md'
                    : 'border border-zinc-200 bg-white text-zinc-800 hover:border-red-600/40 hover:bg-red-50 hover:text-red-700'
                }`}
              >
                <Users
                  className={`h-4 w-4 shrink-0 ${
                    isSelected ? 'text-white' : 'text-red-600'
                  }`}
                />
                <span>{tab.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Dual Content Card: Official Chart Image + Responsive Table */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-start">
          {/* Left: Click-to-Zoom Official Image Preview */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-card sm:p-5 lg:col-span-5">
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-zinc-600">
                {activeChart.subtitle}
              </span>
              <span className="rounded-full bg-red-50 px-2.5 py-0.5 font-mono text-[11px] font-bold text-red-700">
                Tap Gambar
              </span>
            </div>

            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 text-left transition-transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2"
              aria-label={`Perbesar gambar ${activeChart.title}`}
            >
              <img
                src={activeChart.imageUrl}
                alt={activeChart.title}
                className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-zinc-900/90 px-3 py-1.5 text-xs font-bold text-white shadow-md">
                <ZoomIn className="h-4 w-4 shrink-0" />
                <span>Perbesar Gambar</span>
              </span>
            </button>
          </div>

          {/* Right: Clean Responsive Size Chart Table */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-card sm:p-7 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-lg font-extrabold text-zinc-900 sm:text-xl">
                {activeChart.title}
              </h3>
              <span className="rounded-full border border-zinc-200 bg-[#FAF8F5] px-3 py-1 font-mono text-xs font-bold text-zinc-700">
                Satuan: cm
              </span>
            </div>

            <div className="mt-5 overflow-x-auto rounded-2xl border border-zinc-200">
              <table className="w-full min-w-[340px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-[#FAF8F5] text-xs font-extrabold uppercase tracking-wider text-zinc-700">
                    <th scope="col" className="px-4 py-3.5">
                      Ukuran
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-center">
                      Lebar Dada (cm)
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-center">
                      Panjang Badan (cm)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200 bg-white">
                  {activeChart.rows.map((row) => (
                    <tr
                      key={row.size}
                      className="transition-colors hover:bg-red-50/40"
                    >
                      <td className="px-4 py-3 font-mono text-sm font-extrabold text-zinc-900">
                        {row.size}
                      </td>
                      <td className="px-4 py-3 text-center font-mono text-sm font-semibold text-zinc-700">
                        {row.lebarDada}
                      </td>
                      <td className="px-4 py-3 text-center font-mono text-sm font-semibold text-zinc-700">
                        {row.panjangBadan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50/70 px-3.5 py-2.5 text-xs font-medium text-red-950 sm:text-sm">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
              <p>
                Toleransi ukuran jahitan ±1–2 cm. Pastikan ukuran Ikhwan/Akhwat sudah sesuai sebelum memilih ukuran di Google Form.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Size Chart Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-3 backdrop-blur-md sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sizechart-modal-title"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative flex max-h-[95vh] w-full max-w-3xl animate-scale-in flex-col overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 border-b border-zinc-200 bg-[#FAF8F5] px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <span className="rounded-full bg-red-600 px-2.5 py-0.5 text-[11px] font-extrabold text-white">
                  {activeChart.subtitle}
                </span>
                <h3
                  id="sizechart-modal-title"
                  className="mt-1 truncate font-display text-base font-extrabold text-zinc-900 sm:text-lg"
                >
                  {activeChart.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex h-11 min-h-[48px] w-11 min-w-[48px] shrink-0 items-center justify-center rounded-full bg-zinc-900/80 text-white shadow-md transition-transform hover:bg-red-600 active:scale-[0.98]"
                aria-label="Tutup pratinjau Size Chart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center overflow-auto bg-zinc-950 p-3 sm:p-5">
              <img
                src={activeChart.imageUrl}
                alt={`${activeChart.title} - Resolusi Penuh`}
                className="max-h-[82vh] w-full max-w-2xl rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
