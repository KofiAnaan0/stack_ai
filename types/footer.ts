import { IconType } from "react-icons";

export interface SocialLink {
	id: number;
	icon: IconType;
	href: string;
	label: string;
}

export interface SolutionProps {
	id: number;
	label: string;
	links: string;
}
export interface SupportProps {
	id: number;
	label: string;
	links: string;
}

export interface CompanyProps {
	id: number;
	label: string;
	links: string;
}

export interface LegalProps {
	id: number;
	label: string;
	links: string;
}
