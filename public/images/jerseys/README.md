# Panduan Mengganti Foto Mockup Jersey (1:1 Square)

Semua gambar jersey pada website ini dipusatkan di folder `public/images/jerseys/` dan dikonfigurasi di `src/data/jerseys.js`.

## Spesifikasi Gambar yang Disarankan
- **Rasio Aspek:** `1:1` (Persegi / Square, misal `1080 x 1080 px` atau `1500 x 1500 px`).
- **Komposisi:** Tampak depan, tampak belakang, dan celana dalam 1 frame (sesuai template mockup MCLOTH / vendor).
- **Format:** `.jpg`, `.jpeg`, `.png`, atau `.webp`.

## Daftar Nama File (10 Desain)
Jika Anda ingin mengganti gambar tanpa perlu mengubah kode, cukup timpa (replace) file-file berikut dengan nama yang sama persis:

### 1. Kategori Jersey Running (1 Desain)
- `running-1.jpg` — Official Running Jersey UKM Al-Fath

### 2. Kategori Jersey Fakultas (7 Desain)
- `fakultas-fte.jpg` — FTE (Fakultas Teknik Elektro)
- `fakultas-fri.jpg` — FRI (Fakultas Rekayasa Industri)
- `fakultas-fif.jpg` — FIF (Fakultas Informatika)
- `fakultas-feb.jpg` — FEB (Fakultas Ekonomi dan Bisnis)
- `fakultas-fkb.jpg` — FKB (Fakultas Komunikasi dan Bisnis)
- `fakultas-fik.jpg` — FIK (Fakultas Industri Kreatif)
- `fakultas-fit.jpg` — FIT (Fakultas Ilmu Terapan)

### 3. Kategori Jersey Premium (2 Desain)
- `premium-1.jpg` — Premium Edition A (Home / Dark)
- `premium-2.jpg` — Premium Edition B (Away / Light)

> **Catatan:** Jika Anda menggunakan ekstensi file `.png` atau `.webp`, perbarui field `imageUrl` masing-masing item di `src/data/jerseys.js`.
