import { Event } from "./type/Event";

const events: Event[] = [
//    {
//         name: "Event Title",
//         description: `Event Description
// Multiline Supported
// <a href='https://some.url' class='underline' target='_blank'>URLs are supported too</a>
// `,
//         startDate: new Date(2026, 5, 6, 14, 0),
//         endDate: new Date(2026, 5, 29, 19, 0),
//         location: "Some Location - Some Address",
//         organizer: "Some Organizer",
//         organizerURI: "https://some.url",
//         eventURI: "https://some.url/event",
//         imageURI: "/event/some.png",
//         imageAlt: "Some Logo",
//         tags: [],
//         volunteerURI: "https://some.url/volunteer"
//     },
   {
        name: "Pride Mixer",
        description: `Colour Your Monday Fabulous...Keep the Sparkle Going!
`,
        startDate: new Date(2026, 5, 29, 17, 30),
        endDate: new Date(2026, 5, 29, 20, 30),
        location: "Mancy's/Hancock Hotel - 631 S Main St, Findlay, OH 45840",
        organizer: "Findlay Pride",
        organizerURI: "https://FindlayPride.com",
        //eventURI: "https://some.url/event",
        imageURI: "/PrideF.png",
        imageAlt: "Pride Flag style letter F",
        tags: [],
        volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Youth Pride Craft Fair",
        description: ``,
        startDate: new Date(2026, 5, 26, 16, 0),
        endDate: new Date(2026, 5, 26, 20, 0),
        location: "The Loft - 1908 N Main St, Findlay, OH 45840",
        organizer: "FOCUS",
        organizerURI: "https://focusrwc.org/the-loft/",
        //eventURI: "https://some.url/event",
        imageURI: "/PrideF.png",
        imageAlt: "Rainbow Flag style letter F",
        tags: [],
        //volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Vinyl Night",
        description: `Join us from 7-9PM, for cocktails, good company, and the perfect soundtrack to your night. HawkBeat will be spinning anthems and jams by queer icons on the patio. 

`,
        startDate: new Date(2026, 5, 25, 19, 0),
        endDate: new Date(2026, 5, 25, 21, 0),
        location: "The Bourbon Affair - 121 E Crawford St, Findlay, OH 45840",
        organizer: "Hawk Beat",
        organizerURI: "https://www.facebook.com/profile.php?id=61574639848750",
        //eventURI: "https://some.url/event",
        imageURI: "/PrideF.png",
        imageAlt: "Rainbow Flag style letter F",
        tags: [],
        //volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Tap Room Yoga",
        description: `Pride Yoga instructed by Erin Teegardin. Bring your he's, she's and they's, or just bring a friend! Registration is $15 for individuals or $20 for couples, walk-ins are welcome, and every registrant of age gets one free drink!
`,
        startDate: new Date(2026, 5, 20, 10, 0),
        endDate: new Date(2026, 5, 20, 11, 0),
        location: "Findlay Brewing Company - 213 E Crawford St, Findlay, OH 45840",
        organizer: "Findlay Brewing Company",
        organizerURI: "http://findlaybrewing.com/",
        //eventURI: "https://some.url/event",
        imageURI: "/event/fbcAllEvents.jpg",
        imageAlt: "Collage of images related to Findlay Brewing Company Pride Events",
        tags: [],
       // volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Tie Dye Workshop - Colors of Pride",
        description: `Celebrate the vibrant spirit of Findlay Pride at the Findlay Art League! Join us for a hands-on, family-friendly workshop where we explore the art of resistance, joy, and identity through tie-dye. Beyond just making a mess (a controlled one!), we’ll dive into the history of 'resist-dyeing' and why the rainbow became a worldwide symbol for the LGBTQ+ community. No experience necessary! You’ll leave with wearable art and a deeper connection to our local community.
Proceeds to benefit Findlay Art League, Equitas Health and Buckeye Flame

All skill levels welcome. Family Friendly (13 & Under with Adult)

All materials provided`,
        startDate: new Date(2026, 5, 18, 18, 0),
        endDate: new Date(2026, 5, 18, 19, 30),
        location: "Findlay Art League - 117 W Crawford St, Findlay, OH 45840",
        organizer: "Findlay Pride",
        organizerURI: "https://FindlayPride.com",
        eventURI: "https://www.findlayartleague.org/store/classes/p/june-tie-dye-colors-of-pride",
        imageURI: "/event/tiedye.webp",
        imageAlt: "tie dye design",
        tags: ["Family Friendly", "Giving Back"],
        //volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Drag Bingo",
        description: ``,
        startDate: new Date(2026, 5, 14, 17, 0),
        endDate: new Date(2026, 5, 14, 20, 0),
        location: "False Chord Brewing - 326 S Main St, Findlay, OH 45840",
        organizer: "False Chord Brewing",
        organizerURI: "https://www.falsechordbrewing.com/",
        //eventURI: "https://some.url/event",
        imageURI: "/PrideF.png",
        imageAlt: "Rainbow Flag style letter F",
        tags: [],
        //volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Yoga in the Park",
        description: `FREE YOGA at Riverside Park (shelter 1, by the volleyball court). We need community and connection more than ever. So, dust off your rainbows and get your glitter ready to celebrate our community with Pride!

Everyone is welcome!
This is a free event, no registration required.
`,
        startDate: new Date(2026, 5, 13, 9, 0),
        endDate: new Date(2026, 5, 13, 10, 0),
        location: "Riverside Park - 231 McManness Ave, Findlay, OH 45840",
        organizer: "Hot Yoga Findlay",
        organizerURI: "https://hotyogafindlay.com/",
        //eventURI: "https://some.url/event",
        imageURI: "/PrideF.png",
        imageAlt: "Rainbow Flag style letter F",
        tags: ["Family Friendly"],
        //volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Pride Ride",
        description: `Meet up at the shop around 6:00 pm, then we hit the streets around 6:30 pm for a goofy, joy-filled cruise around downtown! Expect an easy hour-long ride.
Got a cruiser, BMX, old mountain bike, or something weird with wheels? Perfect. This isn’t a cycling ride — it’s a rolling community hang. If you have a bike, you belong.
Colorful outfits and decorated bikes encouraged!
Don’t have a bike? A limited number are available to borrow; first come, first served!
This is a free event, no registration required.
`,
        startDate: new Date(2026, 5, 10, 18, 0),
        endDate: new Date(2026, 5, 10, 19, 30),
        location: "Further Bikes - 113 W Crawford St, Findlay, OH 45840",
        organizer: "Further Bikes",
        //organizerURI: "https://some.url",
        eventURI: "https://www.facebook.com/share/1Ki69VQenW/",
        imageURI: "/event/fbPrideRide.jpg",
        imageAlt: "Green Background with the text Pride Ride 2026 Further Bikes June 10 on it",
        tags: ["Family Friendly"],
        //volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Pride After Party",
        description: `Celebrate with us at the Pride After Party on the beer garden! We’re staying open late, until midnight, with DJ Banditz (AKA our very own Brody) spinning tracks and late-night beer garden eats available from 9 to 11 PM.
`,
        startDate: new Date(2026, 5, 6, 21, 0),
        endDate: new Date(2026, 5, 6, 23, 59),
        location: "Findlay Brewing Company - 213 E Crawford St, Findlay, OH 45840",
        organizer: "Findlay Brewing Company",
        organizerURI: "http://findlaybrewing.com/",
        //eventURI: "https://some.url/event",
        imageURI: "/event/fbcAllEvents.jpg",
        imageAlt: "Collage of images related to Findlay Brewing Company Pride Events",
        tags: [],
       // volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Pride Potluck",
        description: `Join us in celebrating Pride Month with a community potluck at Dorney Plaza! Bring your favorite dish to share, and enjoy good food, great company, and a welcoming space for all.
This potluck is part of a series of Pride events and offerings happening throughout June, more details coming soon!
Findlay Pride Potluck is organized by a group of Findlay citizens.
This is a sober event; please refrain from any substance (alcohol, nicotine, marijuana, etc.) use at the event.
`,
        startDate: new Date(2026, 5, 6, 12, 0),
        endDate: new Date(2026, 5, 6, 15, 0),
        location: "Dorney Plaza - 300 S Main St, Findlay, OH 45840",
        organizer: "Findlay Pride",
        organizerURI: "https://FindlayPride.com",
        eventURI: "https://www.facebook.com/share/18xrCCCxW6/",
        imageURI: "/event/fpPotluck.jpg",
        imageAlt: "purble background with white grid and the text Findlay Pride Potluck June 6 2026",
        tags: ["Family Friendly", "Sober Event"],
        //volunteerURI: "https://some.url/volunteer"
    },
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