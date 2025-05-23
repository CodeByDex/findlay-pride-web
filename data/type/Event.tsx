export type Event = {
    name: string;
    description: string;
    imageURI?: string;
    imageAlt: string;
    startDate: Date;
    endDate: Date;
    location: string;
    organizer?: string
    organizerURI?: string;
    eventURI?: string;
    tags?: string[];
};

export function EventDefaultSort(thingsToSort: Event[]): Event[] {

    thingsToSort = thingsToSort.sort((a, b) => {

        if (a.startDate.getTime() === b.startDate.getTime())
        {
            if (a.endDate.getTime() === b.endDate.getTime())
                return a.name > b.name ? 1 : -1
            else 
                return a.endDate > b.endDate ? 1 : -1;
        }

        return a.startDate > b.startDate ? 1 : -1;

    })

    return thingsToSort;
}