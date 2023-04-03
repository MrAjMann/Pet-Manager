import Sidebar from "./components/Sidebar";

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
			<div className='fixed top-0 left-80 mx-36 '>
				<div className='flex justify-start '>{children}</div>
			</div>
		</section>
	);
}
