import React from "react";
import Image from "next/image";
import thumbNail from "@/public/stack_thumbnail.png";
import LogoCloud from "../logo-cloud";
import P from "../ui/P";
import H1 from "../ui/H1";
import { Button } from "../ui/Button";
import Main from "../ui/Main";
import Section from "../ui/Section";

const Hero = () => {
	return (
		<Section
			className="mt-0"
			style={{
				background: "radial-gradient(circle, #999999 0%, #FFFFFF 100%)",
			}}
		>
			{/* main content */}
			<Main data-aos="fade-up">
				{/* Title */}
				<H1 className="pt-[150px]">
					Automate 80% of IT Support & Ticket Routing{" "}
					<span className="hidden lg:block"></span> in 24 Hours (Cut Costs 50%
					Without Hiring)
				</H1>

				{/* description */}
				<P className="text-center">
					Endless ticket queues and rising costs drain IT teams. Deploy AI
					agents to route, resolve, <span className="hidden lg:block"></span>{" "}
					and answer queries instantly—boosting productivity and slashing
					expenses.
				</P>

				{/* CAT */}
				<div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 pb-6 w-full">
					{/* Demo */}
					<Button className="border-black w-full md:w-fit">Book a Demo</Button>

					{/* try */}
					<Button
						variant="outline"
						size="default"
						className="border-black w-full md:w-fit"
					>
						Try for Free
					</Button>
				</div>

				{/* video explanation */}
				<div
					className="mx-auto flex items-center justify-center"
					data-aos="fade-up"
					data-aos-delay="150"
				>
					<Image
						src={thumbNail}
						alt={"image"}
						height={400}
						className="rounded-md shadow-md"
					/>
				</div>

				{/* Brands */}
				<LogoCloud />
			</Main>
		</Section>
	);
};

export default Hero;
