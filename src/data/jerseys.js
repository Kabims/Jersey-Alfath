/**
 * ============================================================================
 * SINGLE SOURCE OF TRUTH: KATALOG & PRE-ORDER JERSEY UKM AL-FATH TEL-U
 * ============================================================================
 * Admin cukup mengubah file ini untuk memperbarui:
 * 1. Link Google Form per kategori (Strictly 3 URLs: PREMIUM, RUNNING, FAKULTAS)
 * 2. Harga & spesifikasi masing-masing kategori
 * 3. Path gambar mockup 1:1 (letakkan file .jpg/.png di /public/images/jerseys/)
 * 4. Jadwal Timeline Pre-Order & Nomor WhatsApp Contact Person
 */

export const FORM_URL_PREMIUM = 'https://forms.gle/GantiLinkFormPremiumDisini';
export const FORM_URL_RUNNING = 'https://forms.gle/GantiLinkFormRunningDisini';
export const FORM_URL_FAKULTAS = 'https://forms.gle/GantiLinkFormFakultasDisini';

export const FORM_URLS = {
  PREMIUM: FORM_URL_PREMIUM,
  RUNNING: FORM_URL_RUNNING,
  FAKULTAS: FORM_URL_FAKULTAS,
};

export const siteMetadata = {
  organizationName: 'UKM Al-Fath Universitas Telkom',
  brandTitle: 'JERSEY AL-FATH',
  brandSubtitle: 'Universitas Telkom',
  heroBadge: 'OPEN PRE-ORDER — JERSEY RESMI UKM AL-FATH',
  logoUrl: '/images/alfath-logo.svg',
  heroShowcaseImage: '/images/jerseys/fakultas-fte.jpg',
  contactPerson: {
    name: 'Admin Pre-Order Jersey UKM Al-Fath',
    role: 'Contact Person Resmi Pre-Order',
    whatsappDisplay: '+62 812-3456-7890',
    whatsappNumber: '6281234567890', // Format internasional tanpa + atau 0 di depan
    whatsappDefaultMessage:
      'Assalamualaikum Admin Pre-Order Jersey UKM Al-Fath, saya ingin bertanya mengenai Pre-Order Jersey UKM Al-Fath Universitas Telkom.',
  },
};

export const getWhatsAppUrl = (customMessage) => {
  const message = encodeURIComponent(
    customMessage || siteMetadata.contactPerson.whatsappDefaultMessage
  );
  return `https://wa.me/${siteMetadata.contactPerson.whatsappNumber}?text=${message}`;
};

export const facultyFilters = [
  { code: 'ALL', label: 'Semua (7)', fullName: 'Semua Fakultas' },
  { code: 'FTE', label: 'FTE', fullName: 'Fakultas Teknik Elektro' },
  { code: 'FRI', label: 'FRI', fullName: 'Fakultas Rekayasa Industri' },
  { code: 'FIF', label: 'FIF', fullName: 'Fakultas Informatika' },
  { code: 'FEB', label: 'FEB', fullName: 'Fakultas Ekonomi & Bisnis' },
  { code: 'FKB', label: 'FKB', fullName: 'Fakultas Komunikasi & Bisnis' },
  { code: 'FIK', label: 'FIK', fullName: 'Fakultas Industri Kreatif' },
  { code: 'FIT', label: 'FIT', fullName: 'Fakultas Ilmu Terapan' },
];

const SHARED_FORM_CALLOUT = 'Size Chart & pemilihan desain tersedia di Google Form';
const SHARED_SHORT_CALLOUT = 'Size Chart & pemilihan desain tersedia di Google Form';

