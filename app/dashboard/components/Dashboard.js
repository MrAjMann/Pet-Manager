// import { useForm } from "react-hook-form";

import { getUser } from "@/lib/getUser";
import { getPets } from "@/lib/getPets";
import CheckInModule from "./DashboardComponents/CheckInModule";
import CheckOutModule from "./DashboardComponents/CheckOutModule";

const fetchUsers = async () => {
	const data = await getUser();

	return data;
};

const fetchPets = async () => {
	const data = await getPets();

	return data;
};

export default async function Dashboard() {
	const user = await fetchUsers();
	const petData = await fetchPets();

	const todaysDate = new Date().toLocaleDateString();

	return (
		<section className='flex justify-center my-28 items-center w-full h-3/4 '>
			<div className='flex flex-col w-full ml-48 '>
				<p className=' text-md p-2 text-black/60 '>{todaysDate}</p>
				<h1 className='text-5xl p-2 text-black/90'>Dashboard</h1>
				<p className=' text-lg p-2 text-black'>Hi, {user?.firstName}.</p>
				<div className='flex  flex-col my-20 -ml-24 w-full justify-center items-center '>
					<div className='flex flex-col sm:flex-row gap-12 '>
						<CheckInModule pets={petData} user={user} />
						<CheckOutModule pets={petData} user={user} />
					</div>
				</div>
			</div>
		</section>
	);
}
