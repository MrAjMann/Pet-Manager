// import { useForm } from "react-hook-form";
import Calendar from "../[bookings]/bookingComponents/Calender";
import { getUser } from "@/lib/getUser";
import { getPets } from "@/lib/getPets";

const fetchUsers = async () => {
	const data = await getUser();

	return data;
};

const fetchPets = async () => {
	const data = await getPets();
	// console.log("data", data);
	return data;
};

export default async function Dashboard() {
	const user = await fetchUsers();
	const petData = await fetchPets();

	const todaysDate = new Date().toLocaleDateString();

	return (
		<section className='flex justify-center my-28 items-center w-full  '>
			<div className='flex flex-col w-full ml-48 '>
				<p className=' text-md p-2 text-black/60 '>{todaysDate}</p>
				<h1 className='text-5xl p-2 text-black/90'>Dashboard</h1>
				<p className=' text-lg p-2 text-black'>Hi, {user?.firstName}.</p>
				<div className='flex  flex-col my-20 -ml-36 w-full justify-center items-center '>
					<div className='flex   w-full justify-center items-center'>
						{/* <BookingModule pets={petData} user={user} /> */}
						<Calendar user={user} pets={petData} />
					</div>
				</div>
			</div>
		</section>
	);
}
