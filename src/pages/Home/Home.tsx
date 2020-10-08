import React, { FC } from 'react';

import { SearchBar, NoResults } from './../../components';
import { ArtistElement, LoadingStatus } from './subcomponents';
import { Artist } from './../../models/artist.model';
import { Wrapper, StyledLink } from './styles';

interface HomeProps {
	queryResponse: any;
	debouncedSetQuery: (text: string) => void;
	query: string;
}

const Home: FC<HomeProps> = ({ queryResponse, debouncedSetQuery, query }) => {
	const { data } = queryResponse;
	const artists = data?.search.artists.nodes;

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
