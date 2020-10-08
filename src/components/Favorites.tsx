import React, { FC } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import { Artist } from './../models/artist.model';

const Wrapper = styled.div`
	grid-area: favorites;
	border-top: 2px solid black;
	padding: 10px 0 0 10px;
`;

const Title = styled.h3`
	font-weight: 700;
	margin-bottom: 10px;
	text-decoration: underline;
`;

const ListItem = styled.li`
	cursor: pointer;
	margin-bottom: 4px;

	&:hover {
		text-decoration: line-through;
	}
`;

interface FavoritesProps {
	favorites: Artist[];
	removeFavorite: (fav: Artist) => void;
}

const Favorites: FC<FavoritesProps> = ({ favorites, removeFavorite }) => {
	const clickAndToast = (fav: Artist) => {
		removeFavorite(fav);
		toast.error(fav.name + ' was removed from your favorites!');
	};
	return (
		<Wrapper>
			<Title>Favorites</Title>
			<ul>
				{favorites.map(fav => (
					<ListItem key={fav.id} onClick={() => clickAndToast(fav)}>
						{fav.name}
					</ListItem>
				))}
			</ul>
		</Wrapper>
	);
};

export default Favorites;
