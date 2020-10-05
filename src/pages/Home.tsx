import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import debounce from 'lodash.debounce';

import { SearchBar } from './../components';

interface Artist {
    id: string;
    name: string;
}

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

const SEARCH_ARTIST = gql`
    query Artists ($query: String!) {
        search {
            artists(query: $query) {
                nodes {
                    id
                    name
                }
            }
        }
    }
`;

const Home:React.FC = () => {
    const [query, setQuery] = useState('');
    const debouncedOnChange = useCallback(debounce(inputText => setQuery(inputText), 400), []);

    const { loading, error, data } = useQuery<SearchResult, SearchArtistVars>(SEARCH_ARTIST, { variables: { query }});
    const artists = data?.search.artists.nodes;

    return (
        <>
            <h1>HOME</h1>
            <SearchBar onChange={debouncedOnChange} />
            {!query
             ? <p>Please make a search</p>
             : loading
             ? <p>Loading...</p>
             : error
             ? <p>Error :(</p>
             : <ul>
                 {artists?.map((artist: any) => (
                     <li key={artist.id}>
                         <h3>{artist.name}</h3>
                         <NavLink to={`/artists/${artist.name}`}>Go to artist</NavLink>
                     </li>
                 ))}
             </ul>
            }
        </>
    );
};

export default Home;
