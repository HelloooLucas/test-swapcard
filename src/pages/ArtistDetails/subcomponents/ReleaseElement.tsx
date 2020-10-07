import React from 'react';
import styled from 'styled-components';

import { Release } from '../../../models/artist.model';
import noImage from './../../../images/no-image.png';


const ReleaseBlock = styled.div`
    height: 50px;
    width: 400px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const Picture = styled.img`
    width: 50px;
    object-fit: cover;
    margin-right: 15px;
`;

interface ReleaseElementProps {
    release: Release;
};


const ReleaseElement:React.FC<ReleaseElementProps> = ({ release }) => {
    const imgUrl = release.coverArtArchive.front || noImage;
    return (
        <ReleaseBlock>
            <Picture src={imgUrl} alt="Cover art" />
            <h3>{release.title}</h3>
        </ReleaseBlock>
    )
};

export default ReleaseElement;
