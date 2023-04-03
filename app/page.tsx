import { getUser } from "@/lib/getUser";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import { redirect } from "next/navigation";
import Nav from "./auth/Nav";
import Register from "./auth/Register";
import LandingPage from "./Components/LandingPage";

const fetchUsers = async () => {
	const data = await getUser();

	return data;
};

export default async function Home() {
	const user = await fetchUsers();
	return (
		<main>
			<Nav user={user} />
			if (user) {redirect("/dashboard")}
			<LandingPage />
		</main>
	);
}
