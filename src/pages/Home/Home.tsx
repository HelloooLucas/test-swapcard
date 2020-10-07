import React from 'react';

import { SearchBar, Loading, Error, NoResults } from './../../components';
import { ArtistElement } from './subcomponents';
import { Artist } from './../../models/artist.model';
import { Wrapper, StyledLink } from './styles';


interface HomeProps {
    queryResponse: any;
    debouncedSetQuery: (text: string) => void;
    query: string;
};


const Home:React.FC<HomeProps> = ({ queryResponse, debouncedSetQuery, query }) => {
    const { loading, error, data } = queryResponse;
    const artists = data?.search.artists.nodes;

    return (
        <Wrapper>
            <SearchBar debouncedSetQuery={debouncedSetQuery} />

            {!query ? <p>Please make a search</p> : ''}
            {query ? <Loading loading={loading} /> : ''}
            {query && !loading ? <Error error={!!error} /> : ''}

            {artists && (
                <>
                    <NoResults data={artists} />
                    <ul>
                        {artists.map((artist: Artist) => (
                            <StyledLink to={`/artist/${artist.id}`} key={artist.id}>
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
