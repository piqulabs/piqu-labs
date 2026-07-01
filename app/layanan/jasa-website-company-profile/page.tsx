import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Website Company Profile Bandung | PIQU Labs",
  description:
    "Jasa website company profile profesional hingga 5 halaman. Form kontak, Google Maps, SEO dasar. Cocok kantor, klinik, & bisnis jasa di Bandung. Mulai Rp1.200.000.",
  alternates: {
    canonical: "https://piqulabs.dev/layanan/jasa-website-company-profile",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Website Company Profile",
  provider: {
    "@type": "ProfessionalService",
    name: "PIQU Labs",
    telephone: "+6285787091529",
    areaServed: "Bandung, Cimahi, Indonesia",
  },
  description:
    "Website company profile profesional hingga 5 halaman dengan form kontak, integrasi Google Maps, dan optimasi SEO dasar.",
  offers: { "@type": "Offer", price: "1200000", priceCurrency: "IDR" },
};

const faqs = [
  {
    q: "Bedanya company profile dengan landing page biasa apa?",
    a: "Company profile punya struktur multi-halaman: tentang kami, layanan, portofolio, kontak, dan halaman lain sesuai kebutuhan. Lebih cocok kalau bisnis kamu punya beberapa layanan atau butuh kredibilitas institusional.",
  },
  {
    q: "Form kontaknya kirim ke mana?",
    a: "Notifikasi masuk ke email bisnis kamu. Bisa juga kami arahkan ke WhatsApp Business kalau kamu lebih sering respon lewat chat. Setup-nya kita bantu dari awal.",
  },
  {
    q: "SEO-nya sampai ranking halaman 1 Google?",
    a: "Kita siapkan fondasi SEO dasar: struktur heading yang benar, meta title & description, kecepatan halaman, dan sitemap. Ranking di Google butuh waktu dan konten berkelanjutan — tapi website kamu sudah siap diindeks dengan benar.",
  },
];

export default function JasaWebsiteCompanyProfilePage() {
  return (
    <main className="min-h-screen bg-bg text-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Jasa Website{" "}
          <span className="text-gradient">Company Profile</span>
        </h1>

        <p className="mt-6 text-lg text-content-muted">
          Bisnis yang udah punya tim atau kantor fisik butuh lebih dari sekadar
          satu halaman. PIQU Labs bikinin website company profile hingga 5
          halaman — lengkap form kontak, peta Google Maps, dan SEO dasar. Mulai
          Rp1.200.000, domain & hosting 1 tahun termasuk.
        </p>

        <section className="mt-12 rounded-2xl border border-border-soft bg-surface p-8">
          <h2 className="text-xl font-semibold">Fitur dalam paket</h2>
          <ul className="mt-4 space-y-3 text-content-muted">
            <li>• Hingga 5 halaman: Beranda, Tentang, Layanan, Galeri/Portofolio, Kontak</li>
            <li>• Form kontak dengan notifikasi email</li>
            <li>• Embed Google Maps ke lokasi kantor atau klinik kamu</li>
            <li>• Meta tag & struktur halaman yang SEO-friendly</li>
            <li>• Desain responsif + garansi perbaikan 30 hari</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Cocok buat bisnis seperti ini</h2>
          <p className="mt-4 text-content-muted">
            Kantor konsultan, klinik gigi, bengkel authorized, travel agent,
            firma hukum kecil, atau perusahaan jasa B2B yang sering dikirimi
            pertanyaan &ldquo;alamat kantornya di mana?&rdquo; dan &ldquo;bisa
            lihat profil perusahaannya dulu?&rdquo;
          </p>
          <p className="mt-4 text-content-muted">
            Website company profile jadi kartu nama resmi kamu di internet —
            calon klien atau mitra bisa cek dulu sebelum meeting atau datang ke
            lokasi.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Contoh struktur halaman</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border-soft bg-surface p-5">
              <p className="font-medium">Klinik kesehatan</p>
              <p className="mt-2 text-sm text-content-muted">
                Profil dokter, daftar layanan medis, jam operasional, dan peta
                lokasi — pasien baru langsung tahu cara datang.
              </p>
            </div>
            <div className="rounded-xl border border-border-soft bg-surface p-5">
              <p className="font-medium">Travel agent</p>
              <p className="mt-2 text-sm text-content-muted">
                Paket wisata, testimoni, legalitas perusahaan, dan form
                pertanyaan itinerary custom.
              </p>
            </div>
            <div className="rounded-xl border border-border-soft bg-surface p-5">
              <p className="font-medium">Kontraktor / arsitek</p>
              <p className="mt-2 text-sm text-content-muted">
                Galeri proyek selesai, sertifikasi, tim, dan channel kontak
                profesional untuk tender atau klien korporat.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Pertanyaan yang sering ditanya</h2>
          <dl className="mt-6 space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border-b border-border-soft pb-6 last:border-0"
              >
                <dt className="font-medium">{faq.q}</dt>
                <dd className="mt-2 text-content-muted">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <a
          href="https://wa.me/6285787091529?text=Halo%20PIQU%20Labs,%20saya%20mau%20konsultasi%20website%20company%20profile"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex h-12 items-center rounded-full bg-bronze px-6 font-medium text-content transition-colors hover:bg-bronze-dark"
        >
          Konsultasi Gratis via WhatsApp
        </a>
      </article>
    </main>
  );
}
