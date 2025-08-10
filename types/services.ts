export interface Services {
	id: string;
	title: string;
	icon: string;
	description: string;
	learnMoreUrl: string;
	category?: "government" | "finance" | "education" | "insurance";
}

// service card
export interface ServiceCardProps {
	loading?: boolean;
	onBookDemo: (serviceId: string) => Promise<void>;
	services: Services;
}
