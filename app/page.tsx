"use client";

import Home from "@/components/Home";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
	useEffect(() => {
		const initAOS = async () => {
			await import("aos");

			AOS.init({
				duration: 1000,
				easing: "ease-in-out",
				once: true, // whether animation should happen only once - while scrolling down
				anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
			});
		};

		initAOS();
	}, []);

	return (
		<>
			<Home />
		</>
	);
};

export default HomePage;
