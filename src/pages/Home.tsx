import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

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
    const { loading, error, data } = useQuery(SEARCH_ARTIST, { variables: { query }});
    const artists = data?.search.artists.nodes;

    return (
        <>
            <h1>HOME</h1>
            <input
                type="text"
                onChange={e => setQuery(e.target.value)}
                value={query}
            />
            {!query
             ? <p>Please make a search</p>
             : loading
             ? <p>Loading...</p>
             : error
             ? <p>Error :(</p>
             : <ul>
                 {artists.map((artist: any) => (
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
