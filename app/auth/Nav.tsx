"use client";
import Link from "next/link";
import SignInButton from "../../components/authComponent/buttons";

import Logout from "./logout/page";
import { useSession } from "next-auth/react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

export default function Nav() {
	// const session = await getServerSession(authOptions);
	const { data: session } = useSession();

	const [menuOpen, setMenuOpen] = useState(false);

	const handleNav = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<nav className='bg-[#070707] fixed w-full h-24 '>
			<div className='flex justify-between items-center h-full px-4 2xl-px-16'>
				<div className='cursor-pointer ml-[1rem] '>
					<Link href={"/"}>
						<li>
							<h1 className='font-bold text-lg'>PetLodgePro</h1>
						</li>
					</Link>
				</div>

				{/* Render buttons as client components */}
				<div className='hidden sm:flex '>
					<ul className='hidden sm:flex sm:justify-center  sm:items-center '>
						<Link
							href='/products'
							className='text-lg  mr-10 hover:border-b hover:border-gray-50'
						>
							<li>Product</li>
						</Link>
						<Link
							href='/about'
							className='mr-10 text-lg tracking-wider hover:border-b hover:border-gray-50'
						>
							<li>Pricing</li>
						</Link>
						<div className='flex justify-center mr-10 '>
							{!session?.user && (
								<div className=' flex items-center align-middle py-6'>
									<Link
										href='/auth/new-user'
										className='mr-10 text-lg tracking-wider hover:border-b hover:border-gray-50'
									>
										<li>Register</li>
									</Link>
									<div>
										<SignInButton />
									</div>
								</div>
							)}
							<h1>{session?.user?.firstName}</h1>
							{session && session?.user && <Logout />}
						</div>
					</ul>
				</div>
				<div onClick={handleNav} className='sm:hidden cursor-pointer '>
					<AiOutlineMenu size={25} />
				</div>
			</div>
			<div
				className={
					menuOpen
						? "fixed left-0 top-0 w-full sm:hidden h-screen transition-all py-10 ease-in-out duration-1000 "
						: "fixed left-[-100%] top-0 w-full sm:hidden h-screen bg-black opacity-10 transition-all py-10 ease-in-out duration-1000 "
				}
			>
				<div className='flex-col w-full h-full  items-center justify-between bg-black'>
					<div className='flex flex-row-reverse justify-center '>
						{!session?.user && <SignInButton />}
						{session?.user && <Logout />}
					</div>
					<div className='flex w-full items-center justify-between bg-black mt-4'>
						<div className='sm:hidden cursor-pointer ml-[1rem] '>
							<Link href={"/"}>
								<li>
									<h1 className='font-bold text-lg'>PetLodgePro</h1>
								</li>
							</Link>
						</div>

						<div
							onClick={handleNav}
							className='sm:hidden cursor-pointer mr-[1rem] '
						>
							<AiOutlineClose size={25} />
						</div>
					</div>

					<div className='flex flex-col py-4 h-full w-full  bg-black text-center '>
						<ul className='flex items-center justify-center w-full h-full'>
							<div className='flex flex-col justify-center w-full items-center'>
								<Link href='/products' className='bg-blue-700 w-full'>
									<li
										onClick={() => setMenuOpen(false)}
										className=' py-8 cursor-pointer text-lg tracking-wider'
									>
										Product
									</li>
								</Link>

								<Link href='/pricing'>
									<li
										onClick={() => setMenuOpen(false)}
										className='py-8  cursor-pointer text-lg tracking-wider'
									>
										Pricing
									</li>
								</Link>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
