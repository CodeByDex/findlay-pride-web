import './styles.css';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Findlay Pride - FAQ", 
  description: "Frequent questions about Findlay Pride.",
}

export default function Home() {
    return (
        <main className="justify-items-center sm:max-w-5/6 md:max-w-3/4 gap-16  font-[family-name:var(--font-geist-sans)]">
            <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h2 className="text-lg text-center min-w-full">Frequently Asked Questions</h2>
                {/* <div>
                    <div className='question'></div>
                    <div className='response'></div>
                </div> */}
                <div>
                    <div className='question'>I thought LGBTQ+ Spectrum of Findlay (Spectrum) and/or Kaleidoscope Youth Center (KYC) planned Pride in Findlay? </div>
                    <div className='response'>Spectrum (and now/soon to be KYC) has historically led the effort for Pride events in Findlay, and they are still planning some events with a small selection of Findlay businesses in June. We welcome you to work with them, especially if you are interested in doing any kind of charitable fundraising.  We plan to highlight the work Spectrum is doing, and we additionally want to help show appreciation for every business that is creating an engaging and welcoming environment for Findlay citizens in June.</div>
                </div>
                <div>
                    <div className='question'>What’s the catch?</div>
                    <div className='response'>No catch! We want to support businesses that support the community - simple as that! We are not fundraising or requesting funds to accomplish our goals; this is a 100% volunteer and grassroots effort.</div>
                </div>
                <div>
                    <div className='question'>Why are you doing this?</div>
                    <div className='response'>In 2025, our mission is to take Pride in Findlay back to the basics of bringing the community together to build relationships and create visibility to the welcoming spirit that exists in Findlay, Ohio for everyone that calls Findlay home.</div>
                </div>
                <div>
                    <div className='question'>Who are you?</div>
                    <div className='response'>We are a group of Findlay citizens committed to helping Findlay grow as a place of belonging and opportunity. As a grassroots effort not formally affiliated with Spectrum or KYC, we welcome collaboration with any and all groups inspired by fostering community connections. At the time of writing, our leadership includes: Ryan Spath, Maria Iafelice, Jon Perkowski, and nearly a dozen additional volunteers.  You can learn more about us at <Link href="/about" className='underline'>FindlayPride.com/about</Link>.</div>
                </div>
                <div>
                    <div className='question'>What information should I include in my Pride Month offering?</div>
                    <div className='response'><p>Preview other business offerings at <Link href="/events" className='underline'>FindlayPride.com/events</Link>. Please send details to <Link href="mailto:event@findlaypride.com" className='underline'>event@findlaypride.com</Link>
                            <ul className='list-disc pl-15'>
                                <li>Link to your socials</li>
                                <li>Description of your Event or Special(s)</li>
                                <li>Start Date/Time & End Date/Time</li>
                                <li>Location</li>
                                <li>Link to event (if available)</li>
                                <li>Graphic(s)</li>
                                <li>Information on if/how you plan promote so we can coordinate with you</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}