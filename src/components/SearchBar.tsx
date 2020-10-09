import React, { FC, useState } from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
	margin-bottom: 30px;
	margin-right: 15px;
	font-size: 1.2rem;
`;

const BackButton = styled.button`
	font-size: 100%;
	font-family: inherit;
	border: 0;
	padding: 0;
	background: none;
	cursor: pointer;
	margin-bottom: 60px;
`;

export interface Props {
	debouncedSetQuery: (query: string) => void;
}

const SearchBar: FC<Props> = ({ debouncedSetQuery }) => {
	const [inputText, setInputText] = useState('');

	const handleChange = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;
		setInputText(target.value);
		debouncedSetQuery(target.value);
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
			<BackButton onClick={handleReset}>Reset</BackButton>
		</>
	);
};

export default SearchBar;
