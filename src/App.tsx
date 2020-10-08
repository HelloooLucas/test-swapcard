import React, { FC, useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Home, ArtistDetails, AlbumDetails } from './pages';
import { Favorites, Logo } from './components';
import { Artist } from './models/artist.model';
import { SearchResult, SearchArtistVars } from './models/app.model';
import { SEARCH_ARTISTS } from './queries';
const debounce = require('lodash/debounce'); // Tree shaking

const Layout = styled.div`
	display: grid;
	height: 100%;
	grid-template-rows: 100px 1fr;
	grid-template-columns: 100px 1fr;
	grid-template-areas:
		'. logo'
		'favorites content';
`;

const App: FC = () => {
	const [favorites, setFavorites] = useState<Artist[]>([]);

	const [query, setQuery] = useState('');
	const [searchArtists, queryResponse] = useLazyQuery<
		SearchResult,
		SearchArtistVars
	>(SEARCH_ARTISTS, { variables: { query } });
	const debouncedSetQuery = useCallback(
		debounce((inputText: string) => setQuery(inputText), 400),
		[]
	);

	const addFavorite = (newFav: Artist) =>
		setFavorites(prevFavorites => [...prevFavorites, newFav]);
	const removeFavorite = (favToRemove: Artist) =>
		setFavorites(prevFavorites =>
			prevFavorites.filter(fav => fav.id !== favToRemove.id)
		);

	useEffect(() => {
		query && searchArtists();
	}, [query, searchArtists]);

	useEffect(() => {
		const localFavorites = window.localStorage.getItem('favorites') || '[]';
		setFavorites(JSON.parse(localFavorites));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	return (
		<Layout>
			<Logo />
			<BrowserRouter>
				<Route
					exact
					path="/"
					render={props => (
						<Home
							{...props}
							queryResponse={queryResponse}
							debouncedSetQuery={debouncedSetQuery}
							query={query}
						/>
					)}
				/>
				<Route
					path="/artist/:id"
					render={props => (
						<ArtistDetails
							{...props}
							addFavorite={addFavorite}
							removeFavorite={removeFavorite}
							favorites={favorites}
						/>
					)}
				/>
				<Route path="/album/:id" component={AlbumDetails} />
			</BrowserRouter>
			<Favorites favorites={favorites} removeFavorite={removeFavorite} />
			<ToastContainer position="bottom-right" autoClose={3000} />
		</Layout>
	);
};

export default App;
