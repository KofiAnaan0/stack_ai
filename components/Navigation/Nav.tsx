"use client";

import { navLinks } from "@/comstants/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { Button } from "../ui/Button";

type Props = {
	navOpen: () => void;
};

const Nav = ({ navOpen }: Props) => {
	const [navBg, setNavBg] = useState(false);

	useEffect(() => {
		const handleNavBg = () => {
			if (window.scrollY > 90) setNavBg(true);
			else setNavBg(false);
		};

		window.addEventListener("scroll", handleNavBg);

		return () => window.removeEventListener("scroll", handleNavBg);
	}, []);

	return (
		<div
			className={`${
				navBg ? "bg-gray-100 opacity-[95%] shadow-sm" : "fixed bg-transparent"
			} fixed z-[100]  h-[12vh] w-full transition-all duration-100 `}
		>
			<div className="w-[90%] lg:w-[80%] h-full flex justify-between items-center mx-auto">
				{/* logo */}
				<Image src={"/stackAI_logo.svg"} alt={"logo"} width={40} height={40} />

				{/* nav links */}
				<div className="hidden lg:flex space-x-4 items-center justify-center rounded-full bg-gray-200 py-3 px-6 ">
					{navLinks.map((link) => (
						<Link
							href={link.url}
							key={link.id}
							className="text-black font-normal text-xs md:text-sm hover:text-gray-600 transition duration-100"
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* CAT */}
				<div className="hidden lg:flex space-x-2 items-center">
					{/* login */}
					<Button variant="outline" size="default">
						Login
					</Button>

					{/* Demo Button */}
					<Button variant="default" size="default">
						Get a Demo
					</Button>
				</div>

				{/* Hamburger Menu */}
				<RiMenuFill
					onClick={navOpen}
					className="text-gray-400 hover:text-gray-200 w-8 h-8 cursor-pointer transition-all duration-100 lg:hidden"
				/>
			</div>
		</div>
	);
};

export default Nav;
