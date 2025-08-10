import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

const Section = (props: HTMLProps<HTMLDivElement>) => {
	return (
		<section
			{...props}
			className={cn(
				"pt-16 pb-16 mt-16 mb-16 flex flex-col justify-center items-center",
				props.className
			)}
		/>
	);
};

export default Section;
