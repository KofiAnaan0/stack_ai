import React from "react";
import P from "../ui/P";
import H2 from "../ui/H2";
import { Button } from "../ui/Button";
import Section from "../ui/Section";
import Main from "../ui/Main";

const PainPoint = () => {
	return (
		<Section>
			<Main data-aos="fade-up">
				{/* title */}
				<H2>
					Buried Under Endless IT Tickets? Our AI Agents Triage,{" "}
					<span className="hidden lg:block"></span> Route & Resolve 80% of Them
					in 24 Hours
				</H2>

				{/* description */}
				<P>
					Every day you wait, the backlog grows. Deploy AI agents that resolve
					most tickets instantly, <span className="hidden lg:block"></span>{" "}
					route the rest intelligently, and slash your support load by 80% in
					one day.
				</P>

				{/* CTA */}
				<div className="flex items-center justify-center">
					<Button>Book a Demo</Button>
				</div>
			</Main>
		</Section>
	);
};

export default PainPoint;
