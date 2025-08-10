import { cn } from "@/lib/utils";
import React, { HTMLProps } from "react";

const H1 = (props: HTMLProps<HTMLHeadingElement>) => {
	return (
		<h1
			{...props}
			className={cn(
				"font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tight text-center",
				props.className
			)}
		/>
	);
};

export default H1;
