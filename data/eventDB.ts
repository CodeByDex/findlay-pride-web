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
        name: "Pride Spin Class",
        description: ``,
        startDate: new Date(2026, 5, 22, 18, 0),
        endDate: new Date(2026, 5, 22, 19, 0),
        location: "The Lifting Lab - 1219 W Main Cross St Suite 104, Findlay, OH 45840",
        organizer: "The Lifting Lab",
        organizerURI: "https://www.facebook.com/theliftinglabfindlay",
        //eventURI: "https://some.url/event",
        imageURI: "/PrideF.png",
        imageAlt: "Pride Flag style letter F",
        tags: [],
        //volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Come As You Are: A Pride Shopping Night",
        description: `LBE Vintage invites you to come as you are and enjoy a night of shopping, snacks, and
community. Special discounts will be available for one night only!
`,
        startDate: new Date(2026, 5, 12, 18, 0),
        endDate: new Date(2026, 5, 12, 21, 0),
        location: "LBE Vintage - 221 Broadway St., Findlay, OH 45840",
        organizer: "LBE Vintage",
        organizerURI: "https://www.facebook.com/lbevintage",
        //eventURI: "https://some.url/event",
        imageURI: "/PrideF.png",
        imageAlt: "Pride Flag style letter F",
        tags: [],
        //volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Pride Mixer",
        description: `Come and celebrate your Pride and your community in style. Appetizers provided with a cash bar available for mocktails and alcoholic beverages.`,
        startDate: new Date(2026, 5, 29, 17, 30),
        endDate: new Date(2026, 5, 29, 20, 30),
        location: "Mancy's/Hancock Hotel - 631 S Main St, Findlay, OH 45840",
        organizer: "Findlay Pride",
        organizerURI: "https://FindlayPride.com",
        //eventURI: "https://some.url/event",
        imageURI: "/event/Mixer.png",
        imageAlt: "People enjoying the Mancy's patio",
        tags: ["Giving Back", "Volunteer Opt"],
        volunteerURI: "https://www.signupgenius.com/go/10C054DA5AA2EA7FAC25-64167654-community#/"
    },
   {
        name: "Youth Pride Craft Fair",
        description: `Crafts provided will be bead bracelet making, design your own flag, and pin making
Open to any youth ages 10-17 impacted by oppression, adversity, or trauma.
`,
        startDate: new Date(2026, 5, 26, 16, 0),
        endDate: new Date(2026, 5, 26, 20, 0),
        location: "The Loft - 1908 N Main St, Findlay, OH 45840",
        organizer: "FOCUS",
        organizerURI: "https://focusrwc.org/the-loft/",
        //eventURI: "https://some.url/event",
        imageURI: "/event/tlCraft.png",
        imageAlt: "Colorful background and letters spelling out Youth Pride Craft Fair with the FOCUS and Loft logos",
        tags: ["Free to Attend"],
        //volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Vinyl Night",
        description: `Join us from 7-9PM, for cocktails, good company, and the perfect soundtrack to your night. HawkBeat will be spinning anthems and jams by queer icons and <a href="https://www.facebook.com/hysteriacobyambz" class='underline' target='_blank'>Hysteria Co.</a> will be creating screenprints live on the patio. `,
        startDate: new Date(2026, 5, 25, 19, 0),
        endDate: new Date(2026, 5, 25, 21, 0),
        location: "The Bourbon Affair - 121 E Crawford St, Findlay, OH 45840",
        organizer: "Hawk Beat",
        organizerURI: "https://www.facebook.com/profile.php?id=61574639848750",
        eventURI: "https://www.facebook.com/share/1BG1ijko7n/",
        imageURI: "/partnerLogo/hbLogo2.png",
        imageAlt: "Hawkbeat Logo stylized with rainbow feathers",
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
        eventURI: "https://www.facebook.com/share/1E6AMFtRYf/",
        imageURI: "/event/fbcAllEvents.jpg",
        imageAlt: "Collage of images related to Findlay Brewing Company Pride Events",
        tags: ["Registration Required"],
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
        tags: ["Family Friendly", "Giving Back", "Registration Required"],
        //volunteerURI: "https://some.url/volunteer"
    },
   {
        name: "Drag Bingo",
        description: `Join us in the False Chord taproom for Drag Bingo on Sunday, June 14, from 5-8 p.m. (doors are at 4 p.m.). This event is co-sponsored by Findlay Pride. We will be accepting cash donations for The Loft at the event.
Prizes / Giveaways will be available for Bingo winners.
This event is 21+
RESERVED SEATING INFO
We will have a limited amount of reserved seating available, with the rest of the seating as first-come, first-served for walk-ins.
If you are interested in reserving a seat for Drag Bingo, please note that tables seat 4. If you would like to sit together in a group, please reserve tickets in a single order. We will be filling all seats as reservations come in. Proceeds from ticket sales will be donated to The Loft.
Reserved Seating Here: <a href="https://www.falsechordbrewing.com/shop" class='underline' target='_blank'>https://www.falsechordbrewing.com/shop</a>

The Loft is a local non-profit organization that offers support for youth (10-17) affected by oppression, adversity, or trauma and provides a safe space where they can connect with others from diverse backgrounds or similar life experiences.
`,
        startDate: new Date(2026, 5, 14, 17, 0),
        endDate: new Date(2026, 5, 14, 20, 0),
        location: "False Chord Brewing - 326 S Main St, Findlay, OH 45840",
        organizer: "False Chord Brewing",
        organizerURI: "https://www.falsechordbrewing.com/",
        eventURI: "https://www.facebook.com/share/1Bo835YraV/",
        imageURI: "/event/fcBingo.jpg",
        imageAlt: "Color background with an image of drag performer Stevie Pheonix",
        tags: ["Giving Back", "Registration Required", "Volunteer Opt"],
        volunteerURI: "https://www.signupgenius.com/go/10C054DA5AA2EA7FAC25-64167654-community#/"
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
        eventURI: "https://www.facebook.com/share/1CtQD48JBU/",
        imageURI: "/event/hfyYoga.jpg",
        imageAlt: "Grassy background with the image of a person doing yoga",
        tags: ["Family Friendly", "Free to Attend"],
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
        tags: ["Family Friendly", "Free to Attend"],
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
        eventURI: "https://www.facebook.com/share/1CXvamhR2i/",
        imageURI: "/event/fbcAfterparty.jpg",
        imageAlt: "DJ Banditz heading with a cat operating a turn table with the text Pride After Party Saturday June 6",
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
        tags: ["Family Friendly", "Sober Event", "Free to Attend", "Volunteer Opt"],
        volunteerURI: "https://www.signupgenius.com/go/10C054DA5AA2EA7FAC25-64167654-community#/"
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