import { Artist } from './artist-models';

export interface SearchResult {
    search: {
        artists: {
            nodes: Artist[]
        }
    }
};

export interface SearchArtistVars {
    query: string;
};
