import { useState, useEffect } from 'react';

import { Artist } from './../models/artist.model';

const useFavorites = () => {
	const [favorites, setFavorites] = useState<Artist[]>([]);

	const addFavorite = (newFav: Artist) =>
		setFavorites((prevFavorites: Artist[]) => [...prevFavorites, newFav]);
	const removeFavorite = (favToRemove: Artist) =>
		setFavorites((prevFavorites: Artist[]) =>
			prevFavorites.filter(fav => fav.id !== favToRemove.id)
		);

	useEffect(() => {
		const localFavorites = window.localStorage.getItem('favorites') || '[]';
		setFavorites(JSON.parse(localFavorites));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	return { favorites, addFavorite, removeFavorite };
};

export default useFavorites;
