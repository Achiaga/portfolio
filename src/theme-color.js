import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	position: absolute;
	right: 3em;
	top: 6em;
	width: 6em;
	border: 2px solid palevioletred;
	border-radius: 5px;
	text-align: center;
	background: #ffffff08;
`;

const ThemeOptions = styled.div`
	font-size: 18px;
	padding: 0.5em 0.5em;
	color: palevioletred;
	border-bottom: 1px solid palevioletred;
	&:hover {
		cursor: pointer;
		background-color: #f9b8e838;
		color: ${(props) => props.theme.colors.letter};
	}
	h3 {
		margin: 0;
	}
`;

const ThemeColor = ({ handleTheme }) => {
	return (
		<Wrapper>
			<ThemeOptions id='dark' onClick={handleTheme}>
				<h3 id='dark'>Dark</h3>
			</ThemeOptions>
			<ThemeOptions id='light' onClick={handleTheme}>
				<h3 id='light'>Light</h3>
			</ThemeOptions>
			<ThemeOptions id='party' onClick={handleTheme}>
				<h3 id='party'>Party</h3>
			</ThemeOptions>
		</Wrapper>
	);
};
export default ThemeColor;
