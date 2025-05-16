import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Findlay Pride - About",
    description: "Who we are and what we do.",
}

import Image from "next/image";
import fbLogo from "@public/icons8-facebook.svg";
import bsLogo from "@public/icons8-bluesky.svg";
import fcLogo from "@public/partnerLogo/firstChristian.png"
import fppLogo from "@public/partnerLogo/fppLogo.svg"
import mdLogo from "@public/partnerLogo/mdLogo.png"

import Link from "next/link";

export default function Home() {
    return (
        <main className="justify-items-center sm:max-w-5/6 md:max-w-3/4 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h2 className="text-lg text-center min-w-full">Who We Are</h2>
                <div>This site is a collaborative effort between Findlay Citizens and Spectrum LGBTQ+ of Findlay.
                    We welcome collaboration with any groups inspired by fostering community connections. </div>
                <h2 className="text-lg text-center min-w-full">Partners & Participating Organizations</h2>
                <div className="grid md:grid-cols-2 min-w-full gap-5">
                    <div>
                        <div><Image src={fppLogo} width={200} height={200} alt="Findlay Pride Potluck Logo" /></div>
                        <div>Findlay Pride Potluck</div>
                        <div className="flex items-center gap-5">
                            <div className="">
                                <Link href="https://facebook.com/FindlayPride" target="_blank">
                                    <Image src={fbLogo} alt="facebook" width={30} height={30} className="rounded-full" />
                                </Link>
                            </div>
                            <div className="">
                                <Link href="https://bsky.app/profile/findlaypride.com" target="_blank">
                                    <Image src={bsLogo} alt="bluesky" width={30} height={30} className="rounded-full" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>Spectrum LGBTQ+ of Findlay</div>
                        <div><Link href="https://spectrumoffindlaylgbt.org/" target="_blank" className="underline">https://spectrumoffindlaylgbt.org/</Link></div>
                        <div className="flex items-center gap-5">
                            <div className="">
                                <Link href="https://www.facebook.com/lgbtqSpectrumofFindlay" target="_blank">
                                    <Image src={fbLogo} alt="facebook" width={30} height={30} className="rounded-full" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div><Image src={fcLogo} width={200} height={200} alt="First Christian Church Logo" /></div>
                        <div>First Christian Church</div>
                        <div><Link href="https://www.fccfindlay.org" target="_blank" className="underline">www.fccfindlay.org</Link></div>
                        <div className="flex items-center gap-5">
                            <div className="">
                                <Link href="https://www.facebook.com/FindlayFCC/" target="_blank">
                                    <Image src={fbLogo} alt="facebook" width={30} height={30} className="rounded-full" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div><Image src={mdLogo} width={200} height={200} alt="Findlay Pride Potluck Logo" /></div>
                        <div>Mooney Design</div>
                        <div><Link href="https://mooneybdesign.com/" target="_blank" className='underline'>https://mooneybdesign.com/</Link></div>
                    </div>
                </div>
            </div>
        </main>
    )
}