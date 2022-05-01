import * as React from "react";
import Layout from "../components/Layout";
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Projects from '../components/Home/Projects';
import Quote from '../components/Home/Quote';
import Testimonials from '../components/Home/Testimonials';
import Blog from '../components/Home/Blog';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import '../styles/home.sass';

const IndexPage = () => {
  return (
	<Layout>
		<Hero/>
		<About/>
		<Quote/>
		<Testimonials/>
		<Projects/>
		<Newsletter/>
		<Blog/>
		<Footer/>
	</Layout>
  )
}

export default IndexPage
