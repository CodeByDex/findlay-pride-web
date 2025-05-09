import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Findlay Pride - Volunteer", 
  description: "Volunteer opportunities for Findlay Pride.",
}

export default function Home() {
  return (
    <main className="justify-items-center font-[family-name:var(--font-geist-sans)] sm:max-w-5/6 md:max-w-3/4">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>If you are looking to volunteer or are looking for volunteers for Pride Month related activities we'd love to help make the connection.  Please contact us @ <Link href="mailto:volunteer@findlaypride.com" className="underline" >volunteer@findlaypride.com</Link></div>
      </div>
    </main>
  );
}
