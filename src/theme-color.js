import React from 'react';
import styled from 'styled-components';
import { LightBulb } from '@styled-icons/heroicons-outline/';

const Wrapper = styled.div`
	position: absolute;
	right: 3em;
	top: 6em;
	border: 2px solid palevioletred;
	border-radius: 50%;
	text-align: center;
	background: #ffffff08;
	@media only screen and (max-width: 500px) {
		right: 1em;
	}
`;

const ThemeOptions = styled(LightBulb)`
	font-size: 18px;
	padding: 0.5em 0.5em;
	color: palevioletred;
	border-bottom: 1px solid palevioletred;
	width: 30px;
	height: 30px;
	background-color: #f9b8e838;
	color: ${(props) => props.theme.colors.letter};
	border-radius: 50%;
	&:hover {
		cursor: pointer;
		background: ${(props) => props.theme.colors.letter};
		color: ${(props) => props.theme.colors.primary};
	}
	h3 {
		margin: 0;
	}
`;

const ThemeColor = ({ handleTheme }) => {
	return (
		<Wrapper>
			<ThemeOptions onClick={handleTheme} />
		</Wrapper>
	);
};
export default ThemeColor;
