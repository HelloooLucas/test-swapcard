import React from 'react';

interface Props {
	queryResponse: any;
	query?: string;
	data?: any[];
}

const LoadingStatus: (props: Props) => JSX.Element | null = ({
	queryResponse,
	query,
	data,
}) => {
	const { loading, error } = queryResponse;

	if (query?.length === 0) return <p>Please make a search</p>;
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	if (data?.length === 0) return <p>No results :o</p>;

	return null;
};

export default LoadingStatus;
