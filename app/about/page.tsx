import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Findlay Pride - About",
    description: "Who we are and what we do.",
}

import { PartnerComponent } from "@/component/partnerComponent";
import { PartnerDefaultSort } from "@/data/type/Partner";

import partnersFromFile from "@data/partnerDB";

export default function Home() {
    return (
        <main className="justify-items-center sm:max-w-5/6 md:max-w-3/4 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h2 className="text-lg text-center min-w-full">Who We Are</h2>
                <div>This site is a collaborative effort between Findlay Citizens and LGBTQ+ Spectrum of Findlay.
                    We welcome collaboration with any groups inspired by fostering community connections. </div>
                <h2 className="text-lg text-center min-w-full">Partners & Participating Organizations</h2>
                <div className="grid md:grid-cols-3 min-w-full gap-5">
                    {PartnerDefaultSort(partnersFromFile).map((partner, index) => (
                        <PartnerComponent key={index} partnerProps={partner} />
                    ))}
                </div>
            </div>
        </main>
    )
}