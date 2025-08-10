import { StaticImageData } from "next/image";

export interface AboutType {
	id: number;
	title: string;
	description: string;
	imageUrl: string | StaticImageData;
}
