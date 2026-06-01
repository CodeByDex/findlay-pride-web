import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Findlay Pride - Passport",
  description: "Learn about the Findlay Pride Passport program and how you can participate in local events to earn rewards.",
}

export default function PassportPage() {
    return (
        <main className="sm:max-w-5/6 md:max-w-3/4 flex flex-col gap-[32px]">
           <p>
                You can pick up your passport at any participating location! 
                Complete one or more activities on the passport in exchange for a free raffle ticket at the Pride Mixer at the end of month!
            </p>
            <Image src="/event/2026PridePassportFront.png" alt="Findlay Pride Passport Events" width={800} height={600} className="rounded-sm"/>
            <Image src="/event/2026PridePassportBack.png" alt="Findlay Pride Passport Instructions" width={800} height={600} className="rounded-sm"/>
        </main>
    )
}