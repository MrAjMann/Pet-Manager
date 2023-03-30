"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
	return (
		//Google Sign In
		<div className=' items-center justify-center mr-10'>
			<button
				className='bg-blue-600 hover:bg-blue-800    text-xl transition-all ease-in duration-300 text-white px-8 py-4 md:py-2 rounded-md disabled:opacity-25'
				onClick={() => signIn()}
			>
				Login
			</button>
		</div>
	);
}
