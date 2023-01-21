import React, { useState, useEffect, Suspense } from "react";
import Layout from "../components/Layout";
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Projects from '../components/Home/Projects';
// import Contact from '../components/Home/Contact';
import '../styles/home.sass';
import { Triangle } from 'react-loader-spinner'
import SmallContactBox from "../components/Home/SmallContactBox";
import { Helmet } from "react-helmet";

const Contact = React.lazy(() =>
  import("../components/Home/Contact")
)

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
				<Suspense>
					<Contact />
				</Suspense>
			</Layout> }
		</>
	)
}

export default IndexPage
