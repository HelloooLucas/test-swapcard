import { Artist } from './artist-models';
import { RouteComponentProps } from 'react-router-dom';

export interface MatchProp {
    id: string;
};

export interface ArtistDetailsProps extends RouteComponentProps<MatchProp> {
    addFavorite: (fav: Artist) => void;
    removeFavorite: (fav: Artist) => void;
    favorites: Artist[];
};
