import React from 'react';
import styled from 'styled-components';

import { FavoritesProps } from './../models/favorites-models';

const Wrapper = styled.div`
    grid-area: favorites;
    border-top: 2px solid black;
    padding: 10px 0 0 10px;
`;

const Title = styled.h3`
    font-weight: 700;
    margin-bottom: 10px;
    text-decoration: underline;
`;

const ListItem = styled.li`
    cursor: pointer;
    margin-bottom: 4px;

    &:hover {
        text-decoration: line-through;
    }
`;


const Favorites: React.FC<FavoritesProps> = ({ favorites, removeFavorite }) => {
    return (
        <Wrapper>
            <Title>Favorites</Title>
            <ul>
                {favorites.map(fav => (
                    <ListItem
                        key={fav.id}
                        onClick={() => removeFavorite(fav)}
                    >
                        {fav.name}
                    </ListItem>
                ))}
            </ul>
        </Wrapper>
    )
};

export default Favorites;
