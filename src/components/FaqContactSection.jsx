import React, { useState } from 'react';
import {
  ChevronDown,
  ExternalLink,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';
import { faqs, getWhatsAppUrl, siteMetadata } from '../data/jerseys';

export default function FaqContactSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        {/* Left: Touch-Friendly Accordion FAQ (#faq) */}
        <div id="faq" className="min-w-0 lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-red-600 shadow-sm">
            <HelpCircle className="h-3.5 w-3.5" />
            Pertanyaan Umum
          </span>
          <h2 className="mt-3 font-display text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl lg:text-3xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? 'border-red-600/30 bg-white shadow-card'
                      : 'border-zinc-200 bg-white/95 hover:border-zinc-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="flex min-h-[48px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-transform active:scale-[0.98] focus:outline-none sm:px-6"
                  >
                    <span className="font-display text-sm font-extrabold text-zinc-900 sm:text-base">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-red-600 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-zinc-100 px-5 pt-3 pb-4 text-sm leading-relaxed text-zinc-600 sm:px-6">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Contact Person Card (#kontak) */}
        <div id="kontak" className="min-w-0 lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 p-6 text-white shadow-card-hover sm:p-8">
            <div
              aria-hidden="true"
              className="bg-alfath-grid-dark pointer-events-none absolute inset-0 opacity-60"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-red-600/30 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <img
                  src={siteMetadata.logoUrl}
                  alt="Logo UKM Al-Fath Universitas Telkom"
                  className="h-12 w-12 shrink-0 rounded-full border border-white/20 bg-white object-cover"
                />
                <div className="min-w-0">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-red-400">
                    HUBUNGI KAMI
                  </span>
                  <h3 className="font-display text-xl font-black text-white sm:text-2xl">
                    Contact Person
                  </h3>
                </div>
              </div>

              {/* Direct WhatsApp Box */}
              <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                  {siteMetadata.contactPerson.role}
                </p>
                <p className="mt-1 font-display text-lg font-extrabold text-white">
                  {siteMetadata.contactPerson.name}
                </p>
                <p className="font-mono text-sm font-semibold text-amber-300">
                  {siteMetadata.contactPerson.whatsappDisplay}
                </p>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-extrabold text-zinc-950 shadow-md transition-all duration-200 hover:bg-emerald-400 active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" />
                  <span>Chat Admin via WhatsApp</span>
                  <ExternalLink className="h-4 w-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
