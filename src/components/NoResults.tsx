import React, { FC } from 'react';

interface NoResultProps {
	data: any[];
}

const NoResult: FC<NoResultProps> = ({ data }) => (
	<p>{!data.length ? 'No results :o' : ''}</p>
);

export default NoResult;
