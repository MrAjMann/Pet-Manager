import Sidebar from "./components/Sidebar";
import "./[bookings]/bookingComponents/calender.css";
export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='flex w-full relative '>
			{/* Include shared UI here e.g. a header or sidebar */}
			<Sidebar />
			{/* Dashboard container */}
			<div className='fixed top-0 left-60  w-full !bg-white h-full'>
				<div className='flex justify-start mx-36'>{children}</div>	
			</div>
		</section>
	);
}
