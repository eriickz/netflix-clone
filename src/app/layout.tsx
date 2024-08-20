import "./globals.css";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";

const netflixSans400 = localFont({
  src: "../assets/fonts/NetflixSans_400.woff2",
  weight: "400",
  style: "normal",
  variable: "--netflix-sans_400",
})

const netflixSans500 = localFont({
  src: "../assets/fonts/NetflixSans_500.woff2",
  weight: "500",
  style: "normal",
  variable: "--netflix-sans_500",
})

const netflixSans900 = localFont({
  src: "../assets/fonts/NetflixSans_900.woff2",
  weight: "900",
  style: "normal",
  variable: "--netflix-sans_900",
})

export const metadata: Metadata = {
  title: "Netflix - Watch TV Shows Online, Watch Movies Online",
  description: "Watch TV Shows Online, Watch Movies Online",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="pqJAamb2qQhQWW7JHh4r0Pi_RgIYy7YSiNFkRXU8f5g" />
      <body className={`${netflixSans400.variable} ${netflixSans500.variable} ${netflixSans900.variable} bg-choose-profile-background overflow-x-hidden`}>{children}</body>
    </html>
  );
}
