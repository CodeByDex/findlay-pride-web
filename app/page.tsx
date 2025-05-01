import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>We are currently in the planning stages.  If you have an idea or are planning a Pride Month event we would love to hear about it @ <Link href="mailto:event@findlaypride.com" className="underline" >event@findlaypride.com</Link></div>
      </div>
    </main>
  );
}
