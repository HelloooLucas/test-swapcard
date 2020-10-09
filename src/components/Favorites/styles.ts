import styled from 'styled-components';

export const Wrapper = styled.div`
	grid-area: favorites;
	border-top: 2px solid black;
	padding: 10px 0 0 10px;
`;

export const Title = styled.h3`
	font-weight: 700;
	margin-bottom: 10px;
	text-decoration: underline;
`;

export const ListItem = styled.li`
	cursor: pointer;
	margin-bottom: 4px;

	&:hover {
		text-decoration: line-through;
	}
`;
