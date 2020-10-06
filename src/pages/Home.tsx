import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { SearchBar } from './../components';
import { HomeProps } from './../models/home-models';
import noImage from './../images/no-image.png';

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
    margin-bottom: 15px;
`;

const ArtistBlock = styled.div`
    height: 50px;
    width: 400px;
    display: flex;
    align-items: center;
`;

const Picture = styled.img`
    width: 50px;
    object-fit: cover;
    margin-right: 15px;
`;

const Home:React.FC<HomeProps> = ({ queryResponse, debouncedSetQuery, query }) => {
    const { loading, error, data } = queryResponse;
    const artists = data?.search.artists.nodes;

    return (
        <Wrapper>
            <SearchBar onChange={debouncedSetQuery} />
            {!query
             ? <p>Please make a search</p>
             : loading
             ? <p>Loading...</p>
             : error
             ? <p>Error :(</p>
             : <ul>
                 {artists?.map((artist: any) => {
                     const imgUrl = artist.mediaWikiImages[0]?.url || noImage;
                     return (
                        <StyledLink to={`/artists/${artist.id}`} key={artist.id}>
                            <ArtistBlock>
                                    <Picture src={imgUrl} alt="Artist cover"/>
                                    <h3>{artist.name}</h3>
                            </ArtistBlock>
                        </StyledLink>
                    )
                 })}
             </ul>
            }
        </Wrapper>
    );
};

export default Home;
