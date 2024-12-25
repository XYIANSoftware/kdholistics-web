import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { Inter } from 'next/font/google';
// import './globals.scss';
import 'primeicons/primeicons.css';
// import '/node_modules/primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'primereact/resources/themes/md-dark-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import Script from 'next/script';
import { PrimeReactProvider } from 'primereact/api';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "KD Holistics",
  description: "Your Holistic Health Professional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PrimeReactProvider>
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body></PrimeReactProvider>
    </html>
  );
}
