import Image from "next/image";
import Link from "next/link";
import events from "@/data/eventDB";
import { EventComponent } from "@/component/event"
import { Event } from "@/data/type/Event";

function getEventsToDisplay(): Event[] {
  const currentDate = new Date(); // Set to the current date for testing

  var displayEvents: Event[] = events.filter((event) => {
    return (
      //Happening now
      (event.startDate <= currentDate && event.endDate >= currentDate) || 
      //Happening in the next 72 hours
      (event.startDate > currentDate && (event.startDate.getTime() - currentDate.getTime()) < (1000 * 60 * 60 * 72))
    );
  });

  //If there are no upcoming events, get all events that are in the future
  if (displayEvents.length === 0) {
    displayEvents = events.filter((event) => {
      return event.startDate >= currentDate;
    });
  }

  return displayEvents;
}

export default function Home() {
  return (
    <main className="justify-items-center gap-16 font-[family-name:var(--font-geist-sans)] sm:max-w-5/6 md:max-w-3/4">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div>We are currently in the planning stages and reaching out to local businesses and organizations so you may see one of volunteers soon!  If you have an idea or are planning a Pride Month event we would love to hear about it @ <Link href="mailto:event@findlaypride.com" className="underline" >event@findlaypride.com</Link></div>
        <div className="flex flex-col gap-[32px]">
          {getEventsToDisplay().sort((a, b) => {
            
            if (a.startDate.getTime() === b.startDate.getTime()) 
              return a.endDate > b.endDate ? 1 : -1;

          return a.startDate > b.startDate ? 1 : -1;

          }).map((event, index) => (
            <EventComponent key={index} eventProps={event} />
          ))}
        </div>
      </div>
    </main>
  );
}
