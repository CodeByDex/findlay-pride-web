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
                    <div className='response'>
                        Spectrum (and now/soon to be KYC) has historically led the effort for Pride events in Findlay, and they are still planning a “<Link href="https://www.facebook.com/share/p/197TNoZQnz/" target='_blank' className='underline'>Mini Pride</Link>” in June. 
                        If you are interested in helping the community through charitable means please consider donating to KYC at: <Link href="https://kyc.app.neoncrm.com/forms/online-giving" target="_blank" className='underline'>https://kyc.app.neoncrm.com/forms/online-giving</Link>.
                        This website's goal is to show appreciation for every business and organization that is creating an engaging and welcoming environment for Findlay citizens in June. 
                    </div>
                </div>
                <div>
                    <div className='question'>What’s the catch?</div>
                    <div className='response'>No catch! We want to support businesses and organizations that support the community - simple as that! 
                        There are no financial obligations to be participate we just want to show appreciation for the support you are showing the Findlay community.  
                        This website is 100% volunteer managed. </div>
                </div>
                <div>
                    <div className='question'>Who are you?</div>
                    <div className='response'>We are a collaborative effort between a group of Findlay citizens and Spectrum.</div>
                </div>
                <div>
                    <div className='question'>What information should I include in my Pride Month offering?</div>
                    <div className='response'><p>Preview other business and orginizational offerings at <Link href="/events" className='underline'>FindlayPride.com/events</Link>. Please send details to <Link href="mailto:event@findlaypride.com" className='underline'>event@findlaypride.com</Link></p>
                        <ul className='list-disc pl-4'>
                            <li>Link to your socials</li>
                            <li>Description of your Event or Special(s)</li>
                            <li>Start Date/Time & End Date/Time</li>
                            <li>Location</li>
                            <li>Link to event (if available)</li>
                            <li>Graphic(s)</li>
                            <li>Information on if/how you plan promote so we can coordinate with you</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='question'>What about Pride in the Park?</div>
                    <div className='response'>We encourage you to check out the latest information regarding Pride in the Park from <Link href="https://www.facebook.com/lgbtqSpectrumofFindlay" target='_blank' className='underline'>Spectrum</Link> on their socials. The latest information we have from Spectrum is this event is postponed until 9/6. </div>
                </div>
            </div>
        </main>
    )
}