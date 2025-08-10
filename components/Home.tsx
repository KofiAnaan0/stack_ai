import React from "react";
import Hero from "./HomePage/Hero";
import PainPoint from "./HomePage/PainPoint";
import Services from "./HomePage/Services";
import Review from "./HomePage/Review";
import AboutSection from "./HomePage/AboutSection";
import Contact from "./HomePage/Contact";
import Footer from "./HomePage/Footer";

const Home = () => {
	return (
		<div className="w-full overflow-hidden">
			<Hero />
			<PainPoint />
			<Services />
			<Review />
			<AboutSection />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
