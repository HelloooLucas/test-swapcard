import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import debounce from 'lodash.debounce';
import styled from 'styled-components';

import { Home, ArtistDetails } from "./pages";
import { Favorites, Logo } from './components';
import { Artist } from './models/artist-models';
import { SearchResult, SearchArtistVars } from './models/app-models';
import { SEARCH_ARTISTS } from './queries';

const Layout = styled.div`
	display: grid;
	height: 100%;
	grid-template-rows: 100px 1fr;
	grid-template-columns: 100px 1fr;
	grid-template-areas:
	". logo"
	"favorites content";
`;


const App: React.FC = () => {
	const [favorites, setFavorites] = useState<Artist[]>([]);

	const [query, setQuery] = useState('');
	const queryResponse = useQuery<SearchResult, SearchArtistVars>(SEARCH_ARTISTS, { variables: { query }});
	const debouncedSetQuery = useCallback(debounce(inputText => setQuery(inputText), 400), []);

    const addFavorite = (newFav: Artist) => setFavorites(prevFavorites => [...prevFavorites, newFav]);
	const removeFavorite = (favToRemove: Artist) => setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== favToRemove.id));

	useEffect(() => {
		console.log('GET STORAGE');
		const localFavorites = window.localStorage.getItem('favorites') || '[]';
		setFavorites(JSON.parse(localFavorites));
	}, []);

	useEffect(() => {
		console.log('SET FAVORITES', favorites);
		window.localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	useEffect(() => console.log('query ', query));
	
    return (
		<Layout>
			<Logo />
			<BrowserRouter>
				<Route exact path='/' render={props => <Home {...props} queryResponse={queryResponse} debouncedSetQuery={debouncedSetQuery} query={query} />} />
				<Route path='/artists/:id' render={props => <ArtistDetails {...props} addFavorite={addFavorite} removeFavorite={removeFavorite} favorites={favorites} />} />
			</BrowserRouter>
			<Favorites favorites={favorites} removeFavorite={removeFavorite} />
		</Layout>
    );
}

export default App;
