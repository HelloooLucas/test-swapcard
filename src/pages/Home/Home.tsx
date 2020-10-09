import React, { FC, useEffect, useState } from 'react';

import { SearchBar, LoadingStatus } from './../../components';
import { ArtistElement } from './subcomponents';
import { Artist } from './../../models/artist.model';
import { Wrapper, StyledLink } from './styles';
import { useLazyQuery } from '@apollo/client';
import { SearchResult, SearchArtistVars } from '../../models/app.model';
import { SEARCH_ARTISTS } from '../../queries';

const debounce = require('lodash/debounce'); // Tree shaking

const Home: FC = () => {
	const [query, setQuery] = useState('');

	const [searchArtists, queryResponse] = useLazyQuery<
		SearchResult,
		SearchArtistVars
	>(SEARCH_ARTISTS, { variables: { query } });

	const debouncedSetQuery = debounce(
		(inputText: string) => setQuery(inputText),
		400
	);

	useEffect(() => {
		query && searchArtists();
	}, [query, searchArtists]);

	const artists = queryResponse.data?.search.artists.nodes;

	return (
		<Wrapper>
			<SearchBar debouncedSetQuery={debouncedSetQuery} />
			<LoadingStatus
				query={query}
				queryResponse={queryResponse}
				data={artists}
			/>

			{artists && (
				<ul>
					{artists.map((artist: Artist) => (
						<StyledLink to={`/artist/${artist.id}`} key={artist.id}>
							<ArtistElement artist={artist} />
						</StyledLink>
					))}
				</ul>
			)}
		</Wrapper>
	);
};

export default Home;
