import React, { FC, useCallback, useEffect, useState } from 'react';

import { SearchBar, NoResults } from './../../components';
import { ArtistElement, LoadingStatus } from './subcomponents';
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
			<LoadingStatus query={query} queryResponse={queryResponse} />

			{artists && (
				<>
					<NoResults data={artists} />
					<ul>
						{artists.map((artist: Artist) => (
							<StyledLink
								to={`/artist/${artist.id}`}
								key={artist.id}
							>
								<ArtistElement artist={artist} />
							</StyledLink>
						))}
					</ul>
				</>
			)}
		</Wrapper>
	);
};

export default Home;
