"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function CompanyDashboard() {
	const { data: session } = useSession();

	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className='flex flex-col items-center justify-center w-1/2 h-1/2 rounded-lg gap-4'>
				<h1 className='text-2xl'>Authorised Admin page</h1>
			</div>
		</div>
	);
}
