import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

const H3 = (props: HTMLProps<HTMLHeadingElement>) => {
	return (
		<h3
			{...props}
			className={cn(
				"text-black text-base md:text-lg lg:text-xl font-semibold",
				props.className
			)}
		/>
	);
};

export default H3;
