import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
	grid-area: content;
	font-size: 1.2rem;
	padding: 40px 0 0 40px;
	border-top: 2px solid black;
	border-left: 2px solid black;
	overflow: scroll;
`;

export const BackButton = styled.button`
	font-size: 100%;
	font-family: inherit;
	border: 0;
	padding: 0;
	background: none;
	cursor: pointer;
	margin-bottom: 60px;
`;

export const ArtistName = styled.h1`
	font-size: 2.4rem;
	font-weight: 700;
	display: inline-block;
	margin-right: 8px;
	margin-bottom: 30px;
`;

export const StyledLink = styled(NavLink)`
	display: block;
	width: 400px;
	margin-bottom: 15px;
`;
