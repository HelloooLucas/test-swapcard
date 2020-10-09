import React, { FC } from 'react';

import { Artist } from '../../../../models/artist.model';
import noImage from './../../../../images/no-image.png';
import { ArtistBlock, Picture } from './styles';

interface Props {
	artist: Artist;
}

const ArtistElement: FC<Props> = ({ artist }) => {
	const imgUrl = artist.mediaWikiImages[0]?.url || noImage;
	return (
		<ArtistBlock>
			<Picture src={imgUrl} alt="Cover art" />
			<h3>{artist.name}</h3>
		</ArtistBlock>
	);
};

export default ArtistElement;
