import React, { Fragment } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import hero from '../assets/Hero.jpg';
import WorkHistory from '../components/WorkHistory';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

const mainFeaturedPost = {
	title: `Joshua Genato`,
	description: 'Web Developer',
	image: `url(${hero})`,
	imgText: 'main image description',
};

const Home = () => {
	return (
		<Fragment>
			<Header />
			<Hero post={mainFeaturedPost} />
			<div id='WorkHistory'>
				<WorkHistory />
			</div>
			<div id='Skills'>
				<Skills />
			</div>
			<div id='Projects'>
				<Projects />
			</div>
		</Fragment>
	);
};

export default Home;
