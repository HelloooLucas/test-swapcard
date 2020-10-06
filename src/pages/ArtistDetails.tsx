import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import { Artist } from './../models/artist-models';
import { ArtistDetailsProps } from '../models/artistdetails-models';
import { FIND_ARTIST } from './../queries';

const Wrapper = styled.div`
    grid-area: content;
`;


const ArtistDetails:React.FC<ArtistDetailsProps> = ({ history, match, addFavorite, removeFavorite, favorites }) => {
    const artistId = match.params.id;
    const { loading, error, data } = useQuery(FIND_ARTIST, { variables: { id: artistId }})
    const artist = data?.node;

    const isFavorite = artist && favorites.find((fav: Artist) => fav.id === artist.id);
    
    return (
        <Wrapper>
            <button onClick={history.goBack}>Back to list</button>
            <h3>Artist Details</h3>
            {
                loading
                ? <p>Loading...</p>
                : error
                ? <p>Error :(</p>
                : <div>
                    <h1>{artist.name}</h1>
                    {
                        isFavorite
                        ? <button onClick={() => removeFavorite(artist)}>Remove from favs</button>
                        : <button onClick={() => addFavorite(artist)}>Add to favs</button>
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
