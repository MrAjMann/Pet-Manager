"use client";

import { CldImage } from "next-cloudinary";

import Image from "next/image";

export default function Home() {
	return (
		<main>
			<section className='flex flex-col-reverse lg:flex-row justify-center items-center md:my-12 '>
				<div className='mx-12 flex flex-col p-2 justify-center sm:items-start'>
					<h1
						className={`text-2xl lg:text-4xl  sm:w-full leading-normal font-white font-source-sans-pro font-semibold md:my-4 `}
					>
						Caring for animals is hard enough, <br /> PetLodgePro makes it
						easier
					</h1>
					<p className='text-gray-400 my-4 font-sm md:font-lg'>
						Securly handle your furry clients information, bookings and payments
						all in one convient place.
					</p>
					<div className='flex justify-center md:justify-left gap-6 my-2 '>
						<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-md  my-4'>
							Get Started
						</button>
						<button className='border-2 border-blue-500 ring-blue-500 hover:border-blue-900 hover:font-bold text-white font-semibold py-4 px-8 rounded-md my-4'>
							Book a Demo
						</button>
					</div>
				</div>
				<div className='flex w-full justify-center items-center rounded-2xl'>
					<CldImage
						src={"AMWebsiteSolutions/PetLodgePro/Puppy_Rolling.jpg"}
						alt={"Puppy Rolling"}
						sizes='100w'
						width='700'
						height='350'
						crop='fill'
						gravity='auto'
						className='rounded-2xl py-2 my-6 lg:my-24 lg:mx-8 '
					></CldImage>
				</div>
			</section>
		</main>
	);
}
