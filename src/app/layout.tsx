import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./component/navbar";
import styles from './ui/page.module.css';
import ClientSessionProvider from "./component/ClientSessionProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sistersmash",
  description: "sistersmash is a community-driven platform for sharing and discovering content related with smashing your sisters.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${styles.body} ${geistSans.variable} ${geistMono.variable}`}
      >
        <ClientSessionProvider>
        <Nav />
        {children}
        </ClientSessionProvider>
      </body>
    </html>
  );
}
