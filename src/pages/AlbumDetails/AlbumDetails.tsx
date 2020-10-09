import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';

import { FIND_ALBUM } from '../../queries';
import { Wrapper, BackButton, AlbumName, CoverPicture } from './styles';
import { LoadingStatus } from '../../components';
import noImage from './../../images/no-image.png';

export interface MatchProp {
	id: string;
}

interface Props extends RouteComponentProps<MatchProp> {}

const AlbumDetails: FC<Props> = ({ match, history }) => {
	const albumId = match.params.id;

	const queryResponse = useQuery(FIND_ALBUM, {
		variables: { id: albumId },
	});
	const album = queryResponse.data?.node;
	const imgUrl = album?.coverArtArchive.front || noImage;

	return (
		<Wrapper>
			<BackButton onClick={history.goBack}>
				{'< Back to artist'}
			</BackButton>
			<LoadingStatus queryResponse={queryResponse} />
			{album && (
				<>
					<AlbumName>{album.title}</AlbumName>
					<CoverPicture src={imgUrl} />
				</>
			)}
		</Wrapper>
	);
};

export default AlbumDetails;
