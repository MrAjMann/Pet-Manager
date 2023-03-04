"use client";

import { signIn } from "next-auth/react";

export default function Register() {
	return (
		<div className='flex flex-col items-center justify-center '>
			<button
				className='bg-blue-500 hover:bg-blue-700 w-full md:w-0 transition-all ease-in duration-300 text-white px-6 py-3 md:py-2 rounded-md disabled:opacity-25'
				onClick={() => signIn()}
			>
				Get Started
			</button>
		</div>
	);
}
