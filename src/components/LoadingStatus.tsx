import React from 'react';
import { ApolloError } from '@apollo/client';
import { Artist, Release } from './../models/artist.model';

interface Props {
	queryResponse: {
		loading: boolean;
		error?: ApolloError | undefined;
		data: any; // Not very proud of this one, but didn't know how to type it
	};
	query?: string;
	data?: Artist[] | Release[];
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
