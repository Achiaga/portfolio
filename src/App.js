import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { InitializeAnalytics } from './utils/analytics';
import Theme from './Theme';

import ThemeColor from './theme-color';
import Header from './header/navbar-header';
import HeaderMobile from './header/header-mobile';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';
import Toast from './toast/toast';
import Footer from './footer/footer';
import MobileContactInfo from './sidebar/mobile-contact-info';

const gradient = keyframes`
0% {
	background-position: 0% 50%;
}
50% {
	background-position: 100% 50%;
}
100% {
	background-position: 0% 50%;
}
`;

const isPartyTheme = ({ themeType }) => themeType === 'party';

const AppContainer = styled.div`
	background: ${({ theme }) => theme.colors.secondary};
	background-size: ${(props) => (isPartyTheme(props) ? '500% 500%' : 'none')};
	animation: ${(props) => (isPartyTheme(props) ? gradient : null)} 3s ease
		infinite;
	color: ${({ theme }) => theme.colors.primary};
	font-family: 'Nunito', sans-serif;
	transition: background-color 0.35s;
`;

const App = () => {
	const [scrollProgress, setScrollProgress] = useState('20%');
	const [didScroll, setDidScroll] = useState(false);
	const [toast, setToast] = useState([]);
	const [isSafari, setIsSafari] = useState(false);
	const [theme, setTheme] = useState('dark');

	const heroRef = useRef(null);
	const expRef = useRef(null);
	const skillsRef = useRef(null);
	const projectRef = useRef(null);
	const aboutRef = useRef(null);

	useEffect(() => {
		try {
			InitializeAnalytics();
		} catch (err) {
			console.log('HOTJAR not working on local');
		}
		listenToScrollEvent();
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf('safari') !== -1) {
			if (ua.indexOf('chrome') > -1) {
				setIsSafari(false); // Chrome
			} else {
				setIsSafari(true); // Safari
			}
		}
	}, []);

	const listenToScrollEvent = () => {
		document.addEventListener('scroll', () => {
			let scrolled;
			const yPos = window.scrollY;
			if (yPos < 150) scrolled = `20%`;
			if (yPos > 140) setDidScroll(true);
			if (yPos > 150) {
				scrolled = `${((yPos - 140) * 20) / 720 + 20}%`;
			}
			if (yPos > 860) {
				scrolled = `${((yPos - 860) * 20) / 650 + 40}%`;
			}
			if (yPos > 1510) {
				scrolled = `${((yPos - 1510) * 20) / 650 + 60}%`;
			}
			if (yPos > 2160) {
				scrolled = `${((yPos - 2160) * 20) / 2720 + 80}%`;
			}
			if (yPos > 4880) scrolled = `100%`;

			return setScrollProgress(scrolled);
		});
	};

	const handleScroll = (e) => {
		const { id } = e.currentTarget;
		if (id === 'intro') return scrollToRef(heroRef);
		if (id === 'exp') return scrollToRef(expRef);
		if (id === 'skills') return scrollToRef(skillsRef);
		if (id === 'project') return scrollToRef(projectRef);
		if (id === 'about') return scrollToRef(aboutRef);
		return scrollToRef(heroRef);
	};

	const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

	const handleToast = (msg) => {
		setToast((oldVal) => [...oldVal, msg]);
		setTimeout(() => {
			setToast((oldState) => oldState.splice(1, 1));
		}, 3000);
	};

	const handleTheme = (e) => {
		const { id } = e.target;
		setTheme(id);
	};

	return (
		<Theme theme={theme}>
			<AppContainer themeType={theme}>
				<Header
					isSafari={isSafari}
					scrollProgress={scrollProgress}
					handleScroll={handleScroll}
					setDidScroll={setDidScroll}
				/>
				<ThemeColor handleTheme={handleTheme} />
				<HeaderMobile />
				<Sidebar handleToast={handleToast} />
				<MobileContactInfo handleToast={handleToast} />
				<Toast toast={toast} />
				<Main
					heroRef={heroRef}
					expRef={expRef}
					skillsRef={skillsRef}
					projectRef={projectRef}
					aboutRef={aboutRef}
					handleToast={handleToast}
					didScroll={didScroll}
				/>
				<Footer />
			</AppContainer>
		</Theme>
	);
};

export default App;
