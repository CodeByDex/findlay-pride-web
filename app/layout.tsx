import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

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
  description: "Creating strong communities"
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
            <Image src="/PrideF.png" alt={"the letter f stylized like a pride flag"} width={50} height={50} className="rounded-full" />
          </Link>
          <div className="text-lg ml-5">
            Findlay Pride
          </div>
          <div className="grow"></div>
          <div><Link href="/about">About</Link></div>
        </header>
        {children}
        <footer className="p-5">
          <div>
            <Link href="/about">About</Link>
          </div>
          <div className="flex items-center">
            <div className="">
              Site by <code>CodeByDex</code> contribute to it on <Link href="https://github.com/CodeByDex/findlay-pride-web" className="underline">Github</Link>.
            </div>
            <div className="ml-5">
              <Link href="https://www.facebook.com/FindlayPride" >
                <Image src="/icons8-facebook.svg" alt="facebook" width={30} height={30} className="rounded-full" />
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
