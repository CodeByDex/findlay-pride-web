import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Findlay Pride - About", 
  description: "Who we are and what we do.",
}

import Image from "next/image";
import FindlayPrideMembers from "../../public/FindlayPrideMembers.jpg"

export default function Home() {
    return (
        <main className="justify-items-center sm:max-w-5/6 md:max-w-3/4 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h2 className="text-lg text-center min-w-full">Who We Are</h2>
                <div>We are a group of Findlay Citizens committed to helping Findlay grow as a place of belonging and opportunity.  As a grassroots effort, and while not formally affiliated with LGBTQ+ Spectrum of Findlay or Kaleidoscope Youth Center, we welcome collaboration with any groups inspired by fostering community connections. </div>
                <h2 className="text-lg text-center min-w-full">Vision</h2>
                <div>A Findlay where every person feels welcomed, valued, and empowered to contribute to a stronger, more connected community.</div>
                <h2 className="text-lg text-center min-w-full">Mission</h2>
                <div>In 2025, our mission is to take Pride in Findlay back to the basics of bringing the community together to build relationships and create visibility to the welcoming spirit that exists in Findlay, Ohio for everyone that calls Findlay home.</div>
                <h2 className="text-lg text-center min-w-full">Coalition</h2>
                <div className="grid md:grid-cols-2 min-w-full">
                    <p>Chris Caldwell</p>
                    <p>Peggy Dillon</p>
                    <p>Matt Frost</p>
                    <p>Kane Holman</p>
                    <p>Maria Iafelice - Co-coordinator</p>
                    <p>Amber Kear</p>
                    <p>Tina McQueen</p>
                    <p>Emily Miller</p>
                    <p>Brandon Mooney</p>
                    <p>Jon Perkowski - Co-coordinator</p>
                    <p>Ryan Spath - Co-coordinator</p>
                    <p>David Wishart</p>
                </div>
                <Image src={FindlayPrideMembers} alt="Findlay Pride Coalition Members" className="rounded-lg" width={2500} height={550} />
            </div>
        </main>
    )
}