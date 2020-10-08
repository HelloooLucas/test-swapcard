import React, { FC } from 'react';

interface ErrorProps {
	error: boolean;
}

const Error: FC<ErrorProps> = ({ error }) => <p>{error ? 'Error :(' : ''}</p>;

export default Error;
