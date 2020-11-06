import React from 'react';
import Hero from './hero/hero';
import Experience from './experience/experience';
import Skills from './skills/skills';
import Projects from './projects/projects';
import About from './about/about';

const Main = ({
	didScroll,
	handleToast,
	heroRef,
	expRef,
	skillsRef,
	projectRef,
	aboutRef,
}) => {
	return (
		<>
			<Hero didScroll={didScroll} handleToast={handleToast} heroRef={heroRef} />
			<Experience expRef={expRef} />
			<Skills skillsRef={skillsRef} />
			<Projects projectRef={projectRef} />
			<About aboutRef={aboutRef} />
		</>
	);
};

export default Main;
