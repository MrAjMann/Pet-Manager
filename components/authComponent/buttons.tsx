"use client";

import { signIn } from "next-auth/react";

export default function SignInButton() {
	return (
		//Google Sign In
		<div className=' items-center justify-center mr-10'>
			<button className='text-white text-lg ' onClick={() => signIn()}>
				Sign In
			</button>
		</div>
	);
}
