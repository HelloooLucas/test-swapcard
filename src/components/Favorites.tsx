import React from 'react';
import styled from 'styled-components';

import { FavoritesProps } from './../models/favorites-models';

const Wrapper = styled.div`
    grid-area: favorites;
    border-top: 2px solid black;
`;


const Favorites: React.FC<FavoritesProps> = ({ favorites, removeFavorite }) => {
    return (
        <Wrapper>
            <ul>
                {favorites.map(fav => (
                    <li key={fav.id}>
                        {fav.name}
                        <button onClick={() => removeFavorite(fav)}>Remove</button>
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
};

export default Favorites;
