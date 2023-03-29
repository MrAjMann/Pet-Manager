"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { prisma } from "../../../prisma/client";

export default function NewUserPage() {
	const email = useRef("");
	const pass = useRef("");
	const router = useRouter();
	const onSubmit = async () => {
		try {
			const createdUser = await fetch(`http://localhost:3000/api/user/create`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					email: email.current,
					password: pass.current,
					callbackURL: router.push("/auth/login"),
				}),
			});
			console.log(createdUser);
		} catch (error) {
			router.push("/");
			console.log(error);
		}
	};

	return (
		// Custom Sign in page
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className='flex flex-col items-center justify-center w-1/2 h-1/2 rounded-lg gap-4'>
				<h1 className='mb-12 text-4xl'>Create an Account</h1>
				<div className=' flex flex-col sm:m-1'>
					<label htmlFor='email' className='text-lg  tracking-wide py-2'>
						Email Address
					</label>
					<input
						type='email'
						name='email'
						required
						onChange={(e) => (email.current = e.target.value)}
						id='email'
						// {...register('name', {
						//     required: {
						//         value: true,
						//         message: 'You must enter your Name',
						//     },

						//     minLength: {
						//         value: 2,
						//         message: 'Your Name is too short',
						//     },
						//     maxLength: {
						//         value: 220,
						//         message: 'Your Name is too long',
						//     },
						// })}
						placeholder='Email Address'
						className='w-[90%] border-b-2 border-white bg-transparent px-2 py-2 text-lg tracking-wide  focus:border-orange-600  focus:bg-transparent focus:outline-none active:border-orange-600  active:bg-transparent active:outline-none sm:w-[350px]'
					/>
				</div>

				<div className=' flex flex-col sm:m-1 '>
					<label htmlFor='password' className='text-lg  tracking-wide py-2'>
						Password
					</label>
					<input
						type={"password"}
						onChange={(e) => (pass.current = e.target.value)}
						name='password'
						required
						id='password'
						// {...register('name', {
						//     required: {
						//         value: true,
						//         message: 'You must enter your Name',
						//     },

						//     minLength: {
						//         value: 2,
						//         message: 'Your Name is too short',
						//     },
						//     maxLength: {
						//         value: 220,
						//         message: 'Your Name is too long',
						//     },
						// })}
						placeholder='Password'
						className='w-[90%] border-b-2 border-white bg-transparent px-2 py-2 text-lg tracking-wide  focus:border-orange-600  focus:bg-transparent focus:outline-none active:border-orange-600  active:bg-transparent active:outline-none sm:w-[350px]'
					/>
				</div>

				<div className='flex items-center justify-center '>
					<button
						onClick={onSubmit}
						className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
					>
						<span className='relative px-8 py-2 transition-all ease-in text-xl duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
							Create Account
						</span>
					</button>
				</div>
			</div>
		</div>
	);
}
