import React, { FC, useContext } from 'react';
import { toast } from 'react-toastify';
import { favoritesContext } from '../../contexts';

import { Artist } from '../../models/artist.model';
import { Wrapper, Title, ListItem } from './styles';

const Favorites: FC = () => {
	const { favorites, removeFavorite } = useContext(favoritesContext);

	const handleClick = (fav: Artist) => {
		removeFavorite(fav);
		toast.error(fav.name + ' was removed from your favorites!');
	};

	return (
		<Wrapper>
			<Title>Favorites</Title>
			<ul>
				{favorites.map(fav => (
					<ListItem key={fav.id} onClick={() => handleClick(fav)}>
						{fav.name}
					</ListItem>
				))}
			</ul>
		</Wrapper>
	);
};

export default Favorites;
