import React, { FC } from 'react';

import { Release } from '../../../../models/artist.model';
import noImage from './../../../../images/no-image.png';
import { Picture, ReleaseBlock } from './styles';

interface Props {
	release: Release;
}

const ReleaseElement: FC<Props> = ({ release }) => {
	const imgUrl = release.coverArtArchive.front || noImage;
	return (
		<ReleaseBlock>
			<Picture src={imgUrl} alt="Cover art" />
			<h3>{release.title}</h3>
		</ReleaseBlock>
	);
};

export default ReleaseElement;
