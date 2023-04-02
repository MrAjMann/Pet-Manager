import Sidebar from "./components/Sidebar";

export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<section className='flex w-full overflow-hidden h-screen'>
			{/* Include shared UI here e.g. a header or sidebar */}
			<Sidebar />

			{children}
		</section>
	);
}
