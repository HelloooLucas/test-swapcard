import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    margin-bottom: 30px;
    font-size: 1.2rem;
`;

export interface SearchBarProps {
    debouncedSetQuery: (query: string) => void;
};


const SearchBar:React.FC<SearchBarProps> = ({ debouncedSetQuery }) => {
    const [inputText, setInputText] = useState('');

    const handleChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setInputText(target.value);
        debouncedSetQuery(target.value);
    }

    return (
        <SearchInput
            type="text"
            onChange={handleChange}
            value={inputText}
            placeholder="Type an artist..."
        />
    )
}

export default SearchBar;
