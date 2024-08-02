import type { Metadata } from "next";
import "./globals.css";

import { Open_Sans } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

//👇 Configure our font object
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Retrox.io",
  description: "Modern reliability made simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children}</body>
      <GoogleAnalytics gaId="G-5MRPXLM12N" />
    </html>
  );
}
