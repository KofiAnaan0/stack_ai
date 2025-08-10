import {
	CompanyProps,
	LegalProps,
	SocialLink,
	SolutionProps,
	SupportProps,
} from "@/types/footer";
import { FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // For the new X logo

export const socialLinks: SocialLink[] = [
	{
		id: 1,
		icon: FaLinkedin,
		href: "#",
		label: "Linkedin",
	},
	{
		id: 2,
		icon: FaYoutube,
		href: "#",
		label: "Youtube",
	},
	{
		id: 3,
		icon: FaXTwitter,
		href: "#",
		label: "x(twitter)",
	},
];

export const solutionData: SolutionProps[] = [
	{
		id: 1,
		label: "Industrials",
		links: "#",
	},
	{
		id: 2,
		label: "Finance",
		links: "#",
	},
	{
		id: 3,
		label: "Insurance",
		links: "#",
	},
	{
		id: 4,
		label: "Education",
		links: "#",
	},
	{
		id: 5,
		label: "Government",
		links: "#",
	},
	{
		id: 6,
		label: "Workflow Builder",
		links: "#",
	},
	{
		id: 7,
		label: "Interfaces",
		links: "#",
	},
	{
		id: 8,
		label: "RAG",
		links: "#",
	},
];

export const supportData: SupportProps[] = [
	{
		id: 1,
		label: "Pricing",
		links: "#",
	},
	{
		id: 2,
		label: "Documentation",
		links: "#",
	},
	{
		id: 3,
		label: "Academy",
		links: "#",
	},
	{
		id: 4,
		label: "Status Page",
		links: "#",
	},
	{
		id: 5,
		label: "Changelog",
		links: "#",
	},
	{
		id: 6,
		label: "n8n vs StackAI",
		links: "#",
	},
];

export const companyData: CompanyProps[] = [
	{
		id: 1,
		label: "Blog",
		links: "#",
	},
	{
		id: 2,
		label: "Finance",
		links: "#",
	},
	{
		id: 3,
		label: "Careers",
		links: "#",
	},
	{
		id: 4,
		label: "Affiliate Program",
		links: "#",
	},
	{
		id: 5,
		label: "Stack AI Certified",
		links: "#",
	},
	{
		id: 6,
		label: "Security",
		links: "#",
	},
	{
		id: 7,
		label: "Get a Demo",
		links: "#",
	},
];

export const legalData: LegalProps[] = [
	{
		id: 1,
		label: "Privacy",
		links: "#",
	},
	{
		id: 2,
		label: "Terms",
		links: "#",
	},
	{
		id: 3,
		label: "Referral Terms",
		links: "#",
	},
	{
		id: 4,
		label: "OpenAI DPA",
		links: "#",
	},
	{
		id: 5,
		label: "Anthropic DPA",
		links: "#",
	},
	{
		id: 6,
		label: "SOC 2 Report",
		links: "#",
	},
	{
		id: 7,
		label: "Sign BAA With Us",
		links: "#",
	},
];
