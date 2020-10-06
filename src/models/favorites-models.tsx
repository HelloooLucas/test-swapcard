import { Artist } from './artist-models';

export interface FavoritesProps {
    favorites: Artist[];
    removeFavorite: (fav: Artist) => void;
};
