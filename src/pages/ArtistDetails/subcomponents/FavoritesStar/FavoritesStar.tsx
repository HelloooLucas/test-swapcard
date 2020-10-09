import React, { FC, useContext } from 'react';
import { toast } from 'react-toastify';

import { Artist } from '../../../../models/artist.model';
import starFull from './../../../../images/star-full.png';
import starEmpty from './../../../../images/star-empty.png';
import { favoritesContext } from '../../../../contexts';
import { FavPicto } from './styles';

interface Props {
	artist: Artist;
}

const FavoritesStar: FC<Props> = ({ artist }) => {
	const { favorites, addFavorite, removeFavorite } = useContext(
		favoritesContext
	);

	const isFavorite =
		artist && !!favorites.find((fav: Artist) => fav.id === artist.id);

	const picto = isFavorite ? starFull : starEmpty;

	const handleClick = () => {
		if (!isFavorite) {
			addFavorite(artist);
			toast.success(artist.name + ' was added to your favorites!');
		}
		if (isFavorite) {
			removeFavorite(artist);
			toast.error(artist.name + ' was removed from your favorites!');
		}
	};

	return <FavPicto src={picto} onClick={handleClick} />;
};

export default FavoritesStar;
