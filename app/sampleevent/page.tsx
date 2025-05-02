import { Event } from "@/data/type/Event"
import { EventComponent } from "@/component/event"

const events: Event[] = [
    {
        name: "Sample Event",
        description: "This event goes all month long.",
        startDate: new Date(2025, 5, 1, 0, 0),
        endDate: new Date(2025, 5, 30, 23, 59),
        location: "Sample Location",
        organizer: "Sample Organizer",
        organizerURI: "https://example.com/organizer",
        eventURI: "https://example.com/event",
        tags: ["sample", "event"],
        imageURI: "/PrideF.png",
        imageAlt: "Sample Event Image",
    },
    {
        name: "Sample Event2",
        description: "This event goes for a few hours.",
        startDate: new Date(2025, 5, 7,12, 0),
        endDate: new Date(2025, 5, 7, 17, 0),
        location: "Sample Location",
        organizer: "Sample Organizer",
        organizerURI: "https://example.com/organizer",
        eventURI: "https://example.com/event",
        tags: ["sample", "event"],
        imageURI: "/PrideF.png",
        imageAlt: "Sample Event Image",
    },
];

export default function EventPage() {
    return (
        <main className="max-w-3/4">
            {events.map((event, index) => (
                <EventComponent key={index} eventProps={event} />
            ))}
        </main>
    )

}