import { createContext } from 'react';
import { Artist } from './../models/artist.model';

interface ContextStructure {
	favorites: Artist[];
	addFavorite: (newFav: Artist) => void;
	removeFavorite: (favToRemove: Artist) => void;
}

const favoritesContext = createContext<ContextStructure>({
	favorites: [],
	addFavorite: () => {},
	removeFavorite: () => {},
});

export default favoritesContext;
