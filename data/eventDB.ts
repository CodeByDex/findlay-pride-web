import { Event } from "./type/Event";

const events: Event[] = [
//    {
//         name: "Event Title",
//         description: `Event Description
// Multiline Supported
// <a href='https://some.url' class='underline' target='_blank'>URLs are supported too</a>`,
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

    Tickets are $5 for community members, $1 for non-UF University students and free for UF students who present their student ID at the door.
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
   {
        name: "2026 GSA Spring Summit",
        description: `The Ohio Gender and Sexuality Alliance (GSA) Network Summit, hosted by Kaleidoscope Youth Center and our community partners, is back! This in-person summit on advocacy, activism, and community building welcomes Ohio student GSA members ages 12–20 to Findlay on Saturday, March 14.

        📝Registration is easy and FREE! → <a href='https://tinyurl.com/KYCGSASummit26' class='underline' target='_blank'>https://tinyurl.com/KYCGSASummit26</a>

        Your GSA not registered with the Ohio GSA Network? Registering your school’s GSA takes just 5 minutes. It unlocks our monthly newsletter, GSA curriculum updates from us, networking opportunities, the annual summit, and more!

        Register your GSA → <a href='https://www.kycohio.org/gsaregistration' class='underline' target='_blank'>https://www.kycohio.org/gsaregistration</a>

        📍GSA Network Summit Details:
Who: Ohio GSA members ages 12-20
When: Saturday, March 14th, 11:00 am - 4:00 pm
Where: Findlay-Hancock County Public Library
Lindamood Room
206 Broadway St, Findlay, Ohio 45840
Lunch: Yes! Lunch will be provided from Main Street Deli & Arcade (<a href='https://www.facebook.com/msdarcade' class='underline' target='_blank'>https://www.facebook.com/msdarcade</a>)
Cost: No cost! Registration is FREE and lunch is provided

✨ Stay tuned for more info about this year’s Summit, including program and event highlights, keynote speaker announcement, and more!

❓ Questions? Email <a href='mailto:education@kycohio.org' class='underline' target='_blank'>education@kycohio.org</a>`,
        startDate: new Date(2026, 2, 14, 11, 0),
        endDate: new Date(2026, 2, 14, 16, 0),
        location: "Findlay-Hancock County Public Library - Lindamood Room, 206 Broadway St, Findlay, Ohio 45840",
        organizer: "Kaleidoscope Youth Center",
        organizerURI: "https://www.kycohio.org/",
        eventURI: "https://www.facebook.com/share/1AmMowfPXQ/",
        imageURI: "/event/gsaSpringSummit.png",
        imageAlt: "Color design resembling magezine collage spelling out GSA Spring Summit along with the KYC and GSA Network logos",
        tags: [],
        //volunteerURI: "https://some.url/volunteer"
    },
];

export default events;