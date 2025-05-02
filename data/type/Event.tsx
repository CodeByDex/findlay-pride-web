export type Event = {
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    location: string;
    organizer?: string
    organizerURI?: string;
    eventURI?: string;
    tags?: string[];
};