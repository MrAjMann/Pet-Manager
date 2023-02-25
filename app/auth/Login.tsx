"use client";

import { signIn } from "next-auth/react";

export default function Login() {
	return (
		<div className='flex flex-col items-center justify-center '>
			<button
				className='bg-gray-700 hover:bg-blue-500 transition-all ease-in duration-300 text-white px-6 py-2 rounded-xl disabled:opacity-25 '
				onClick={() => signIn()}
			>
				Sign in with Google
			</button>
		</div>
	);
}
