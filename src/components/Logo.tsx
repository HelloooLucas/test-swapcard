import React, { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	grid-area: logo;
	font-size: 3rem;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-left: 2px solid black;
`;

const Logo: FC = () => {
	return (
		<Wrapper>
			<h1>SwapSound</h1>
		</Wrapper>
	);
};

export default Logo;
