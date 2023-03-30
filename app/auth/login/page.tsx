"use client";
import {
	useForm,
	SubmitHandler,
	useFieldArray,
	Controller,
} from "react-hook-form";
import { signIn } from "next-auth/react";
import { useEffect, useRef } from "react";

type Inputs = {
	email: string;
	password: string;
};

export default function LoginPage() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
		formState: { isSubmitSuccessful },
	} = useForm<Inputs>({
		defaultValues: { email: "", password: "" },
	});

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		signIn("credentials", {
			email: data.email,
			password: data.password,
			redirect: true,
			callbackUrl: "/auth/admin",
		});
	};
	useEffect(() => {
		if (isSubmitSuccessful) {
			reset({ email: "", password: "" });
		}
	}, [reset]);

	return (
		// Custom Sign in page
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className='flex flex-col items-center justify-center w-1/2 h-1/2 rounded-lg gap-4'>
				<h1 className='mb-12 text-4xl'>Login</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className=' flex flex-col sm:m-1'>
						<label htmlFor='email' className='text-lg  tracking-wide py-2'>
							Email Address
						</label>
						<input
							type='email'
							id='email'
							{...register("email", {
								required: {
									value: true,
									message: "You must enter your Name",
								},

								minLength: {
									value: 2,
									message: "Your Name is too short",
								},
								maxLength: {
									value: 220,
									message: "Your Name is too long",
								},
							})}
							placeholder='Email Address'
							className='w-[90%] border-b-2 border-white bg-transparent px-2 py-2 text-lg tracking-wide  focus:border-orange-600  focus:bg-transparent focus:outline-none active:border-orange-600  active:bg-transparent active:outline-none sm:w-[350px]'
						/>
					</div>

					<div className=' flex flex-col sm:m-1 '>
						<label htmlFor='password' className='text-lg tracking-wide py-2'>
							Password
						</label>
						<input
							type={"password"}
							id='password'
							{...register("password", {
								required: {
									value: true,
									message: "You must enter a Password",
								},

								minLength: {
									value: 2,
									message: "Your Password is too short",
								},
								maxLength: {
									value: 220,
									message: "Your Password is too long",
								},
							})}
							placeholder='Password'
							className='w-[90%] border-b-2 border-white bg-transparent px-2 py-2 text-lg tracking-wide  focus:border-orange-600  focus:bg-transparent focus:outline-none active:border-orange-600  active:bg-transparent active:outline-none sm:w-[350px]'
						/>
					</div>

					<div className='flex items-center justify-center mt-8'>
						<button
							type='submit'
							className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
						>
							<span className='relative px-8 py-2 transition-all ease-in text-xl duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
								Login
							</span>
						</button>
					</div>
				</form>

				<div className='flex items-center justify-center '>
					<button
						onClick={() => signIn()}
						type='button'
						className='text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2'
					>
						<svg
							className='w-4 h-4 mr-2 -ml-1'
							aria-hidden='true'
							focusable='false'
							data-prefix='fab'
							data-icon='google'
							role='img'
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 488 512'
						>
							<path
								fill='currentColor'
								d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
							></path>
						</svg>
						Sign in with Google
					</button>
				</div>
			</div>
		</div>
	);
}
