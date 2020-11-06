import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
	width: 65%;
	display: flex;
	justify-content: space-evenly;
	align-items: baseline;
	padding-top: 3em;
	height: 200px;
	@media only screen and (max-width: 1200px) {
		height: auto;
		width: 100%;
	}
	@media only screen and (max-width: 450px) {
		padding-top: 0em;
		height: auto;
		width: 100%;
	}
`;

const SkillsColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 28%;
	@media only screen and (max-width: 450px) {
		width: 40%;
	}
`;

const TextContainer = styled(motion.div)`
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	@media only screen and (max-width: 450px) {
		height: 65px;
	}
`;

const ColumnText = styled(motion.span)`
	color: white;
	color: ${(props) =>
		props.color === 'pink' ? 'palevioletred' : props.theme.colors.letter};
	text-align: center;
	flex: 0 0 175px;
	font-size: 18px;
	font-weight: 700;
	width: 100%;
	letter-spacing: 2px;
	font-family: 'Calibre', sans-serif;
	cursor: default;
	@media only screen and (max-width: 450px) {
		text-align: center;
		font-size: 14px;
		flex: 0 0 130px;
	}
`;

const listSkills = [
	['#Reactjs', '#Styled Components', '#Javascript', '#Bootstrap'],
	['#Redux', '#CSS', '#HTML5', '#Hooks'],
	['#Threejs', '#Rest API', '#Framer Motion', '#Enzyme'],
];

const Education = () => {
	return (
		<Container>
			{listSkills.map((column, columnIndex) => {
				return (
					<SkillsColumn key={columnIndex}>
						{column.map((skill, index) => {
							return (
								<TextContainer key={columnIndex + index}>
									<ColumnText
										whileHover={{
											scaleX: [1, 1.2, 0.85, 1],
											scaleY: [1, 0.8, 1.15, 1],
										}}
										color={(index + columnIndex) % 2 === 0 ? 'pink' : null}>
										{skill}
									</ColumnText>
								</TextContainer>
							);
						})}
					</SkillsColumn>
				);
			})}
		</Container>
	);
};

export default Education;
