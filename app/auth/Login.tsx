"use client";

import { signIn } from "next-auth/react";

export default function Login() {
	return (
		<div className=' items-center justify-center '>
			<button className='text-white text-lg ' onClick={() => signIn()}>
				Sign In
			</button>
		</div>
	);
}
