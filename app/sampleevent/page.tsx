import { Event } from "@/data/type/Event"
import { EventComponent } from "@/component/event"
import eventsFromFile from "@/data/eventDB";

const events: Event[] = [
    {
        name: "Pride Weekend Celebration",
        description: "Mark your calendars for Pride Weekend in Findlay! Join us June 6–8 for events with Findlay Brewing Co. and False Chord Brewing! Stay tuned and get ready to celebrate!",
        startDate: new Date(2025, 5, 6, 0, 0),
        endDate: new Date(2025, 5, 8, 23, 59),
        location: "Findlay Brewing Company and False Chord",
        organizer: "LGBTQ+ Spectrum of Findlay",
        organizerURI: "facebook.com/lgbtqSpectrumofFindlay",
        tags: [],
        imageURI: "/PrideF.png",
        imageAlt: "Sample Event Image",
    },
    {
        name: "Pride Month Drink Special",
        description: "Stop in all month long to check out our drink specials for Pride Month!",
        startDate: new Date(2025, 5, 1, 0, 0),
        endDate: new Date(2025, 5, 29, 23, 5),
        location: "Wine Merchant",
        organizer: "Wine Merchant",
        organizerURI: "facebook.com/findlaywinemerchant",
        imageURI: "/PrideF.png",
        imageAlt: "Sample Event Image",
    },
    {
        name: "Pride Month Coffee Special",
        description: "Check out Amici for fun drink specials, check back soon for more details!",
        startDate: new Date(2025, 5, 1, 0, 0),
        endDate: new Date(2025, 5, 30, 23, 5),
        location: "Coffee Amici",
        organizer: "Coffee Amici",
        organizerURI: "facebook.com/coffeeamici",
        imageURI: "/PrideF.png",
        imageAlt: "Sample Event Image",
    },
];

export default function EventPage() {
    return (
        <main className="sm:max-w-5/6 md:max-w-3/4">
            {events.sort((a, b) => {

                if (a.startDate.getTime() === b.startDate.getTime()) 
                    return a.endDate > b.endDate ? 1 : -1;

                return a.startDate > b.startDate ? 1 : -1;
            }).map((event, index) => (
                <EventComponent key={index} eventProps={event} />
            ))}
        </main>
    )

}