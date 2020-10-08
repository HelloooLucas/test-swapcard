import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
	grid-area: content;
	padding: 40px 0 0 40px;
	border-top: 2px solid black;
	border-left: 2px solid black;
	overflow: scroll;
	font-size: 1.2rem;
`;

export const StyledLink = styled(NavLink)`
	display: block;
	width: 400px;
	margin-bottom: 15px;
`;
