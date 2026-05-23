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
                    <div className='question'>What’s the catch?</div>
                    <div className='response'>No catch! We want to support businesses and organizations that support the community - simple as that! 
                        There are no financial obligations to be participate we just want to show appreciation for the support you are showing the Findlay community.  
                        This website is 100% volunteer managed. </div>
                </div>
                <div>
                    <div className='question'>Why are you doing this?</div>
                    <div className='response'>Our mission is to take Pride in Findlay back to the basics of bringing the community together to build relationships and create visibility to the welcoming spirit that exists in Findlay, Ohio for everyone that calls Findlay home. </div>
                </div>
                <div>
                    <div className='question'>Who are you?</div>
                    <div className='response'>We are a group of Findlay citizens interested in making Findlay a better community for everyone!.</div>
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
                    <div className='question'>Is Findlay Pride accepting financial donations?</div>
                    <div className='response'>Findlay Pride is a grassroots community initiative and is not a 501(c)(3) organization; therefore, we do not accept donations. If you would like to provide support to the LGBTQ+ community, we encourage you to donate to established organizations such as Equitas Health or The Buckeye Flame. For those interested in supporting local youth, please consider directing contributions to the Findlay High School GSA or The Loft (Focus Recovery and Wellness Community).</div>
                </div>
            </div>
        </main>
    )
}