import Link from "next/link";
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";

import getServerSession from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { AiOutlineMenu } from "react-icons/ai";
type userInfoTypes = {
	name: string;
	email: string;
	image: string;
};
// import { useState, useEffect } from "react";
async function getUserInfo(userInfo: userInfoTypes) {
	const res = await fetch("http://localhost:3000/api/auth/session");
	return res.json();
}

export default async function Nav({ userInfo }: { userInfo: userInfoTypes }) {
	// const session = await getServerSession(authOptions);
	const userData = getUserInfo(userInfo);

	console.log(await userData);

	const handleNav = () => {
		// setMenuOpen(!menuOpen);
	};

	return (
		<nav className='flex justify-between items-center py-8'>
			<Link href={"/"}>
				<h1 className='font-bold text-lg'>PetLodgePro</h1>
			</Link>

			{/* Render buttons as client components */}
			<ul className='hidden md:flex items-center gap-6'>
				<Link href='/products' className='text-lg'>
					Product
				</Link>
				<Link href='/about' className='text-lg'>
					Pricing
				</Link>
				{/* {!session?.user && <Login />}
				{session?.user && (
					<Logout image={session.user?.image || "Image not availbale"} />
				)} */}
				<div className='md:hidden cursor-pointer pl-24'>
					<AiOutlineMenu size={25} />
				</div>
			</ul>
		</nav>
	);
}
