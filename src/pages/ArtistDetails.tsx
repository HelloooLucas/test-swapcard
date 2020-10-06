import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import { Artist } from './../models/artist-models';
import { ArtistDetailsProps } from '../models/artistdetails-models';
import { FIND_ARTIST } from './../queries';
import starEmpty from './../images/star-empty.png';
import starFull from './../images/star-full.png';

const Wrapper = styled.div`
    grid-area: content;
    font-size: 1.2rem;
    padding: 10px 0 0 10px;
	border-top: 2px solid black;
	border-left: 2px solid black;
	overflow: scroll;
`;

const ArtistName = styled.h1`
    font-size: 1.6rem;
    display: inline-block;
`;

const FavPicto = styled.img`
    width: 20px;
    display: inline-block;
    cursor: pointer;
`;

const ArtistDetails:React.FC<ArtistDetailsProps> = ({ history, match, addFavorite, removeFavorite, favorites }) => {
    const artistId = match.params.id;
    const { loading, error, data } = useQuery(FIND_ARTIST, { variables: { id: artistId }})
    const artist = data?.node;

    const isFavorite = artist && favorites.find((fav: Artist) => fav.id === artist.id);
    
    return (
        <Wrapper>
            <button onClick={history.goBack}>Back to list</button>
            {
                loading
                ? <p>Loading...</p>
                : error
                ? <p>Error :(</p>
                : <div>
                    <ArtistName>{artist.name}</ArtistName>
                    {
                        isFavorite
                        ? <FavPicto src={starFull} onClick={() => removeFavorite(artist)} />
                        : <FavPicto src={starEmpty} onClick={() => addFavorite(artist)} />
                    }
                    <ul>
                        {artist.releases.nodes.map((release: any) => <li key={release.id}>{release.title}</li>)}
                    </ul>
                </div>
            }
        </Wrapper>
    );
};

export default ArtistDetails;
