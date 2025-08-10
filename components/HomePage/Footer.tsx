import React from "react";
import Section from "../ui/Section";
import Grid from "../ui/Grid";
import H3 from "../ui/H3";
import P from "../ui/P";
import {
	companyData,
	legalData,
	socialLinks,
	solutionData,
	supportData,
} from "@/comstants/data/footer";
import Link from "../ui/NextLink";
import Main from "../ui/Main";

const Footer = () => {
	return (
		<Section className="bg-black mb-0 pb-4 mt-0">
			<Main data-aos="fade-up">
				<Grid className="lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">
					{/* about */}
					<div className="space-y-4">
						{/* title */}
						<H3 className="text-gray-100 text-start">Stack AI</H3>

						{/* description */}
						<P className="text-gray-200 text-start text-sm">
							We help enterprises automate IT and business workflows with AI
							agents that cut costs, clear backlogs, and boost
							productivity—without coding.
						</P>

						{/* social links */}
						<div className="flex items-center justify-start space-x-4">
							{socialLinks.map((link) => {
								const IconComponent = link.icon;

								return (
									<Link
										href={link.href}
										key={link.id}
										className=" text-gray-200 hover:text-gray-300 transition-colors no-underline mb-2"
									>
										<IconComponent />
									</Link>
								);
							})}
						</div>
					</div>

					{/* Solutions */}
					<div className="space-y-4">
						<H3 className="text-gray-100 text-start">Solutions</H3>

						<div className="flex flex-col space-y-2">
							{solutionData.map((solution) => (
								<Link
									href={solution.links}
									key={solution.id}
									className="text-gray-200 text-sm hover:text-gray-300 transition-colors no-underline"
								>
									{solution.label}
								</Link>
							))}
						</div>
					</div>

					{/* Support */}
					<div className="space-y-4">
						<H3 className="text-gray-100 text-start">Support</H3>

						<div className="flex flex-col space-y-2">
							{supportData.map((support) => (
								<Link
									href={support.links}
									key={support.id}
									className="text-gray-200 text-sm hover:text-gray-300 transition-colors no-underline"
								>
									{support.label}
								</Link>
							))}
						</div>
					</div>

					{/* Company */}
					<div className="space-y-4">
						<H3 className="text-gray-100 text-start">Company</H3>

						<div className="flex flex-col space-y-2">
							{companyData.map((company) => (
								<Link
									href={company.links}
									key={company.id}
									className="text-gray-200 text-sm hover:text-gray-300 transition-colors no-underline"
								>
									{company.label}
								</Link>
							))}
						</div>
					</div>

					{/* Legal */}
					<div className="space-y-4">
						<H3 className="text-gray-100 text-start">Legal</H3>

						<div className="flex flex-col space-y-2">
							{legalData.map((legal) => (
								<Link
									href={legal.links}
									key={legal.id}
									className="text-gray-200 text-sm hover:text-gray-300 transition-colors no-underline"
								>
									{legal.label}
								</Link>
							))}
						</div>
					</div>
				</Grid>

				{/* divider */}
				<div className="w-full border-t border-gray-600"></div>

				{/* Copyright */}
				<div className="flex items-center justify-center">
					<P className="text-sm text-gray-400">
						©{new Date().getFullYear()} StackAI. All rights reserved
					</P>
				</div>
			</Main>
		</Section>
	);
};

export default Footer;
