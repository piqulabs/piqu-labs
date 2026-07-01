import { ServiceCard } from "./components/home/ServiceCard";
import { PortfolioProjectCard } from "./components/home/PortfolioProjectCard";
import { StatsBand } from "./components/home/StatsBand";
import { TechStackStrip } from "./components/home/TechStackStrip";
import { FaqAccordion } from "./components/FaqAccordion";
import { projects } from "./data/projects";
import { HeroSection } from "./components/motion/HeroSection";
import { MotionCard } from "./components/motion/MotionCard";
import {
  RevealSection,
  StaggerGroup,
  StaggerItem,
} from "./components/motion/primitives";
import { WhatsAppButton } from "./components/motion/WhatsAppButton";
import { GrainOverlay } from "./components/ui/GrainOverlay";
import { SectionHeader } from "./components/ui/SectionHeader";

const services = [
  {
    title: "Landing Page",
    desc: "Satu halaman fokus promosi. Cocok UMKM yang baru go digital dan butuh kehadiran online cepat.",
    href: "/layanan/jasa-pembuatan-website",
    price: "Mulai Rp900.000",
    className: "lg:col-span-7 lg:row-span-2",
    featured: true,
    icon: "monitor" as const,
  },
  {
    title: "Company Profile",
    desc: "Hingga 5 halaman, form kontak, Google Maps, SEO dasar.",
    href: "/layanan/jasa-website-company-profile",
    price: "Mulai Rp1.200.000",
    className: "lg:col-span-5",
    featured: false,
    icon: "document" as const,
  },
  {
    title: "Booking Website",
    desc: "Sistem reservasi online dengan dashboard admin dan notifikasi WhatsApp.",
    href: "/layanan/jasa-website-booking-online",
    price: "Mulai Rp1.500.000",
    className: "lg:col-span-5",
    featured: false,
    icon: "calendar" as const,
  },
  {
    title: "Custom Web App",
    desc: "Kebutuhan khusus di luar paket standar: katalog, membership, atau integrasi API.",
    href: "https://wa.me/6285787091529?text=Halo%20PIQU%20Labs,%20saya%20mau%20diskusi%20custom%20web%20app",
    price: "Konsultasi dulu",
    className: "lg:col-span-7",
    featured: false,
    external: true,
    icon: "code" as const,
  },
];

const pricing = [
  {
    name: "Landing Page",
    price: "Rp900.000",
    popular: false,
    features: [
      "1 halaman landing custom",
      "Domain & hosting 1 tahun",
      "Mobile responsive",
      "Tombol WhatsApp & CTA",
      "Garansi 30 hari",
    ],
  },
  {
    name: "Company Profile",
    price: "Rp1.200.000",
    popular: false,
    features: [
      "Hingga 5 halaman",
      "Form kontak + Google Maps",
      "SEO dasar (meta & struktur)",
      "Domain & hosting 1 tahun",
      "Garansi 30 hari",
    ],
  },
  {
    name: "Company Profile + Booking (Simple)",
    price: "Rp1.500.000",
    popular: true,
    features: [
      "Semua fitur Company Profile",
      "Sistem booking slot waktu",
      "Notifikasi WhatsApp",
      "Dashboard admin sederhana",
      "Garansi 30 hari",
    ],
  },
  {
    name: "Company Profile + Booking (Premium)",
    price: "Rp2.000.000",
    popular: false,
    features: [
      "Semua fitur paket Simple",
      "Multi-layanan & multi-staff",
      "Laporan booking bulanan",
      "Integrasi WhatsApp otomatis",
      "Prioritas support",
    ],
  },
];

const reasons = [
  {
    title: "Garansi 30 Hari",
    body: "Ada bug atau tampilan yang belum sesuai brief? Kami perbaiki tanpa biaya tambahan dalam 30 hari setelah launching.",
  },
  {
    title: "Support Responsif",
    body: "Tanya lewat WhatsApp, biasanya dibalas dalam hari yang sama. Nggak ilang setelah website live.",
  },
  {
    title: "Domain & Hosting 1 Tahun",
    body: "Sudah termasuk di setiap paket. Kamu nggak perlu ribet beli sendiri di tempat lain.",
  },
];

