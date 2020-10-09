import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';

import { FIND_ARTIST } from '../../queries';
import { Release } from '../../models/artist.model';
import { LoadingStatus } from '../../components';
import { FavoritesStar, ReleaseElement } from './subcomponents';
import { Wrapper, BackButton, ArtistName, StyledLink } from './styles';

export interface MatchProp {
	id: string;
}

interface Props extends RouteComponentProps<MatchProp> {}

const ArtistDetails: FC<Props> = ({ history, match }) => {
	const artistId = match.params.id;
	const queryResponse = useQuery(FIND_ARTIST, {
		variables: { id: artistId },
	});
	const artist = queryResponse.data?.node;

	return (
		<Wrapper>
			<BackButton onClick={history.goBack}>{'< Back to Home'}</BackButton>
			<LoadingStatus
				queryResponse={queryResponse}
				data={artist?.releases.nodes}
			/>
			{artist && (
				<>
					<ArtistName>Albums by {artist.name}</ArtistName>
					<FavoritesStar artist={artist} />
					<ul>
						{artist.releases.nodes.map((release: Release) => (
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
