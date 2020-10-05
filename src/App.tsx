import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { useQuery, gql } from '@apollo/client';

import { Home, ArtistDetails } from "./pages";

interface Artist {
    id: string;
    name: string;
    mediaWikiImages: [
        {
            url: string;
        }
    ]
    releases?: {
        nodes: [
            {
                id: string;
                title: string;
                coverArtArchive: {
                    front: string;
                }
            }
        ];
    };
};

interface SearchResult {
    search: {
        artists: {
            nodes: Artist[]
        }
    }
};

interface SearchArtistVars {
    query: string;
};

const SEARCH_ARTISTS = gql`
    query Artists ($query: String!) {
        search {
            artists(query: $query) {
                nodes {
                    id
					name
					mediaWikiImages {
						url
					}
                }
            }
        }
    }
`;

const App: React.FC = () => {
	const [favorites, setFavorites] = useState<Artist[]>([]);
	const [query, setQuery] = useState('');

	const debouncedSetQuery = useCallback(debounce(inputText => setQuery(inputText), 400), []);

    const addFavorite = (newFav: Artist) => setFavorites(prevFavorites => [...prevFavorites, newFav]);
	const removeFavorite = (favToRemove: Artist) => setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== favToRemove.id));

	useEffect(() => {
		const localFavorites = window.localStorage.getItem('favorites') || '[]';
		setFavorites(JSON.parse(localFavorites));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);
	
	const queryResponse = useQuery<SearchResult, SearchArtistVars>(SEARCH_ARTISTS, { variables: { query }});

    return (
        <BrowserRouter>
          <Route exact path='/' render={props => <Home {...props} queryResponse={queryResponse} debouncedSetQuery={debouncedSetQuery} query={query} />} />
          <Route path='/artists/:id' render={props => <ArtistDetails {...props} addFavorite={addFavorite} removeFavorite={removeFavorite} favorites={favorites} />} />
		  <ul>
			{favorites.map(fav => <li>{fav.name}</li>)}
		  </ul>
        </BrowserRouter>
    );
}

export default App;
