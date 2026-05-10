import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AUREO STUDIO",
  description:
    "Experiencias digitales premium para bodas, cumpleaños y eventos exclusivos.",

  keywords: [
    "Invitaciones digitales",
    "Bodas premium",
    "Invitaciones cinematicas",
    "AUREO STUDIO",
    "Eventos digitales",
  ],

  openGraph: {
    title: "AUREO STUDIO",
    description:
      "Experiencias digitales premium con diseño cinematográfico.",
    url: "https://aureostudio.com",
    siteName: "AUREO STUDIO",
    images: [
      {
        url: "/images/gallery-1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}