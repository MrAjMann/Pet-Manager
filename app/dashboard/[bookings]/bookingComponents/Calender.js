"use client";

import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import { useRouter } from "next/navigation";
import { use, useEffect, useState } from "react";

const now = new Date();
const yesterdayBegin = new Date(
	now.getFullYear(),
	now.getMonth(),
	now.getDate()
);
const todayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate());

export default function Calender({ pets, user }) {
	const userData = user;
	const petData = pets;

	const [bookingDate, setBookingDate] = useState([yesterdayBegin, todayEnd]);

	const [checkedState, setCheckedState] = useState(
		new Array(petData.length).fill("")
	);
	const selectedPets = new Array(petData.length).fill("");

	const handleOnChange = (position) => {
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);
		setCheckedState(updatedCheckedState);
		// console.log("updatedCheckedState", updatedCheckedState);
		if (updatedCheckedState[position] === true) {
			selectedPets.unshift(petData.name);
			console.log("selectedPets", selectedPets);
			return selectedPets;
			// console.log("petData[position]", petData[position].name);
		}
	};
	// Get the user id from the session

	// console.log("userData", userData);
	// console.log("petData", petData);
	const router = useRouter();
	// Get the pets from the user id

	// Get the date range from the calender and send it to the server

	const handleBooking = async () => {
		try {
			const createdBooking = await fetch(
				`http://localhost:3000/api/booking/create`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						userId: userData.id,
						petId: selectedPets.id,
						startDate: bookingDate[0].toLocaleDateString(),
						endDate: bookingDate[1].toLocaleDateString(),
						// callbackURL: router.push("/auth/login"),
					}),
				}
			);
			// console.log("created a booking ", createdBooking);
			return createdBooking;
		} catch (error) {
			router.push("/dashboard/bookings");
			console.log(error);
		}
	};

	return (
		<section className='flex flex-col justify-center my-28 items-center w-full h-3/4 '>
			<div className='flex items-center justify-center'>
				<DateRangePicker
					calendarAriaLabel='Toggle calendar'
					format='dd/MM'
					clearAriaLabel='Clear value'
					dayAriaLabel='Day'
					monthAriaLabel='Month'
					nativeInputAriaLabel='Date'
					yearAriaLabel='Year'
					className='REACT-CALENDAR p2 text-black'
					onChange={setBookingDate}
					value={bookingDate}
				/>
			</div>
			<form onSubmit={handleBooking} className='my-8'>
				<div className='flex flex-col items-center justify-center gap-12'>
					{/* select a pet */}
					<div className='w-full my-12'>
						<label className='block mb-2 text-lg font-medium text-black'>
							Select a pet
						</label>
						<div className=' block w-full p-2.5  '>
							{petData.map((pet, index) => (
								<div className='flex items-center'>
									<input
										id={`${pet.name}_checkbox`}
										type='checkbox'
										key={pet.id}
										value={pet.name}
										checked={checkedState[index]}
										onChange={() => handleOnChange(index)}
										className='w-12 h-12 mr-4 border-gray-300 rounded'
									/>
									<label
										for={`${pet.name}_checkbox`}
										className='flex items-center w-full
										text-black text-lg font-medium'
									>
										{pet.name}
									</label>
								</div>
							))}
						</div>
					</div>
					<button
						type='submit'
						className='relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800'
					>
						<span className='relative px-8 py-2 transition-all ease-in text-xl duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
							Create Booking
						</span>
					</button>
				</div>
			</form>
		</section>
	);
}
