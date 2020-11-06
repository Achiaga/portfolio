import React from 'react';
import styled from 'styled-components';
import CodeIcon from '../assets/coding.png';

const MobileHeaderContainer = styled.div`
	display: none;
	@media only screen and (max-width: 550px) {
		display: block;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		padding: 0.8em 0;
		font-weight: 400;
		display: flex;
		align-items: center;
		justify-content: center;
		background: ${(props) => props.theme.colors.secondary};
		color: ${(props) => props.theme.colors.primary};
		z-index: 9999;
		box-shadow: 0 -2px 10px rgba(0, 0, 0, 1);
		h1 {
			margin: 0;
			font-family: 'Gugi', cursive;
			font-size: 45px;
			color: palevioletred;
			font-weight: 100;
		}
	}
`;

const ProgrammerIcon = styled.img`
	width: 40px;
	margin-left: -2.5em;
	padding-right: 1em;
`;

const MobileHeader = () => {
	return (
		<MobileHeaderContainer>
			<ProgrammerIcon src={CodeIcon} />
			<h1>ACHIAGA</h1>
		</MobileHeaderContainer>
	);
};
export default MobileHeader;
