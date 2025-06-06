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
    volunteerURI?: string;
};

export function EventDefaultSort(thingsToSort: Event[]): Event[] {

    const currentDate = new Date();
    //const currentDate = new Date(2025, 5, 6, 17, 5);


    thingsToSort = thingsToSort.sort((a, b) => {

        //both events are actively happening right now
        if (a.startDate <= currentDate && b.startDate <= currentDate
            && a.endDate > currentDate && b.endDate >= currentDate
        )
        {
            if (a.startDate.getTime() === b.startDate.getTime())
            {
                if (a.endDate.getTime() === b.endDate.getTime())
                {
                    return Math.random() - 0.5
                }
                return a.endDate > b.endDate ? 1 : -1
            }

            return a.startDate < b.startDate ? 1 : -1
        } 
        //Both events are starting at the same time
        else if (a.startDate.getTime() === b.startDate.getTime())
        {
            if (a.endDate.getTime() === b.endDate.getTime())
                    return Math.random() - 0.5
            else 
                return a.endDate > b.endDate ? 1 : -1;
        }

        return a.startDate > b.startDate ? 1 : -1;

    })

    return thingsToSort;
}