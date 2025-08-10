import React from "react";
import Section from "../ui/Section";
import MainGrid from "../ui/MainGrid";
import H2 from "../ui/H2";
import P from "../ui/P";
import { Button } from "../ui/Button";
import Image from "next/image";
import { AboutType } from "@/types/about";

interface AboutProps extends AboutType {
	reversed: boolean;
}

const About = ({ title, description, imageUrl, reversed }: AboutProps) => {
	// Determine the order of text and image based on the 'reversed' prop
	const textOrder = reversed ? "md:order-2" : "md:order-1";
	const imageOrder = reversed ? "md:order-1" : "md:order-2";

	return (
		<Section>
			<MainGrid>
				{/* text content */}
				<div
					data-aos="fade-up"
					className={`space-y-4 flex flex-col items-center justify-center ${textOrder}`}
				>
					{/* title */}
					<H2 className="md:text-start">{title}</H2>

					{/* description */}
					<P className="md:text-start">{description}</P>

					{/* CTA */}
					<div className="flex items-center justify-center md:justify-start">
						<Button variant="default" size="sm">
							Book a Demo
						</Button>
					</div>
				</div>
				<div
					className={`${imageOrder}`}
					data-aos="zoom-in"
					data-aos-delay="150"
				>
					<Image
						src={imageUrl}
						alt={"image"}
						priority={!reversed}
						height={380}
						placeholder="blur"
						className="rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto"
					/>
				</div>
			</MainGrid>
		</Section>
	);
};

export default About;
