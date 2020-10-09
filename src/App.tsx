import React, { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Home, ArtistDetails, AlbumDetails } from './pages';
import { Favorites, Logo } from './components';
import { favoritesContext } from './contexts';
import { useFavorites } from './hooks';

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
	const { favorites, addFavorite, removeFavorite } = useFavorites();

	return (
		<favoritesContext.Provider
			value={{ favorites, addFavorite, removeFavorite }}
		>
			<Layout>
				<Logo />
				<BrowserRouter>
					<Route exact path="/" component={Home} />
					<Route path="/artist/:id" component={ArtistDetails} />
					<Route path="/album/:id" component={AlbumDetails} />
				</BrowserRouter>
				<Favorites />
			</Layout>
		</favoritesContext.Provider>
	);
};

export default App;
