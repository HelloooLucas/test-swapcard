import React from 'react'
import styled from 'styled-components';
import { toast } from 'react-toastify';

import { Artist } from './../../../models/artist.model';
import starFull from './../../../images/star-full.png';
import starEmpty from './../../../images/star-empty.png';


const FavPicto = styled.img`
    width: 20px;
    display: inline-block;
    cursor: pointer;
`;

interface FavoriteStarProps {
    isFavorite: boolean;
    handleClick: (fav: Artist) => void;
    artist: Artist;
};


const FavoriteStar:React.FC<FavoriteStarProps> = ({ isFavorite, handleClick, artist }) => {
    const picto = isFavorite ? starFull : starEmpty;
    const clickAndToast = () => {
        handleClick(artist);
        !isFavorite && toast.success(artist.name + ' was added to your favorites!');
        isFavorite && toast.error(artist.name + ' was removed from your favorites!');
    }

    return <FavPicto src={picto} onClick={clickAndToast} />;
};

export default FavoriteStar;
