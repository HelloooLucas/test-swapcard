export interface Artist {
    id: string;
    name: string;
    mediaWikiImages: [
        {
            url: string;
        }
    ]
    releases?: {
        nodes: [
            {
                id: string;
                title: string;
                coverArtArchive: {
                    front: string;
                }
            }
        ];
    };
};
