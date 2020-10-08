import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { RouteComponentProps } from 'react-router-dom';

import { FIND_ALBUM } from '../../queries';
import { Wrapper, BackButton, AlbumName, CoverPicture } from './styles';
import { Loading, Error } from '../../components';
import noImage from './../../images/no-image.png';

export interface MatchProp {
	id: string;
}

interface AlbumDetailsProps extends RouteComponentProps<MatchProp> {}

const AlbumDetails: FC<AlbumDetailsProps> = ({ match, history }) => {
	const albumId = match.params.id;
	const { loading, error, data } = useQuery(FIND_ALBUM, {
		variables: { id: albumId },
	});
	const album = data?.node;
	const imgUrl = album?.coverArtArchive.front || noImage;

	return (
		<Wrapper>
			<BackButton onClick={history.goBack}>
				{'< Back to artist'}
			</BackButton>
			<Loading loading={loading} />
			<Error error={!!error} />
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
