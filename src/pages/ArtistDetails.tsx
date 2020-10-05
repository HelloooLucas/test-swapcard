import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';

const FIND_ARTIST = gql`
    query SingleArtist ($id: ID!) {
        node(id: $id) {
            ...on Artist {
                name
                releases {
                    nodes {
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

interface MatchProp {
    id: string;
};

interface ArtistDetailsProps extends RouteComponentProps<MatchProp> {};

const ArtistDetails:React.FC<ArtistDetailsProps> = ({ history, match }) => {
    const artistId = match.params.id;
    const { loading, error, data } = useQuery(FIND_ARTIST, { variables: { id: artistId }})
    const artist = data?.node;
    
    return (
        <>
            <button onClick={history.goBack}>Back to list</button>
            <h3>Artist Details</h3>
            {loading
             ? <p>Loading...</p>
             : error
             ? <p>Error :(</p>
             : <div>
                 <h1>{artist.name}</h1>
                 <ul>
                     {artist.releases.nodes.map((release: any) => release.title)}
                 </ul>
             </div>
            }
        </>
    );
};

export default ArtistDetails;
