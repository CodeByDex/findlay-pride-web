import { Event } from "./type/Event";

const events: Event[] = [
//    {
//         name: "Event Title",
//         description: `Event Description
// Multiline Supported`,
//         startDate: new Date(2025, 5, 6, 14, 0),
//         endDate: new Date(2025, 5, 29, 19, 0),
//         location: "Some Location - Some Address",
//         organizer: "Some Organizer",
//         organizerURI: "https://some.url",
//         eventURI: "https://some.url/event",
//         imageURI: "/partnerLogo/some.png",
//         imageAlt: "Some Logo",
//         tags: [],
//         volunteerURI: "https://some.url/volunteer"
//     },
{
    name: "Magestik's Nightmare on Main Street - United's 13th Annual Drag Show",
    description: `Enjoy a fun evening featuring drag performances by Magestik and 7 other talented performers along with student performances!
    
    This is the University of Findlay's GSA, United's 13th Annual Drag Show! A portion of the evening's proceeds will be benefit the Ohio Equal Rights Movement. 

    Tickes are $5 for community members and $1 for University students who present their student ID at the door.
    `,
        startDate: new Date(2026, 2, 13, 19, 0),
        endDate: new Date(2026, 2, 29, 22, 0),
        location: "The Univiersity of Findlay - Alumni Memorial Union, 164 Frazer St. Findlay, OH 45840",
        organizer: "United University of Findlay",
        organizerURI: "https://www.facebook.com/UnitedUF",
        imageURI: "/event/unitedDragShow.png",
        imageAlt: "A pair of eyes on a black background with the text 'Magestik's Nightmare on Main Street - United's 13th Annual Drag Show'",
        tags: [],
},
];

export default events;