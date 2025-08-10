import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Responsive from "@/components/Navigation/Responsive";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Build AI Agents with Enterprise AI Platform | StackAI",
	description:
		"StackAI’s enterprise platform lets you build, deploy, and manage AI agents that automate workflows, streamline operations, and deliver faster results—without coding.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>
				<Responsive />
				{children}
			</body>
		</html>
	);
}
