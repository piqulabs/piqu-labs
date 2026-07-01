import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://piqulabs.com"),
  title: {
    default: "PIQU Labs — Jasa Pembuatan Website Profesional Bandung",
    template: "%s | PIQU Labs",
  },
  description:
    "Jasa pembuatan website profesional untuk bisnis di Bandung & sekitarnya. Landing page, company profile, hingga sistem booking. Mulai Rp900.000, sudah termasuk domain & hosting 1 tahun.",
  keywords: [
    "jasa pembuatan website",
    "jasa website Bandung",
    "jasa bikin website",
    "website company profile",
    "website booking online",
  ],
  openGraph: {
    title: "PIQU Labs — Jasa Pembuatan Website Profesional",
    description:
      "Website profesional untuk bisnis yang lebih dipercaya. Mulai Rp900.000, termasuk domain & hosting.",
    url: "https://piqulabs.com",
    siteName: "PIQU Labs",
    type: "website",
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
