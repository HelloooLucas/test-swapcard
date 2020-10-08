import React, { FC } from 'react';

interface LoadingProps {
	loading: boolean;
}

const Loading: FC<LoadingProps> = ({ loading }) => (
	<p>{loading ? 'Loading...' : ''}</p>
);

export default Loading;
