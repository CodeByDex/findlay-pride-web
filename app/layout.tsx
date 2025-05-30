import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import siteLogo from "../public/PrideF.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Findlay Pride",
  description: "Creating strong communities. Your local source for all things Pride related happening in Findlay, Ohio.",
  keywords: [
    "Findlay", "Ohio", "Findlay, Ohio", "Findlay, OH", "OH", "45840", "hancock county", "hancock", "county",
    "Pride", "LGBTQ+", "lesbbian", "gay", "bisexual", "bi", "trans", "transgender", "queer", "non-binary",
    "events", "community", "engagement"
  ],
  authors: [
    {
      name: "Ryan Spath",
      url: "https://github.com/CodeByDex"
    }, {
      name: "Maria Iafelice",
      url: "https://www.meiafelice.com/"
    }],
  alternates: {
    languages: {
      "en-US": "https://findlaypride.com",
    },
  },
  openGraph: {
    title: "Findlay Pride",
    description: "Creating strong communities. Your local source for all things Pride related happening in Findlay, Ohio.",
    url: "https://findlaypride.com",
    siteName: "Findlay Pride",
    images: [
      {
        url: "/PrideF.png",
        width: 800,
        height: 600,
      },
    ],
  },
  icons: {
    icon: "/PrideF.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-5 flex items-center">
          <Link href="/" className="flex items-center">
            <Image src={siteLogo} alt={"the letter f stylized like a pride flag"} width={50} height={50} className="rounded-full" />
          </Link>
          <div className="text-lg ml-5">
            Findlay Pride
          </div>
          <div className="grow"></div>
          <div><Link className="ml-5" href="/events">Events</Link></div>
          <div><Link className="ml-5" href="/volunteer">Volunteer</Link></div>
          <div><Link className="ml-5" href="/about">About</Link></div>
        </header>
        {children}
        <footer className="p-5">
          <div className="flex items-center gap-5">
          {/* </div>
          <div className="flex items-center gap-5"> */}
            <div><Link href="/faq">FAQ</Link></div>
            <div><Link href="mailto:contact@findlaypride.com" className="underline">contact@findlaypride.com</Link></div>
          </div>
          <div className="flex items-center gap-5 text-sm">
            <div className="">
              Site by <code>CodeByDex</code> contribute to it on <Link href="https://github.com/CodeByDex/findlay-pride-web" className="underline" target="_blank">Github</Link>.
            </div>
            <div className="">
              Designs and other contributions by <Link href="https://www.meiafelice.com/" className="underline" target="_blank">Maria Iafelice</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
