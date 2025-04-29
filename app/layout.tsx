import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

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
        <header className="p-4 flex items-center">
            <Image src="/PrideF.png" alt={"the letter f stylized like a pride flag"} width={50} height={50} className="rounded-full" />
            <div className="text-lg ml-5">
              Findlay Pride
            </div>
        </header>
        {children}
        <footer>

        </footer>
      </body>
    </html>
  );
}
