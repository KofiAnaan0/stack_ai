import { AboutType } from "@/types/about";
import casesImage from "@/public/About/cases.png";
import deploymentImage from "@/public/About/deployment.png";
import entpriseImage from "@/public/About/entprise.png";
import nocodeImage from "@/public/About/nocode.png";

export const AboutData: AboutType[] = [
	{
		id: 1,
		title: "No Coding Required",
		description:
			"Build AI agents effortlessly with our visual interface. Deploy with customizable UIs or ready-to-use API endpoints.",
		imageUrl: nocodeImage,
	},
	{
		id: 2,
		title: "Enterprise-grade security.",
		description:
			"Stack AI is SOC2, HIPAA, and GDPR compliant, and has DPAs signed with the main AI providers, such as Anthropic and OpenAI.",
		imageUrl: entpriseImage,
	},
	{
		id: 3,
		title: "Pre-built use cases.",
		description:
			"Leverage our extensive library of Templates inspired by real use cases. Achieve immediate results and customize to your needs.",
		imageUrl: casesImage,
	},
	{
		id: 4,
		title: "On-premise deployment.",
		description:
			"Stack AI can be self-hosted on your own servers or VPC (Virtual Private Cloud), giving you complete control over your data.",
		imageUrl: deploymentImage,
	},
];
