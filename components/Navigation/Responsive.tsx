"use client";

import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Responsive = () => {
	const [showNav, setShowNav] = useState(false);

	const handleNavOpen = () => {
		setShowNav(true);
	};

	const handleNavClose = () => {
		setShowNav(false);
	};

	return (
		<>
			<Nav navOpen={handleNavOpen} />
			<MobileNav navClose={handleNavClose} showNav={showNav} />
		</>
	);
};

export default Responsive;
