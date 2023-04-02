// import { useForm } from "react-hook-form";

import { getUser } from "@/lib/getUser";

type UserInfo = {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
};

export default async function Profile() {
	const userInfo = await getUser("john@test.com");

	// console.log("userInfo", userInfo);

	return (
		<div>
			<h1>Personal Information</h1>

			<div className='flex  w-full'>
				<p className='flex-nowrap'>
					{userInfo?.firstName} {userInfo?.lastName}
				</p>
				<p></p>
			</div>
		</div>
	);
}
