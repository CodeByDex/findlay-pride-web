import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Findlay Pride - About",
    description: "Who we are and what we do.",
}
import { PartnerComponent } from "@/component/partnerComponent";
import { Partner, PartnerDefaultSort } from "@/data/type/Partner";

const partners: Partner[] = [
    {
        name: "Findlay Pride Potluck",
        socials: {
            facebook: undefined,
            bluesky: undefined,
            linkedIn: undefined,
            instagram: undefined
        },
        highlight: true
    },
    {
        name: "LGBTQ+ Spectrum",
        socials: {
            facebook: undefined,
            bluesky: undefined,
            linkedIn: undefined,
            instagram: undefined
        },
        highlight: true
    }
]

export default function Home() {
    return (
        <main className="justify-items-center sm:max-w-5/6 md:max-w-3/4 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="grid md:grid-cols-3 min-w-full gap-5">
                    {PartnerDefaultSort(partners).map((partner, index) => (
                        <PartnerComponent key={index} partnerProps={partner} />
                    ))}
                </div>
            </div>
        </main>
    )
}