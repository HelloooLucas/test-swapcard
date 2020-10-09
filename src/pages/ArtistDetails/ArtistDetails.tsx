import React, { FC, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';

import { FIND_ARTIST } from '../../queries';
import { Artist } from '../../models/artist.model';
import { Loading, Error, NoResults } from '../../components';
import { FavoriteStar, ReleaseElement } from './subcomponents';
import { Wrapper, BackButton, ArtistName, StyledLink } from './styles';
import { favoritesContext } from '../../contexts';

export interface MatchProp {
	id: string;
}

interface ArtistDetailsProps extends RouteComponentProps<MatchProp> {}

const ArtistDetails: FC<ArtistDetailsProps> = ({ history, match }) => {
	const { favorites, addFavorite, removeFavorite } = useContext(
		favoritesContext
	);
	const artistId = match.params.id;
	const { loading, error, data } = useQuery(FIND_ARTIST, {
		variables: { id: artistId },
	});
	const artist = data?.node;

	const isFavorite =
		artist && !!favorites.find((fav: Artist) => fav.id === artist.id);

	return (
		<Wrapper>
			<BackButton onClick={history.goBack}>{'< Back to Home'}</BackButton>
			<Loading loading={loading} />
			<Error error={!!error} />
			{artist && (
				<>
					<NoResults data={artist.releases.nodes} />
					<ArtistName>Albums by {artist.name}</ArtistName>
					<FavoriteStar
						isFavorite={isFavorite}
						handleClick={isFavorite ? removeFavorite : addFavorite}
						artist={artist}
					/>
					<ul>
						{artist.releases.nodes.map((release: any) => (
							<StyledLink
								to={`/album/${release.id}`}
								key={release.id}
							>
								<ReleaseElement release={release} />
							</StyledLink>
						))}
					</ul>
				</>
			)}
		</Wrapper>
	);
};

export default ArtistDetails;
