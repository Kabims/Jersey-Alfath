import React from 'react';
import { siteMetadata } from '../data/jerseys';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200 bg-white pt-8 pb-24 md:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-4 text-center sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-2.5 sm:flex-row sm:gap-3 sm:text-left">
          <img
            src={siteMetadata.logoUrl}
            alt="Logo UKM Al-Fath Universitas Telkom"
            className="h-8 w-8 shrink-0 rounded-full border border-zinc-200 object-cover"
          />
          <div>
            <p className="text-xs font-bold text-zinc-900 sm:text-sm">
              Copyright © {year} {siteMetadata.organizationName}
            </p>
            <p className="text-xs font-medium text-zinc-500">
              Katalog Jersey Resmi UKM Al-Fath Universitas Telkom
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
