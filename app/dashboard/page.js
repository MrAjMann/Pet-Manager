import Link from "next/link";
import { useSession } from "next-auth/react";
import Dashboard from "./components/Dashboard";
export default function CompanyDashboard() {
	// const { data: session, status } = useSession();
	// if (status === "loading") {
	// 	return (
	// 		<div className='flex flex-col items-center justify-center h-screen'>
	// 			<div className='flex flex-col items-center justify-center w-1/2 h-1/2 rounded-lg gap-4'>
	// 				<h1 className='text-2xl'>
	// 					Sorry for the delay, this page is still loading
	// 				</h1>
	// 			</div>
	// 		</div>
	// 	);
	// }

	// if (status === "unauthenticated") {
	// 	return (
	// 		<div className='flex flex-col items-center justify-center h-screen'>
	// 			<div className='flex flex-col items-center justify-center w-1/2 h-1/2 rounded-lg gap-4'>
	// 				<h1 className='text-2xl'>
	// 					You shouldn't be here please either Login or Register
	// 				</h1>
	// 				<div className='flex py-8 gap-12'>
	// 					<Link
	// 						href='/auth/login'
	// 						className='mr-10 text-2xl tracking-wider hover:border-b hover:border-gray-50 text-blue-300'
	// 					>
	// 						<a>Sign In</a>
	// 					</Link>
	// 					<Link
	// 						href='/auth/new-user'
	// 						className='mr-10 text-2xl tracking-wider hover:border-b hover:border-gray-50'
	// 					>
	// 						<a>Create New Account</a>
	// 					</Link>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	);
	// }

	return (
		<div className='flex items-start justify-left my-28 h-screen'>
			<div className='flex flex-col rounded-lg gap-2'>
				<Dashboard />
			</div>
		</div>
	);
}
