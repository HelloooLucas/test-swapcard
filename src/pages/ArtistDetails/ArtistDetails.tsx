import React from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';

import { FIND_ARTIST } from '../../queries';
import { Artist } from '../../models/artist.model';
import { Loading, Error, NoResults } from '../../components';
import { FavoriteStar, ReleaseElement } from './subcomponents';
import { Wrapper, BackButton, ArtistName } from './styles';


export interface MatchProp {
    id: string;
};

interface ArtistDetailsProps extends RouteComponentProps<MatchProp> {
    addFavorite: (fav: Artist) => void;
    removeFavorite: (fav: Artist) => void;
    favorites: Artist[];
};


const ArtistDetails:React.FC<ArtistDetailsProps> = ({ history, match, addFavorite, removeFavorite, favorites }) => {
    const artistId = match.params.id;
    const { loading, error, data } = useQuery(FIND_ARTIST, { variables: { id: artistId }})
    const artist = data?.node;

    const isFavorite = artist && !!favorites.find((fav: Artist) => fav.id === artist.id);
    
    return (
        <Wrapper>
            <BackButton onClick={history.goBack}>{'< Back to list'}</BackButton>
            <Loading loading={loading} />
            <Error error={!!error} />
            {artist && (
                <>
                    <NoResults data={artist.releases.nodes} />
                    <ArtistName>{artist.name}</ArtistName>
                    <FavoriteStar
                        isFavorite={isFavorite}
                        handleClick={isFavorite ? removeFavorite : addFavorite}
                        artist={artist}
                    />
                    <ul>
                        {artist.releases.nodes.map((release: any) => <ReleaseElement key={release.id} release={release} />)}
                    </ul>
                </>
            )}
        </Wrapper>
    );
};

export default ArtistDetails;