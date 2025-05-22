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
import caLogo from "@public/partnerLogo/CALogo.png"
import wmLogo from "@public/partnerLogo/WMLogo.png"
import jbLogo from "@public/partnerLogo/jbLogo.png"
import sLogo from "@public/partnerLogo/sLogo.png"
import kycLogo from "@public/partnerLogo/kycLogo.png"
import tfoLogo from "@public/partnerLogo/tfoLogo.png"

import Link from "next/link";

export default function Home() {
    return (
        <main className="justify-items-center sm:max-w-5/6 md:max-w-3/4 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h2 className="text-lg text-center min-w-full">Who We Are</h2>
                <div>This site is a collaborative effort between Findlay Citizens and LGBTQ+ Spectrum of Findlay.
                    We welcome collaboration with any groups inspired by fostering community connections. </div>
                <h2 className="text-lg text-center min-w-full">Partners & Participating Organizations</h2>
                <div className="grid md:grid-cols-3 min-w-full gap-5">
                    <div>
                        <div><Image src={fppLogo} width={200} height={200} className='rounded-sm' alt="Findlay Pride Potluck Logo" /></div>
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
                        <div><Image src={kycLogo} width={200} height={200} className='rounded-sm bg-white' alt="Kaleidoscope Youth Center Logo" /></div>
                        <div>Kaleidoscope Youth Center</div>
                        <div><Link href="https://www.kycohio.org/" target="_blank" className="underline">https://www.kycohio.org/</Link></div>
                        <div className="flex items-center gap-5">
                            <div className="">
                                <Link href="https://www.facebook.com/KYCOhio/" target="_blank">
                                    <Image src={fbLogo} alt="facebook" width={30} height={30} className="rounded-full" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div><Image src={sLogo} width={200} height={200} className='rounded-sm bg-white' alt="Lgbtq+ Spectrum of Findlay Logo" /></div>
                        <div>LGBTQ+ Spectrum of Findlay</div>
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
                        <div><Image src={caLogo} width={200} height={200} className='rounded-sm' alt="Coffee Amici Logo" /></div>
                        <div>Coffee Amici</div>
                        <div><Link href="https://coffeeamici.com/" target="_blank" className="underline">https://coffeeamici.com/</Link></div>
                        <div className="flex items-center gap-5">
                            <div className="">
                                <Link href="https://www.facebook.com/coffeeamici" target="_blank">
                                    <Image src={fbLogo} alt="facebook" width={30} height={30} className="rounded-full" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div><Image src={tfoLogo} width={200} height={200} className='rounded-sm' alt="The Findlay Office Logo" /></div>
                        <div>The Findlay Office</div>
                        <div><Link href="https://www.thefindlayoffice.com/" target="_blank" className="underline">https://www.thefindlayoffice.com/</Link></div>
                        <div className="flex items-center gap-5">
                            <div className="">
                                <Link href="https://www.facebook.com/thefindlayoffice" target="_blank">
                                    <Image src={fbLogo} alt="facebook" width={30} height={30} className="rounded-full" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div><Image src={wmLogo} width={200} height={200} className='rounded-sm' alt="Wine Merchant Logo" /></div>
                        <div>Findlay Wine Merchant</div>
                        <div><Link href="https://www.findlaywinemerchant.com/" target="_blank" className="underline">https://www.findlaywinemerchant.com/</Link></div>
                        <div className="flex items-center gap-5">
                            <div className="">
                                <Link href="https://www.facebook.com/findlaywinemerchant" target="_blank">
                                    <Image src={fbLogo} alt="facebook" width={30} height={30} className="rounded-full" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div><Image src={fcLogo} width={200} height={200} className='rounded-sm' alt="First Christian Church Logo" /></div>
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
                        <div><Image src={jbLogo} width={200} height={200} className='rounded-sm' alt="Jonny Burritos Logo" /></div>
                        <div>Jonny Burritos</div>
                        <div><Link href="https://streetfoodfinder.com/jonnyburritos" target="_blank" className="underline">https://streetfoodfinder.com/jonnyburritos</Link></div>
                        <div className="flex items-center gap-5">
                            <div className="">
                                <Link href="https://www.facebook.com/jonnyburritos" target="_blank">
                                    <Image src={fbLogo} alt="facebook" width={30} height={30} className="rounded-full" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div><Image src={mdLogo} width={200} height={200} className='rounded-sm' alt="Findlay Pride Potluck Logo" /></div>
                        <div>Mooney Design</div>
                        <div><Link href="https://mooneybdesign.com/" target="_blank" className='underline'>https://mooneybdesign.com/</Link></div>
                    </div>
                </div>
            </div>
        </main>
    )
}