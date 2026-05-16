import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leths Muay Thai Gym | Amsterdam",
  description:
    "Authentic Muay Thai discipline in Amsterdam. From beginners to fighters. The art of 8 limbs.",
  keywords: [
    "Muay Thai",
    "Amsterdam",
    "Kickboxing",
    "Martial Arts",
    "Gym",
    "Training",
    "Fight Camp",
  ],
  authors: [{ name: "Leths Muay Thai Gym" }],
  openGraph: {
    title: "Leths Muay Thai Gym | Amsterdam",
    description: "Real Muay Thai. No shortcuts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
