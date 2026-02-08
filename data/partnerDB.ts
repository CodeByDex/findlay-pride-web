import { Partner } from "./type/Partner";

const partners: Partner[] = [
    // {
    //     name: "",
    //     imageURI: "",
    //     imageAlt: "",
    //     organizerURI: "",
    //     socials: {
    //         facebook: undefined,
    //         bluesky: undefined,
    //         linkedIn: undefined,
    //         instagram: undefined
    //     },
    //     highlight: false
    // },
    {
        name: "Findlay Pride Potluck",
        imageURI: "/partnerLogo/fppLogo.svg",
        imageAlt: "Findlay Pride Potluck Logo",
        socials: {
            facebook: "https://facebook.com/FindlayPride",
            bluesky: "https://bsky.app/profile/findlaypride.com",
            linkedIn: undefined,
            instagram: undefined
        },
        highlight: true
    },
    {
        name: "United University of Findlay",
        imageURI: "/partnerLogo/unitedLogo.png",
        imageAlt: "Interwoven rainbow colored lines surronding the text 'United The University of Findlay GSA'",
        socials: {
            facebook: "https://www.facebook.com/UnitedUF",
            bluesky: undefined,
            linkedIn: undefined,
            instagram: undefined
        },
        highlight: false
    }
]

export default partners;