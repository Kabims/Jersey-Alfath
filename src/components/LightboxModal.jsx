import React, { useEffect, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Ruler,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';

export default function LightboxModal({
  activeEntry,
  allEntries,
  onClose,
  onNavigate,
}) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
  }, [activeEntry?.item?.id]);

  useEffect(() => {
    if (!activeEntry) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowLeft') onNavigate(-1);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeEntry, onClose, onNavigate]);

  if (!activeEntry) return null;

  const { item, category } = activeEntry;
  const currentIndex = allEntries.findIndex((entry) => entry.item.id === item.id);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/90 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[95vh] w-full max-w-4xl animate-scale-in flex-col overflow-hidden rounded-3xl border border-white/15 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar with Large Thumb-Friendly Close (X) Button */}
        <div className="flex items-center justify-between gap-3 border-b border-zinc-200 bg-[#FAF8F5] px-4 py-3 sm:px-6">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-red-600 px-2.5 py-0.5 text-[11px] font-extrabold text-white">
                {category.name}
              </span>
              <span className="font-mono text-xs font-bold text-zinc-600">
                {category.price}
              </span>
              <span className="font-mono text-xs text-zinc-500">
                • {currentIndex + 1} / {allEntries.length}
              </span>
            </div>
            <h3
              id="lightbox-title"
              className="mt-1 truncate font-display text-base font-extrabold text-zinc-900 sm:text-xl"
            >
              {item.name}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-11 min-h-[48px] w-11 min-w-[48px] shrink-0 items-center justify-center rounded-full bg-zinc-900/80 text-white shadow-md transition-transform hover:bg-red-600 active:scale-[0.98]"
            aria-label="Tutup pratinjau"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* High-Resolution 1:1 Image Stage */}
        <div className="relative flex flex-1 flex-col items-center justify-center overflow-auto bg-zinc-950 p-3 sm:p-5">
          <div
            className={`relative flex w-full max-w-2xl items-center justify-center ${
              isZoomed ? 'overflow-auto' : 'overflow-hidden'
            }`}
          >
            <img
              src={item.imageUrl}
              alt={`${item.name} - Mockup 1:1 Resolusi Tinggi`}
              onClick={() => setIsZoomed((z) => !z)}
              className={`max-h-[80vh] w-full max-w-2xl cursor-zoom-in rounded-lg object-contain transition-transform duration-300 ${
                isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'
              }`}
            />
          </div>

          {/* Floating Prev / Zoom / Next Controls */}
          <div className="mt-3 flex w-full max-w-2xl items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => onNavigate(-1)}
              className="inline-flex min-h-[48px] items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-bold text-white transition-transform hover:bg-white/20 active:scale-[0.98] sm:text-sm"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Sebelumnya</span>
            </button>

            <button
              type="button"
              onClick={() => setIsZoomed((z) => !z)}
              className="inline-flex min-h-[48px] items-center gap-1.5 rounded-xl bg-white/15 px-4 py-2 text-xs font-bold text-white transition-transform hover:bg-white/25 active:scale-[0.98]"
            >
              {isZoomed ? (
                <>
                  <ZoomOut className="h-4 w-4" />
                  <span>Reset 1x</span>
                </>
              ) : (
                <>
                  <ZoomIn className="h-4 w-4" />
                  <span>Perbesar</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => onNavigate(1)}
              className="inline-flex min-h-[48px] items-center gap-1.5 rounded-xl border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-bold text-white transition-transform hover:bg-white/20 active:scale-[0.98] sm:text-sm"
            >
              <span>Berikutnya</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom Info & Category Form CTA Bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-zinc-200 bg-white px-4 py-3.5 sm:flex-row sm:items-center sm:px-6">
          <div className="min-w-0">
            <p className="text-xs font-semibold text-zinc-600">{item.facultyName}</p>
            <p className="mt-0.5 flex items-start gap-1.5 text-xs font-medium text-zinc-500 sm:items-center">
              <Ruler className="mt-0.5 h-4 w-4 shrink-0 text-red-600 sm:mt-0" />
              <span>{category.shortCallout}</span>
            </p>
          </div>

          <a
            href={category.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 text-sm font-bold text-white shadow-md transition-transform hover:bg-red-700 active:scale-[0.98] sm:w-auto"
          >
            <span>Lanjut ke Form Kategori Ini</span>
            <ExternalLink className="h-4 w-4 shrink-0" />
          </a>
        </div>
      </div>
    </div>
  );
}
