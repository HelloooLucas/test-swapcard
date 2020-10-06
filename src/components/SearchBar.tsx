import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { SearchBarProps } from './../models/searchbar-models';

const SearchInput = styled.input`
    margin-bottom: 30px;
    font-size: 1.2rem;
`;


const SearchBar:React.FC<SearchBarProps> = ({ onChange }) => {
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        onChange(inputText)
    });

    return (
        <SearchInput
            type="text"
            onChange={e => setInputText(e.target.value)}
            value={inputText}
            placeholder="Type an artist..."
        />
    )
}

export default SearchBar;
