import React, { FC, useState } from 'react';

import { SearchInput, ResetButton } from './styles';

export interface Props {
	debouncedSetQuery: (query: string) => void;
}

const SearchBar: FC<Props> = ({ debouncedSetQuery }) => {
	const [inputText, setInputText] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputText(e.target.value);
		debouncedSetQuery(e.target.value);
	};

	const handleReset = () => {
		debouncedSetQuery('');
		setInputText('');
	};

	return (
		<>
			<SearchInput
				type="text"
				onChange={handleChange}
				value={inputText}
				placeholder="Type an artist..."
			/>
			<ResetButton onClick={handleReset}>Reset</ResetButton>
		</>
	);
};

export default SearchBar;
