import { Artist } from './artist.model';

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
