import { Services } from "@/types/services";

export const serviceData: Services[] = [
	{
		id: "government",
		title: "Government",
		description:
			"AI for complex policy decisions, legal frameworks and public sector operations",
		icon: "/service/government.svg",
		learnMoreUrl: "/services/government",
		category: "government",
	},
	{
		id: "insurance",
		title: "Insurance",
		description:
			"Automate underwriting, fraud detection and claims processing with precision.",
		icon: "/service/insurance.svg",
		learnMoreUrl: "/services/insurance",
		category: "insurance",
	},
	{
		id: "education",
		title: "Education",
		description:
			"Enhance students learning, assessments and Research with domain-tuned AI tools",
		icon: "/service/school.svg",
		learnMoreUrl: "/services/education",
		category: "education",
	},
	{
		id: "finance",
		title: "Finance",
		description:
			"Drive smarter forecasting, risk modelling, and customer services in real-time",
		icon: "/service/finance.svg",
		learnMoreUrl: "/services/finance",
		category: "finance",
	},
] as const;
