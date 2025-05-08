import { Event } from "./type/Event";

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
        imageAlt: "Pride Themed Letter F",
    },
    {
        name: "Pride Month Drink Special",
        description: "Stop in all month long to check out our rotating drink specials for Pride Month!",
        startDate: new Date(2025, 5, 1,0, 0),
        endDate: new Date(2025, 5, 30, 23, 5),
        location: "Wine Merchant",
        organizer: "Wine Merchant",
        organizerURI: "facebook.com/findlaywinemerchant",
        imageURI: "/event/WMLogo.jpg",
        imageAlt: "Wine Merchant Logo",
    },
    {
        name: "Pride Month Coffee Special",
        description: "Check out Amici for fun drink specials, check back soon for more details!",
        startDate: new Date(2025, 5, 1,0, 0),
        endDate: new Date(2025, 5, 30, 23, 5),
        location: "Coffee Amici",
        organizer: "Coffee Amici",
        organizerURI: "facebook.com/coffeeamici",
        imageURI: "/event/CALogo.png",
        imageAlt: "Coffee Amici Logo",
    },
    {
        name: "Pride Potluck",
        description: "Come be a part of the community! Bring what you can to share and share in the love for our community. More details and signup to come!",
        startDate: new Date(2025, 5, 7,0, 0),
        endDate: new Date(2025, 5, 7, 23, 5),
        location: "Dorney Plaza in Downtown Findlay",
        organizer: "Findlay Pride",
        organizerURI: "facebook.com/findlaypride",
        imageURI: "/PrideF.png",
        imageAlt: "Pride Themed Letter F",
    },
];

export default events;