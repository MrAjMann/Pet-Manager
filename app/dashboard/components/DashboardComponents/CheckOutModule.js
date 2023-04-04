"use client";
import Image from "next/image";
import Link from "next/link";
import { TiTick, TiTrash, TiEdit } from "react-icons/ti";

export default function CheckOutModule({ pets, user }) {
	const handleArrived = () => {};
	const handleEdit = () => {};
	const handleDelete = () => {};

	const timeNow = new Date().getHours() + ":" + new Date().getMinutes() + "am";
	return (
		<div className='my-12 w-96 flex flex-col h-auto rounded-md ring-1 ring-gray-400 shadow-lg shadow-gray-400'>
			<div className='flex items-center justify-center my-8'>
				<h1 className='font-bold text-xl text-black'>Checking Out</h1>
			</div>
			{/* Pets being checked in for that day  will go here*/}
			<div className='flex flex-col  items-center w-full gap-1 mb-12'>
				{pets.map((pet) => (
					<div className='align-middle justify-center flex items-center p-2 px-12 my-2 text-gray-900 rounded-lg dark:text-white -700 ring-1 ring-gray-400'>
						<div
							key={pet.id}
							className=' flex flex-row items-center gap-3 justify-center'
						>
							{/* <Image
								src={pet.image || ""}
								alt={`Image of ${pet.name}`}
								width={300}
								height={300}
								className='rounded-full w-[55px] h-[55px] aspect-auto '
							/> */}
							<div className='flex flex-col py-1'>
								<p className='text-lg text-black py-1'>{`${
									pet.name.toLowerCase().charAt(0).toUpperCase(pet?.name) +
									pet.name.slice(1)
								}`}</p>
								<p className='text-md text-black/80'>{user?.firstName}</p>
							</div>
							<div className='flex flex-col px-4'>
								<p className='text-md text-black/80'>{timeNow}</p>
							</div>
							<div className='flex gap-1'>
								<button onClick={handleArrived}>
									<TiTick className='text-2xl text-green-500' />
								</button>
								<button onClick={handleEdit}>
									<TiEdit className='text-2xl text-yellow-500' />
								</button>
								<button onClick={handleDelete}>
									<TiTrash className='text-2xl text-red-500' />
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
