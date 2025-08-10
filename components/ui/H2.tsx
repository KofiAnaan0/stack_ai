import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

const H2 = (props: HTMLProps<HTMLHeadingElement>) => {
	return (
		<h2
			{...props}
			className={cn(
				"text-black text-lg md:text-xl lg:text-2xl font-bold text-center",
				props.className
			)}
		/>
	);
};

export default H2;