const process = [
  {
    label: "Konsultasi",
    detail: "Ceritain bisnis, target, dan referensi. Kami bantu tentukan paket yang pas.",
  },
  {
    label: "Desain",
    detail: "Mockup layout disetujui dulu sebelum coding. Revisi desain sesuai kesepakatan.",
  },
  {
    label: "Development",
    detail: "Website dibangun, diuji di HP & desktop, konten kamu kami masukkan.",
  },
  {
    label: "Launch",
    detail: "Domain aktif, website online, dan kamu dapat akses admin kalau paketnya butuh.",
  },
];

const faqs = [
  {
    q: "Berapa harga website di PIQU Labs?",
    a: "Landing page mulai Rp900.000, company profile Rp1.200.000, dan paket booking mulai Rp1.500.000. Harga final tergantung kebutuhan tambahan yang kamu minta.",
  },
  {
    q: "Berapa lama pengerjaannya?",
    a: "Landing page biasanya 5-7 hari kerja. Company profile 10-14 hari. Paket booking 14-21 hari. Timeline mulai setelah materi (logo, teks, foto) lengkap.",
  },
  {
    q: "Berapa kali revisi yang didapat?",
    a: "Setiap paket include 2 putaran revisi desain dan 1 putaran revisi setelah development. Revisi di luar itu bisa dibicarakan dengan biaya tambahan yang transparan.",
  },
  {
    q: "Domain dan hosting sudah termasuk?",
    a: "Ya, semua paket sudah include domain (.com atau .id) dan hosting 1 tahun. Setelah tahun pertama, perpanjangan domain & hosting sekitar Rp300.000-500.000 per tahun.",
  },
  {
    q: "Sistem pembayarannya gimana?",
    a: "DP 50% di awal, pelunasan 50% sebelum website di-publish. Transfer bank atau e-wallet. Invoice resmi bisa kami siapkan kalau dibutuhkan.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "PIQU Labs",
  telephone: "+6285787091529",
  areaServed: ["Bandung", "Cimahi"],
  url: "https://piqulabs.com",
  priceRange: "Rp900.000 - Rp2.000.000",
};

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <main className="relative z-[2] min-h-screen bg-bg text-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceJsonLd),
        }}
      />
      <HeroSection />

      <div className="bg-surface">
        <StatsBand />
        <TechStackStrip />
      </div>

      {/* LAYANAN */}
      <RevealSection className="bg-bg px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="01 / LAYANAN"
            title={
              <>
                Layanan <span className="text-gradient">Kami</span>
              </>
            }
            description="Dari landing page sederhana sampai sistem booking. Pilih yang sesuai tahap bisnis kamu sekarang."
          />

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </StaggerGroup>
        </div>
      </RevealSection>

      {/* PORTFOLIO */}
      <RevealSection id="portfolio" className="bg-surface px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="02 / PORTFOLIO"
            title={
              <>
                Portfolio <span className="text-gradient">Pilihan</span>
              </>
            }
            description="Dari klien aktif hingga konsep desain untuk berbagai industri — barbershop, klinik, hingga travel."
          />

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <PortfolioProjectCard key={project.title} project={project} />
            ))}
          </StaggerGroup>
        </div>
      </RevealSection>

      {/* RATE CARD */}
      <RevealSection className="bg-bg px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="03 / HARGA"
            title={
              <>
                Paket & <span className="text-gradient">Harga</span>
              </>
            }
            description="Harga transparan, tanpa biaya tersembunyi. Semua paket sudah termasuk domain, hosting 1 tahun, dan garansi 30 hari."
          />

          <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pricing.map((plan) => (
              <StaggerItem key={plan.name} className="relative h-full">
                {plan.popular && (
                  <span className="absolute -top-3 left-6 z-10 rounded-full bg-bronze px-3 py-0.5 text-xs font-medium text-content">
                    MOST POPULAR
                  </span>
                )}
                <MotionCard
                  className={`relative flex h-full flex-col rounded-2xl border p-6 ${
                    plan.popular
                      ? "shimmer-border border-bronze bg-surface-2 shadow-[0_0_0_1px_rgba(169,113,63,0.2)] md:-mt-2 md:mb-2 md:py-8"
                      : "border-border-soft bg-surface"
                  }`}
                >
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-2 text-2xl font-bold text-bronze-light">
                    {plan.price}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5 text-sm text-content-muted">
                    {plan.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <span className="text-bronze" aria-hidden>
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <WhatsAppButton
                    href="https://wa.me/6285787091529?text=Halo%20PIQU%20Labs,%20saya%20tertarik%20paket%20website"
                    className={`mt-8 flex h-11 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                      plan.popular
                        ? "bg-bronze text-content hover:bg-bronze-dark"
                        : "border border-border-soft hover:bg-surface-2"
                    }`}
                  >
                    Pilih Paket Ini
                  </WhatsAppButton>
                </MotionCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </RevealSection>

      {/* KENAPA PIQU */}
      <RevealSection className="bg-surface px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <SectionHeader
                eyebrow="04 / KENAPA PIQU"
                title={
                  <>
                    Kenapa <span className="text-gradient">PIQU Labs</span>
                  </>
                }
                description="Bukan cuma jadiin website, tapi partner yang bantu bisnis lokal tampil profesional di internet."
              />
            </div>
            <div className="space-y-6 lg:col-span-3">
              {reasons.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex gap-6 rounded-2xl border border-border-soft bg-bg p-6 ${i === 0 ? "lg:ml-8" : i === 2 ? "lg:mr-8" : ""}`}
                >
                  <span className="text-3xl font-bold text-bronze/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-content-muted">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      {/* PROSES KERJA */}
      <RevealSection className="bg-bg px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="05 / PROSES"
            title={
              <>
                Proses <span className="text-gradient">Kerja</span>
              </>
            }
            description="Empat langkah dari ide sampai website live. Tanpa ribet, semua via WhatsApp."
          />

          <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border-soft bg-border-soft sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <li key={step.label} className="bg-surface p-6 lg:p-8">
                <span className="text-sm font-medium text-bronze-light">
                  {step.label}
                </span>
                <p className="mt-3 text-content-muted">{step.detail}</p>
                {i < process.length - 1 && (
                  <span
                    className="mt-4 hidden text-bronze/30 lg:block"
                    aria-hidden
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </RevealSection>

      {/* FAQ */}
      <RevealSection className="bg-surface px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            eyebrow="06 / FAQ"
            title={
              <>
                Pertanyaan <span className="text-gradient">Umum</span>
              </>
            }
            description="Belum ketemu jawabannya? Langsung chat aja, gratis."
          />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </RevealSection>

      {/* CTA AKHIR */}
      <RevealSection className="bg-bg px-6 py-16 md:py-24">
        <div className="relative mx-auto max-w-4xl">
          <div
            aria-hidden
            className="section-glow absolute left-1/2 top-0 h-64 w-full max-w-lg -translate-x-1/2"
          />
          <div className="relative rounded-3xl border border-border-soft bg-surface px-8 py-16 text-center sm:px-16">
            <SectionHeader
              eyebrow="07 / KONSULTASI"
              title={
                <>
                  Siap Bikin Website{" "}
                  <span className="text-gradient">Profesional</span>?
                </>
              }
              description="Ceritain kebutuhan bisnis kamu. Konsultasi gratis, tanpa komitmen. Kami bantu pilih paket yang paling masuk akal."
              align="center"
            />
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <WhatsAppButton
              href="https://wa.me/6285787091529?text=Halo%20PIQU%20Labs,%20saya%20mau%20konsultasi%20website"
              className="flex h-12 items-center justify-center rounded-full bg-bronze px-8 font-medium text-content transition-colors hover:bg-bronze-dark"
            >
              Konsultasi Gratis via WhatsApp
            </WhatsAppButton>
            <a
              href="https://instagram.com/getpiqu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center rounded-full border border-border-soft px-8 font-medium transition-colors hover:bg-surface-2"
            >
              @getpiqu
            </a>
          </div>
          </div>
        </div>
      </RevealSection>
    </main>
    </>
  );
}
