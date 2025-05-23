
import Link from "next/link";
import events from "@/data/eventDB";
import { EventComponent } from "@/component/eventComponent"
import { Event, EventDefaultSort } from "@/data/type/Event";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Findlay Pride - Volunteer",
  description: "Volunteer opportunities for Findlay Pride.",
}

function getEventsToDisplay(): Event[] {
  const currentDate = new Date();

  var displayEvents: Event[] = events.filter((event) => {
    return (event.startDate >= currentDate && event.tags?.includes("Volunteer Opt"))
  });
  console.log(displayEvents)
  return displayEvents;
}

export default function Home() {
  return (
    <main className="justify-items-center font-[family-name:var(--font-geist-sans)] sm:max-w-5/6 md:max-w-3/4">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>
          <p>If you are looking to volunteer or are looking for volunteers for Pride Month related activities we'd love to help make the connection.  Please contact us @ <Link href="mailto:volunteer@findlaypride.com" className="underline" >volunteer@findlaypride.com</Link></p>
          <p>Here are upcoming events that have volunteer opportunities.</p>
        </div>
        <div>
          <div className="flex flex-col gap-[32px]">
            {EventDefaultSort(getEventsToDisplay()).map((event, index) => (
              <EventComponent key={index} eventProps={event} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
