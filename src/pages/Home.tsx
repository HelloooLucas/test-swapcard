import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { SearchBar } from './../components';
import { HomeProps } from './../models/home-models';

const Wrapper = styled.div`
    grid-area: content;
	border-top: 2px solid black;
	border-left: 2px solid black;
`;

const Home:React.FC<HomeProps> = ({ queryResponse, debouncedSetQuery, query }) => {
    const { loading, error, data } = queryResponse;
    const artists = data?.search.artists.nodes;

    return (
        <Wrapper>
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
        </Wrapper>
    );
};

export default Home;
