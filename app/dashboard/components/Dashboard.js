// import { useForm } from "react-hook-form";

import { getUser } from "@/lib/getUser";
import CheckInModule from "./DashboardComponents/CheckInModule";
import CheckOutModule from "./DashboardComponents/CheckOutModule";

const fetchUsers = async () => {
	const data = await getUser();

	return data;
};

export default async function Dashboard() {
	const user = await fetchUsers();
	const todaysDate = new Date().toLocaleDateString();
	return (
		<section className='flex justify-center items-center '>
			<div className='flex flex-col  '>
				<p className=' text-md p-4 text-white/60 '>{todaysDate}</p>
				<h1 className='text-5xl p-4 text-white/90'>Dashboard</h1>
				<p className=' text-lg p-4 text-white'>Hi, {user?.firstName}.</p>
				<div className='flex  w-full flex-col '>
					<div className='flex flex-col sm:flex-row gap-12 '>
						<CheckInModule />
						<CheckOutModule />
					</div>
				</div>
			</div>
		</section>
	);
}
