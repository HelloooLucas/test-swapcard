import React from 'react'

import { FavoritesProps } from './../models/favorites-models';


const Favorites: React.FC<FavoritesProps> = ({ favorites, removeFavorite }) => {
    return (
        <ul>
            {favorites.map(fav => (
                <>
                    <li key={fav.id}>
                        {fav.name}
                        <button onClick={() => removeFavorite(fav)}>Remove</button>
                    </li>
                </>
            ))}
        </ul>
    )
};

export default Favorites;
