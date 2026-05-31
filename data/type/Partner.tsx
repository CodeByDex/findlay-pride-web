export type Partner = {
    name: string;
    imageURI?: string;
    imageAlt?: string;
    location?: string;
    organizerURI?: string;
    socials: {
        facebook?: string;
        bluesky?: string;
        linkedIn?: string;
        instagram?: string;
    }
    tags?: string[];
    highlight: boolean;
};

export function PartnerDefaultSort(partsToSort: Partner[]): Partner[] {

    partsToSort = partsToSort.sort((a, b) => {
        if (a.name === "Findlay Pride")
            return -1;
        
        if (b.name === "Findlay Pride")
            return 1;

        if (a.highlight && !b.highlight)
            return -1;
        
        if (b.highlight && !a.highlight)
            return 1;

        return a.name > b.name ? 1 : -1;
        
    })

    return partsToSort;
}