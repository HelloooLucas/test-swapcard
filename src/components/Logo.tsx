import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    grid-area: logo;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2px solid black;
`;

const Logo:React.FC = () => {
    return (
        <Wrapper>
            <h1>Swap Sound</h1>
        </Wrapper>
    );
};

export default Logo;
