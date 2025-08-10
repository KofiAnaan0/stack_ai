import React from "react";
import About from "../helper/About";
import { AboutData } from "@/comstants/data/about";

const AboutSection = () => {
	return (
		<>
			{AboutData.map((item, index) => (
				<About reversed={index % 2 != 0} key={item.id} {...item} />
			))}
		</>
	);
};

export default AboutSection;
