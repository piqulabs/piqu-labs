import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Pembuatan Website Profesional Bandung | PIQU Labs",
  description:
    "Jasa pembuatan website profesional untuk UMKM di Bandung & Cimahi. Landing page cepat, mobile responsive, domain & hosting 1 tahun. Mulai Rp900.000.",
  alternates: {
    canonical: "https://piqulabs.com/layanan/jasa-pembuatan-website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Pembuatan Website",
  provider: {
    "@type": "ProfessionalService",
    name: "PIQU Labs",
    telephone: "+6285787091529",
    areaServed: "Bandung, Cimahi, Indonesia",
  },
  description:
    "Jasa pembuatan website profesional untuk bisnis: landing page, halaman promosi, dan website bisnis skala kecil.",
  offers: { "@type": "Offer", price: "900000", priceCurrency: "IDR" },
};

const faqs = [
  {
    q: "Berapa lama website jadi?",
    a: "Untuk landing page standar, biasanya 2-5 hari kerja setelah materi (logo, teks, foto) lengkap. Kalau butuh revisi tambahan, timeline bisa sedikit bergeser — kita komunikasikan dari awal.",
  },
  {
    q: "Apa saja yang sudah termasuk di paket Rp900.000?",
    a: "Satu halaman landing page custom, domain .com/.id 1 tahun, hosting 1 tahun, desain mobile responsive, dan garansi perbaikan 30 hari setelah launching.",
  },
  {
    q: "Saya belum punya logo atau foto produk, bisa tetap order?",
    a: "Bisa. Kita bantu arahkan dulu pakai placeholder atau sumber gratis yang layak. Nanti bisa diganti kapan materi asli sudah siap tanpa harus rebuild dari nol.",
  },
];

export default function JasaPembuatanWebsitePage() {
  return (
    <main className="min-h-screen bg-bg text-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Jasa Pembuatan{" "}
          <span className="text-gradient">Website Profesional</span>
        </h1>

        <p className="mt-6 text-lg text-content-muted">
          Butuh website yang kelihatan rapi dan bisa langsung dipakai promosi?
          PIQU Labs bantu UMKM di Bandung dan Cimahi punya landing page
          profesional — mulai dari Rp900.000, sudah termasuk domain, hosting 1
          tahun, dan garansi 30 hari.
        </p>

        <section className="mt-12 rounded-2xl border border-border-soft bg-surface p-8">
          <h2 className="text-xl font-semibold">Apa yang kamu dapatkan</h2>
          <ul className="mt-4 space-y-3 text-content-muted">
            <li>• Landing page custom sesuai branding bisnis kamu</li>
            <li>• Desain mobile responsive — enak dibuka dari HP</li>
            <li>• Tombol WhatsApp & CTA yang mengarah ke penjualan</li>
            <li>• Loading cepat, struktur halaman rapi untuk SEO dasar</li>
            <li>• Domain + hosting 1 tahun, garansi perbaikan 30 hari</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Cocok buat siapa</h2>
          <p className="mt-4 text-content-muted">
            Paket ini pas buat bisnis yang baru mulai go digital atau butuh
            halaman promosi tunggal yang fokus: toko online kecil, jasa catering,
            freelance desain, bengkel motor, hingga usaha rumahan yang pengen
            kelihatan lebih meyakinkan di Google dan media sosial.
          </p>
          <p className="mt-4 text-content-muted">
            Kalau kamu cuma butuh satu halaman untuk jelasin produk, harga, dan
            cara order — tanpa fitur kompleks — ini pilihan paling hemat dan
            cepat.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Contoh use-case</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border-soft bg-surface p-5">
              <p className="font-medium">UMKM kuliner</p>
              <p className="mt-2 text-sm text-content-muted">
                Menu, foto makanan, lokasi, dan tombol order via WhatsApp — semua
                dalam satu halaman yang gampang dishare ke Instagram.
              </p>
            </div>
            <div className="rounded-xl border border-border-soft bg-surface p-5">
              <p className="font-medium">Jasa home service</p>
              <p className="mt-2 text-sm text-content-muted">
                Tukang AC, cleaning service, atau les privat yang butuh kartu
                nama digital biar klien percaya sebelum booking.
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
          href="https://wa.me/6285787091529?text=Halo%20PIQU%20Labs,%20saya%20mau%20konsultasi%20jasa%20pembuatan%20website"
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
