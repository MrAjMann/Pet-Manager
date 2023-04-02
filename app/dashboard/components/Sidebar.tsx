export default function Sidebar() {
	return (
		<nav className='z-40 w-80 fixed top-0 left-0 '>
			<aside
				id='logo-sidebar'
				className='  h-screen transition-transform -translate-x-full sm:translate-x-0'
				aria-label='Sidebar'
			>
				<div className='h-full px-3 py-4 space-y-36 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
					<a href='/' className='flex items-center pl-2.5 my-5'>
						<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
							PetLodgePro
						</span>
					</a>
					<ul className='space-y-8 font-medium'>
						<li>
							<a
								href='#'
								className='flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ring-1 ring-gray-400 active:ring-blue-500'
							>
								<span className='flex-1 ml-4 whitespace-nowrap text-xl'>
									Profile
								</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ring-1 ring-gray-400 active:ring-blue-500'
							>
								<span className='flex-1 ml-4 whitespace-nowrap text-xl'>
									Clients
								</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ring-1 ring-gray-400 active:ring-blue-500'
							>
								<span className='flex-1 ml-4 whitespace-nowrap text-xl '>
									Bookings
								</span>
							</a>
						</li>
						<li>
							<a
								href='#'
								className='flex items-center p-3 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ring-1 ring-gray-400 active:ring-blue-500'
							>
								<span className='flex-1 ml-4 whitespace-nowrap text-xl '>
									Settings
								</span>
							</a>
						</li>
					</ul>
				</div>
			</aside>
		</nav>
	);
}
