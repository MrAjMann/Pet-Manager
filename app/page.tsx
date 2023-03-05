"use client";

import { CldImage } from "next-cloudinary";
import Register from "./auth/Register";

export default function Home() {
	return (
		<main>
			<section className='mt-2 md:mt-0 flex flex-col-reverse lg:flex-row justify-center items-center md:my-12 '>
				<div className=' md:mx-12 flex flex-col md:p-2 justify-center sm:items-start'>
					<h1
						className={`px-4 md:px-0 text-2xl lg:text-4xl text-center w-full leading-normal font-white font-source-sans-pro font-semibold md:my-4 `}
					>
						Caring for animals is hard enough, <br /> PetLodgePro makes it
						easier
					</h1>
					<p className='px-4 md:px-0  text-gray-400 my-4 font-sm md:font-lg'>
						Securly handle your furry clients information, bookings and payments
						all in one convient place.
					</p>
					<div className='flex px-4 md:px-0 flex-col md:flex-row justify-center md:justify-left gap-6 my-4 '>
						<Register />
						<button className='border-2 border-blue-500 ring-blue-500 hover:border-blue-900 hover:font-bold text-white font-semibold transition-all ease-in duration-300 w-full py-3 md:w-auto px-6 md:py-2 rounded-md disabled:opacity-25'>
							Book a Demo
						</button>
					</div>
				</div>
				<div className='mt-12 px-8 flex w-full md:px-0 justify-center items-center md:rounded-2xl'>
					<CldImage
						src={"AMWebsiteSolutions/PetLodgePro/Puppy_Rolling.jpg"}
						alt={"Puppy Rolling"}
						sizes='100vw'
						width='700'
						height='450'
						crop='fill'
						gravity='auto'
						className='md:rounded-2xl py-2 my-6 lg:my-24 lg:mx-8 '
					></CldImage>
				</div>
			</section>
		</main>
	);
}
