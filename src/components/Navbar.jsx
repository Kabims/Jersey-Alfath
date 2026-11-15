import React from 'react';
import {
  CalendarClock,
  HelpCircle,
  LayoutGrid,
  MessageCircle,
  ShoppingBag,
} from 'lucide-react';
import { getWhatsAppUrl, siteMetadata } from '../data/jerseys';

const navLinks = [
  { label: 'Katalog', href: '#katalog' },
  { label: 'Timeline PO', href: '#timeline' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Navbar() {
  return (
    <>
      {/* Top Adaptive Sticky Navbar */}
      <header className="sticky top-0 z-40 h-14 border-b border-zinc-200 bg-[#FAF8F5]/95 backdrop-blur-md sm:h-16">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          {/* Left: UKM Al-Fath Logo + Brand Title */}
          <a
            href="#"
            className="group flex min-w-0 items-center gap-2.5 focus:outline-none sm:gap-3"
            aria-label="Beranda Pre-Order Jersey UKM Al-Fath"
          >
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-zinc-900/15 bg-white shadow-sm transition-transform duration-200 group-hover:scale-105 sm:h-10 sm:w-10">
              <img
                src={siteMetadata.logoUrl}
                alt="Logo UKM Al-Fath Universitas Telkom"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate font-display text-sm font-extrabold tracking-tight text-zinc-900 sm:text-lg">
                {siteMetadata.brandTitle}
              </span>
              <span className="truncate text-[10px] font-medium text-zinc-600 sm:text-[11px]">
                {siteMetadata.brandSubtitle}
              </span>
            </div>
          </a>

          {/* Center: Desktop Nav Links */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-zinc-700 transition-colors hover:text-red-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Compact Mobile "Pesan" / Desktop "Pesan Sekarang" CTA */}
          <a
            href="#katalog"
            className="inline-flex min-h-[48px] shrink-0 items-center gap-1.5 rounded-full bg-red-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-red-700 active:scale-[0.98] sm:px-5 sm:text-sm"
          >
            <ShoppingBag className="h-4 w-4 shrink-0" />
            <span className="sm:hidden">Pesan</span>
            <span className="hidden sm:inline">Pesan Sekarang</span>
          </a>
        </div>
      </header>

      {/* Mobile Sticky Bottom Navigation Bar (< 768px) */}
      <nav
        aria-label="Navigasi Cepat Mobile"
        className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-zinc-200 bg-white/95 px-2 py-1.5 shadow-lg backdrop-blur-md md:hidden"
      >
        <a
          href="#katalog"
          className="flex min-h-[48px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1 text-[11px] font-bold text-zinc-800 transition-transform active:scale-[0.98] active:bg-red-50 active:text-red-600"
        >
          <LayoutGrid className="h-4 w-4 text-red-600" />
          <span>Katalog</span>
        </a>

        <a
          href="#timeline"
          className="flex min-h-[48px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1 text-[11px] font-bold text-zinc-800 transition-transform active:scale-[0.98] active:bg-red-50 active:text-red-600"
        >
          <CalendarClock className="h-4 w-4 text-zinc-700" />
          <span>Timeline</span>
        </a>

        <a
          href="#faq"
          className="flex min-h-[48px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1 text-[11px] font-bold text-zinc-800 transition-transform active:scale-[0.98] active:bg-red-50 active:text-red-600"
        >
          <HelpCircle className="h-4 w-4 text-zinc-700" />
          <span>FAQ</span>
        </a>

        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-[48px] flex-1 flex-col items-center justify-center gap-0.5 rounded-xl px-2 py-1 text-[11px] font-bold text-emerald-700 transition-transform active:scale-[0.98] active:bg-emerald-50"
        >
          <MessageCircle className="h-4 w-4 text-emerald-600" />
          <span>Chat CP</span>
        </a>
      </nav>
    </>
  );
}
