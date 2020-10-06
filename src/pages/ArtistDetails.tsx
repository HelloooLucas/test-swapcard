import React from 'react';
import { useQuery, gql } from '@apollo/client';

import { Artist } from './../models/artist-models';
import { ArtistDetailsProps } from '../models/artistDetails-models';

const FIND_ARTIST = gql`
    query SingleArtist ($id: ID!) {
        node(id: $id) {
            ...on Artist {
                id
                name
                mediaWikiImages {
                    url
                }
                releases {
                    nodes {
                        id
                        title
                        coverArtArchive {
                            front
                        }
                    }
                }
            }
        }
    }
`;


const ArtistDetails:React.FC<ArtistDetailsProps> = ({ history, match, addFavorite, removeFavorite, favorites }) => {
    const artistId = match.params.id;
    const { loading, error, data } = useQuery(FIND_ARTIST, { variables: { id: artistId }})
    const artist = data?.node;

    const isFavorite = artist && favorites.find((fav: Artist) => fav.id === artist.id);
    
    return (
        <>
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
        </>
    );
};

export default ArtistDetails;
