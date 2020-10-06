import React, { useState, useEffect } from 'react';

import { SearchBarProps } from './../models/searchbar-models';


const SearchBar:React.FC<SearchBarProps> = ({ onChange }) => {
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        onChange(inputText)
    });

    return (
        <input
            type="text"
            onChange={e => setInputText(e.target.value)}
            value={inputText}
        />
    )
}

export default SearchBar;
