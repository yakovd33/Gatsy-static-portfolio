import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Projects from '../components/Home/Projects';
import Quote from '../components/Home/Quote';
import Footer from '../components/Footer';
import '../styles/home.sass';
import { Triangle } from 'react-loader-spinner'
import SmallContactBox from "../components/Home/SmallContactBox";
import { Helmet } from "react-helmet";

const IndexPage = () => {
	const [didLoad, setDidLoad] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setDidLoad(true)
		}, 1000)
	}, []);

	return (
		<>
			<Helmet>
				<title>Yakov Code - Fullstack developer | Programmer | Freelancer</title>
			</Helmet>

			{ !didLoad &&
				<div id="website-loading-animation">
					<Triangle color="#29ecba" height={80} width={80} />
				</div>
			}

			{ didLoad && <Layout>
				<Hero />
				<Projects />
				<SmallContactBox/>
				<About />
				<Quote />
				<Footer />
			</Layout> }
		</>
	)
}

export default IndexPage
