import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { SearchBar, Loading, Error, NoResults } from './../../components';
import { ArtistElement } from './subcomponents';
import { Artist } from './../../models/artist.model';

const Wrapper = styled.div`
    grid-area: content;
    padding: 10px 0 0 10px;
	border-top: 2px solid black;
	border-left: 2px solid black;
    overflow: scroll;
    font-size: 1.2rem;
`;

const StyledLink = styled(NavLink)`
    display: block;
    width: 400px;
    margin-bottom: 15px;
`;

interface HomeProps {
    queryResponse: any;
    debouncedSetQuery: (text: string) => void;
    query: string;
};

const Home:React.FC<HomeProps> = ({ queryResponse, debouncedSetQuery, query }) => {
    const { loading, error, data } = queryResponse;
    const artists = data?.search.artists.nodes;

    return (
        <Wrapper>
            <SearchBar onChange={debouncedSetQuery} />
            {!query ? <p>Please make a search</p> : ''}
            {query ? <Loading loading={loading} /> : ''}
            {query && !loading ? <Error error={!!error} /> : ''}
            {artists && (
                <>
                    <NoResults data={artists} />
                    <ul>
                        {artists.map((artist: Artist) => (
                            <StyledLink to={`/artists/${artist.id}`} key={artist.id}>
                                <ArtistElement artist={artist} />
                            </StyledLink>
                        ))}
                    </ul>
                </>
            )}
        </Wrapper>
    );
};

export default Home;
