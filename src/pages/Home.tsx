import React from 'react';
import { NavLink } from 'react-router-dom';

import { SearchBar } from './../components';
import { HomeProps } from './../models/home-models';


const Home:React.FC<HomeProps> = ({ queryResponse, debouncedSetQuery, query }) => {
    const { loading, error, data } = queryResponse;
    const artists = data?.search.artists.nodes;

    return (
        <>
            <h1>HOME</h1>
            <SearchBar onChange={debouncedSetQuery} />
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
                         <NavLink to={`/artists/${artist.id}`}>Go to artist</NavLink>
                     </li>
                 ))}
             </ul>
            }
        </>
    );
};

export default Home;
