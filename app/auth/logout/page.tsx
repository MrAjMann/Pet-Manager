import { signOut } from "next-auth/react";

export default function Logout() {
	return (
		<div>
			<li className='w-full flex flex-row-reverse  sm:flex-row justify-between items-center list-none mx-4'>
				<button
					onClick={() => signOut()}
					className='bg-gray-700 hover:bg-blue-700  tracking-wider text-white text-md px-6 py-2 rounded-md'
				>
					Logout
				</button>
			</li>
		</div>
	);
}
