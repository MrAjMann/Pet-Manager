import Link from "next/link";
import Login from "./Login";
import Logout from "./Logout";
import { getServerSession } from "next-auth";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

export default async function Nav() {
	const session = await getServerSession(authOptions);
	console.log(session);

	return (
		<nav className='flex justify-between items-center py-8'>
			<Link href={"/"}>
				<h1 className='font-bold text-lg'>PetLodgePro</h1>
			</Link>
			{/* Render buttons as client components */}
			<ul className='flex items-center gap-6'>
				{!session?.user && <Login />}
				{session?.user && (
					<Logout image={session.user?.image || "Image not found"} />
				)}
			</ul>
		</nav>
	);
}
