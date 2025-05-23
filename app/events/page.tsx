import { EventComponent } from "@/component/eventComponent"
import events from "@/data/eventDB";
import Link from "next/link";
import { EventDefaultSort } from "@/data/type/Event";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Findlay Pride - Events", 
  description: "Listing of events happening in Findlay, Ohio for Pride Month.",
}

export default function EventPage() {
    return (
        <main className="sm:max-w-5/6 md:max-w-3/4 flex flex-col gap-[32px]">
            <div className="">
                If you'd like to add your event please contact us @ <Link href="mailto:event@findlaypride.com" className="underline" >event@findlaypride.com</Link>
            </div>
            <div className="flex flex-col gap-[32px]">
                {EventDefaultSort(events).map((event, index) => (
                    <EventComponent key={index} eventProps={event} />
                ))}
            </div>

        </main>
    )

}