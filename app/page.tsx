"use client";

import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Nav from "./auth/Nav";
import Register from "./auth/Register";
import LandingPage from "./Components/LandingPage";

export default function Home() {
	return (
		<main>
			<Nav />
			<LandingPage />
		</main>
	);
}
