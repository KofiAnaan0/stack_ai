export interface Reviews {
	id: string;
	icon: string;
	title: string;
	description: string;
	name: string;
	designation: string;
	profileUrl: string;
}

export interface ReviewCardProps {
	review: Reviews;
}
