"use client";

import Image from "next/image";
import { signOut } from "next-auth/react";
import Link from "next/link";

type User = {
	image: string;
};

export default function Logged() {
	return (
		<li className='w-full flex flex-row-reverse  sm:flex-row justify-between items-center list-none mx-4'>
			<button
				onClick={() => signOut()}
				className='bg-gray-700 hover:bg-blue-700  tracking-wider text-white text-md px-6 py-2 rounded-md'
			>
				Sign Out
			</button>
			<Link href={"/dashboard"}>
				<Image
					width={64}
					height={64}
					src={"image"}
					className='w-12 sm:w-14 rounded-full'
					alt={`Profile picture`}
					priority
				/>
			</Link>
		</li>
	);
}
