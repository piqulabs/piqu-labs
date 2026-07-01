export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl: string;
  tag: string | null;
};

export const projects: Project[] = [
  {
    title: "Senshi Barbershop",
    category: "Barbershop · Booking",
    description:
      "Barbershop dengan branding kuat, katalog layanan, profil cabang, dan order langsung via WhatsApp.",
    image: "/portfolio/senshi.png",
    liveUrl: "https://senshi-barbershop.vercel.app/",
    tag: "Klien Aktif",
  },
  {
    title: "Lumière",
    category: "Klinik Kecantikan · Konsultasi",
    description:
      "Profil klinik estetik medis, daftar perawatan, profil dokter, dan penjadwalan konsultasi online.",
    image: "/portfolio/lumiere.png",
    liveUrl: "https://beauty-clinic-demo-ecru.vercel.app/",
    tag: null,
  },
  {
    title: "Nusantara Trip",
    category: "Agen Wisata · Paket Trip",
    description:
      "Website agen wisata dengan open trip, paket wisata, galeri destinasi, dan konsultasi via WhatsApp.",
    image: "/portfolio/nusantara-trip.png",
    liveUrl: "https://travel-tour-agency-jade.vercel.app/",
    tag: null,
  },
  {
    title: "Travel Bandung-Jakarta Trans",
    category: "Travel & Shuttle · Reservasi",
    description:
      "Shuttle harian Bandung-Jakarta plus paket wisata rombongan, dengan reservasi kursi lewat WhatsApp.",
    image: "/portfolio/travel-bjt.png",
    liveUrl: "https://travel-web-pearl.vercel.app/",
    tag: null,
  },
];