export const categories = {
  premium: {
    id: 'premium',
    number: '01',
    name: 'Jersey Premium',
    shortTabLabel: 'Jersey Premium (2)',
    editionLabel: 'Limited / Premium Edition • 2 Desain',
    price: 'Rp 230.000',
    priceNote: 'Limited Batch • 1 Set + Packaging Eksklusif',
    formUrl: FORM_URL_PREMIUM,
    ctaText: 'Pesan Jersey Premium — Pilih Desain di Form',
    callout: SHARED_FORM_CALLOUT,
    shortCallout: SHARED_SHORT_CALLOUT,
    specs: [
      'Bahan Dry-fit Emboss Jacquard',
      'Full Printing Sublimasi Pro',
      'Free Custom Nama & Nomor',
    ],
    items: [
      {
        id: 'premium-01',
        name: 'Premium Design 1 — Sovereign Dark (Home)',
        facultyCode: 'DESAIN 1',
        facultyName: 'Premium Edition • Home',
        imageUrl: '/images/jerseys/premium-1.jpg',
      },
      {
        id: 'premium-02',
        name: 'Premium Design 2 — Noble Light Gold (Away)',
        facultyCode: 'DESAIN 2',
        facultyName: 'Premium Edition • Away',
        imageUrl: '/images/jerseys/premium-2.jpg',
      },
    ],
  },
  running: {
    id: 'running',
    number: '02',
    name: 'Jersey Running',
    shortTabLabel: 'Jersey Running (1)',
    editionLabel: 'Running Series • 1 Desain',
    price: 'Rp 150.000',
    priceNote: 'Harga Pre-Order • 1 Set Atasan + Celana',
    formUrl: FORM_URL_RUNNING,
    ctaText: 'Pesan Jersey Running (Google Form)',
    callout: SHARED_FORM_CALLOUT,
    shortCallout: SHARED_SHORT_CALLOUT,
    specs: ['Bahan Dry-fit Premium', 'Full Printing Sublimasi', 'Breathable & Anti-UV'],
    items: [
      {
        id: 'running-01',
        name: 'Al-Fath Stride Running Edition',
        facultyCode: 'RUN',
        facultyName: 'Running Series',
        imageUrl: '/images/jerseys/running-1.jpg',
      },
    ],
  },
  fakultas: {
    id: 'fakultas',
    number: '03',
    name: 'Jersey Fakultas',
    shortTabLabel: 'Jersey Fakultas (7)',
    editionLabel: '7 Faculty Pride Series • 7 Desain',
    price: 'Rp 200.000',
    priceNote: 'Harga Pre-Order • 1 Set Atasan + Celana',
    formUrl: FORM_URL_FAKULTAS,
    ctaText: 'Pesan Jersey Fakultas — Pilih Fakultas di Form',
    callout: SHARED_FORM_CALLOUT,
    shortCallout: SHARED_SHORT_CALLOUT,
    specs: [
      'Bahan Dry-fit Brazil Premium',
      'Full Printing Sublimasi',
      'Bisa Custom Nama & Nomor',
    ],
    items: [
      {
        id: 'fakultas-fte',
        name: 'Jersey Al-Fath × FTE',
        facultyCode: 'FTE',
        facultyName: 'Fakultas Teknik Elektro',
        imageUrl: '/images/jerseys/fakultas-fte.jpg',
      },
      {
        id: 'fakultas-fri',
        name: 'Jersey Al-Fath × FRI',
        facultyCode: 'FRI',
        facultyName: 'Fakultas Rekayasa Industri',
        imageUrl: '/images/jerseys/fakultas-fri.jpg',
      },
      {
        id: 'fakultas-fif',
        name: 'Jersey Al-Fath × FIF',
        facultyCode: 'FIF',
        facultyName: 'Fakultas Informatika',
        imageUrl: '/images/jerseys/fakultas-fif.jpg',
      },
      {
        id: 'fakultas-feb',
        name: 'Jersey Al-Fath × FEB',
        facultyCode: 'FEB',
        facultyName: 'Fakultas Ekonomi dan Bisnis',
        imageUrl: '/images/jerseys/fakultas-feb.jpg',
      },
      {
        id: 'fakultas-fkb',
        name: 'Jersey Al-Fath × FKB',
        facultyCode: 'FKB',
        facultyName: 'Fakultas Komunikasi dan Bisnis',
        imageUrl: '/images/jerseys/fakultas-fkb.jpg',
      },
      {
        id: 'fakultas-fik',
        name: 'Jersey Al-Fath × FIK',
        facultyCode: 'FIK',
        facultyName: 'Fakultas Industri Kreatif',
        imageUrl: '/images/jerseys/fakultas-fik.jpg',
      },
      {
        id: 'fakultas-fit',
        name: 'Jersey Al-Fath × FIT',
        facultyCode: 'FIT',
        facultyName: 'Fakultas Ilmu Terapan',
        imageUrl: '/images/jerseys/fakultas-fit.jpg',
      },
    ],
  },
};

export const categoryList = [
  categories.premium,
  categories.running,
  categories.fakultas,
];

export const timelineSteps = [
  {
    step: '01',
    title: 'Open PO & Pembayaran',
    date: '16 – 30 November 2026',
    description:
      'Pilih kategori jersey di katalog, klik tombol Google Form kategori tersebut, tentukan varian desain & ukuran, lalu selesaikan pembayaran.',
    status: 'active',
  },
  {
    step: '02',
    title: 'Rekap Data',
    date: '1 – 3 Desember 2026',
    description:
      'Panitia memverifikasi bukti transfer, merekap pilihan desain/fakultas, nama punggung, dan ukuran setiap pemesan.',
    status: 'upcoming',
  },
  {
    step: '03',
    title: 'Produksi & QC',
    date: 'Estimasi 3 – 4 Minggu',
    description:
      'Proses cetak full sublimasi, penjahitan presisi, serta pemeriksaan kualitas jahitan dan warna pada setiap set jersey.',
    status: 'upcoming',
  },
  {
    step: '04',
    title: 'Distribusi di Kampus Telkom University',
    date: 'Awal Januari 2027',
    description:
      'Pengambilan langsung di Sekretariat UKM Al-Fath / area Kampus Universitas Telkom Bandung atau pengiriman ke alamat tujuan.',
    status: 'upcoming',
  },
];

export const faqs = [
  {
    question: 'Bagaimana cara memilih desain Fakultas atau varian Premium?',
    answer:
      'Klik tombol pemesanan kategori yang diinginkan, lalu pilih kode desain/fakultas langsung di dalam Google Form.',
  },
  {
    question: 'Di mana saya bisa melihat Size Chart?',
    answer:
      'Panduan ukuran lengkap S–XXXL tersedia di bagian atas masing-masing Google Form.',
  },
  {
    question: 'Bagaimana sistem pembayaran dan pengambilan jersey?',
    answer:
      'Pembayaran via transfer/e-wallet yang tertera di form; pengambilan dilakukan di area Telkom University.',
  },
];
