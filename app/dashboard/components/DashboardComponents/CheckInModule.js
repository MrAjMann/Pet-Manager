import Image from "next/image";

export default function CheckInModule({ pets }) {
	return (
		<div className='my-12 w-96 flex flex-col h-auto max-h-max bg-slate-500 rounded-md'>
			<div className='flex items-center justify-center my-8'>
				<h1 className='font-bold text-xl'>Checking In</h1>
			</div>
			{/* Pets being checked in for that day  will go here*/}
			<div className='flex flex-col  items-center w-full'>
				{pets.map((pet) => (
					<div className='align-middle justify-center flex items-center p-2 px-12 my-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ring-1 ring-gray-400 active:ring-blue-500'>
						<div
							key={pet.id}
							className=' flex flex-row items-center gap-3 justify-center'
						>
							<Image
								src={pet.image || ""}
								alt={`Image of ${pet.name}`}
								width={300}
								height={300}
								className='rounded-full w-[55px] h-[55px] aspect-auto '
							/>
							<p className='text-xl font-bold tracking-wider'>{`${
								pet.name.toLowerCase().charAt(0).toUpperCase() +
								pet.name.slice(1)
							}`}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
