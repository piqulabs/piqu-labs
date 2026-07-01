import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Website Booking Online Bandung | PIQU Labs",
  description:
    "Jasa website dengan sistem booking online untuk klinik, salon, barbershop & travel di Bandung. Manajemen jadwal, notifikasi WhatsApp, dashboard admin. Mulai Rp1.500.000.",
  alternates: {
    canonical: "https://piqulabs.com/layanan/jasa-website-booking-online",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Jasa Website Booking Online",
  provider: {
    "@type": "ProfessionalService",
    name: "PIQU Labs",
    telephone: "+6285787091529",
    areaServed: "Bandung, Cimahi, Indonesia",
  },
  description:
    "Website dengan sistem booking online: manajemen jadwal, integrasi WhatsApp, dan dashboard admin untuk klinik, salon, dan bisnis jasa.",
  offers: { "@type": "Offer", price: "1500000", priceCurrency: "IDR" },
};

const faqs = [
  {
    q: "Pelanggan booking lewat website, saya dapat notifikasi gimana?",
    a: "Setiap booking baru masuk ke dashboard admin dan otomatis kirim notifikasi ke WhatsApp kamu (atau nomor resepsionis). Jadi nggak perlu refresh halaman terus — langsung tau ada jadwal baru.",
  },
  {
    q: "Bisa atur jam operasional dan hari libur?",
    a: "Bisa. Kamu tentukan hari buka, jam kerja per hari, durasi tiap slot layanan, dan tanggal libur. Slot yang sudah keisi otomatis nggak bisa dipilih pelanggan lagi.",
  },
  {
    q: "Kalau pelanggan mau reschedule atau batal, prosesnya gimana?",
    a: "Admin bisa ubah atau batalkan jadwal lewat dashboard. Untuk pelanggan, kami bisa tambahkan link konfirmasi via WhatsApp supaya komunikasi reschedule tetap personal dan cepat.",
  },
];

export default function JasaWebsiteBookingOnlinePage() {
  return (
    <main className="min-h-screen bg-bg text-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Jasa Website{" "}
          <span className="text-gradient">Booking Online</span>
        </h1>

        <p className="mt-6 text-lg text-content-muted">
          Capek jawab chat &ldquo;ada slot jam berapa?&rdquo; berulang kali?
          PIQU Labs bikinin website dengan sistem booking online — pelanggan pilih
          layanan & jadwal sendiri, kamu kelola semuanya dari dashboard admin.
          Mulai Rp1.500.000, termasuk domain, hosting 1 tahun, dan garansi 30
          hari.
        </p>

        <section className="mt-12 rounded-2xl border border-border-soft bg-surface p-8">
          <h2 className="text-xl font-semibold">Sistem yang kamu dapatkan</h2>
          <ul className="mt-4 space-y-3 text-content-muted">
            <li>• Halaman booking: pilih layanan, tanggal, dan jam tersedia</li>
            <li>• Manajemen jadwal & slot waktu dari dashboard admin</li>
            <li>• Notifikasi otomatis ke WhatsApp setiap ada booking baru</li>
            <li>• Daftar reservasi harian — lihat siapa datang kapan</li>
            <li>• Website responsif + domain & hosting 1 tahun</li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Cocok buat bisnis berbasis janji temu</h2>
          <p className="mt-4 text-content-muted">
            Klinik kecantikan, salon, barbershop, spa, studio yoga, klinik
            gigi, bengkel booking service, atau travel agent yang jadwalkan
            konsultasi trip — semua yang operasionalnya bergantung pada slot
            waktu pasti.
          </p>
          <p className="mt-4 text-content-muted">
            Dengan booking online, pelanggan bisa reservasi jam 11 malam pun
            tanpa nunggu kamu online. Kamu fokus layani, bukan bolak-balik
            jawab pertanyaan jadwal.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Alur kerja singkat</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border-soft bg-surface p-5">
              <p className="font-medium">Sisi pelanggan</p>
              <p className="mt-2 text-sm text-content-muted">
                Buka website → pilih layanan (misalnya &ldquo;Haircut +
                Treatment&rdquo;) → pilih tanggal & jam kosong → isi nama &
                WhatsApp → dapat konfirmasi.
              </p>
            </div>
            <div className="rounded-xl border border-border-soft bg-surface p-5">
              <p className="font-medium">Sisi kamu (admin)</p>
              <p className="mt-2 text-sm text-content-muted">
                Login dashboard → lihat jadwal hari ini & minggu depan → terima
                notifikasi WhatsApp → siapkan slot sebelum pelanggan datang.
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
          href="https://wa.me/6285787091529?text=Halo%20PIQU%20Labs,%20saya%20mau%20konsultasi%20website%20booking%20online"
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
