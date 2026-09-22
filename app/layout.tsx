import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono, Cinzel, EB_Garamond } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Miguel Esteves — Engineer, Author, Founder",
  description:
    "Miguel Esteves — self-taught software engineer, author of Neo-Areticism, and founder of Excelsus Agency. Systems built with discipline; a path built on the same.",
  keywords: [
    "Miguel Esteves",
    "Alejandro Fernandez",
    "Neo-Areticism",
    "Excelsus Agency",
    "Backend Engineer",
    "Software Engineer",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} ${plexMono.variable} ${cinzel.variable} ${garamond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
