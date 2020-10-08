import React, { FC } from 'react';
import styled from 'styled-components';

import { Artist } from '../../../models/artist.model';
import noImage from './../../../images/no-image.png';

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

interface ArtistElementProps {
	artist: Artist;
}

const ArtistElement: FC<ArtistElementProps> = ({ artist }) => {
	const imgUrl = artist.mediaWikiImages[0]?.url || noImage;
	return (
		<ArtistBlock>
			<Picture src={imgUrl} alt="Cover art" />
			<h3>{artist.name}</h3>
		</ArtistBlock>
	);
};

export default ArtistElement;
