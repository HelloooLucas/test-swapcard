export interface Release {
    id: string;
    title: string;
    coverArtArchive: {
        front: string;
    }
};

export interface Artist {
    id: string;
    name: string;
    mediaWikiImages: [
        {
            url: string;
        }
    ]
    releases?: {
        nodes: Release[];
    };
};
