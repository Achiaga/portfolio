import React from 'react';
import { ThemeProvider } from 'styled-components';

const colors = {
	light: {
		letter: 'black',
		primary: 'palevioletred',
		secondary: 'white',
		transparent: '#0000009e',
	},
	party: {
		letter: 'black',
		primary: 'palevioletred',
		secondary: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
		transparent: '#0000009e',
	},
	dark: {
		letter: 'white',
		primary: 'palevioletred',
		secondary: '#1e1e1e',
		transparent: '#ffffff9e',
	},
};

const breakpoints = {
	xxl: 1200,
	xl: 950,
	l: 800,
	m: 550,
	s: 450,
	xs: 350,
};

const fontSizes = {
	title: '16',
	subtitle: '16',
	header: '16',
	subheader: '16',
	text: '16',
};

const constructCssCode = (children, item) => `${item}:${children[item]}`;

const createMeidaQuery = (children, breakpoint) => {
	return `
	@media (max-width: ${breakpoint}px) {
		${Object.keys(children)
			.map((item) => constructCssCode(children, item))
			.join(';')}
	}`;
};

const bigDesktopMedia = (children) => {
	return createMeidaQuery(children, breakpoints.xxl);
};

const desktopMedia = (children) => {
	return createMeidaQuery(children, breakpoints.xl);
};

const smallDesktopMedia = (children) => {
	return createMeidaQuery(children, breakpoints.l);
};

const bigMobileMedia = (children) => {
	return createMeidaQuery(children, breakpoints.m);
};

const mobileMedia = (children) => {
	return createMeidaQuery(children, breakpoints.s);
};

const smallMobileMedia = (children) => {
	return createMeidaQuery(children, breakpoints.xs);
};

const query = {
	smallMobile: smallMobileMedia,
	mobile: mobileMedia,
	bigMobile: bigMobileMedia,
	smallDesktop: smallDesktopMedia,
	desktop: desktopMedia,
	bigDesktop: bigDesktopMedia,
};

const fontWeights = {
	lighter: '300',
	light: '400',
	normal: '500',
	bold: '700',
};

const fontFamily = {};

const theme = {
	breakpoints,
	colors,
	fontSizes,
	fontWeights,
	fontFamily,
	query,
};

const Theme = ({ theme: themeColor, children }) => {
	const color = theme.colors[themeColor];
	return (
		<ThemeProvider theme={{ ...theme, colors: color }}>
			{children}
		</ThemeProvider>
	);
};

export default Theme;
