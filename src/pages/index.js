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

const IndexPage = () => {
	const [didLoad, setDidLoad] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setDidLoad(true)
		}, 1000)
	}, []);

	return (
		<>
			{ !didLoad &&
				<div id="website-loading-animation">
					<Triangle color="#fb9700" height={80} width={80} />
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
