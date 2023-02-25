import "./globals.css";
import Nav from "./auth/Nav";
import { Roboto, Source_Sans_Pro } from "@next/font/google";

// Rename this file to layout.jsx to use it as typescript is not currently recognizing server components in the layout file

// Add required fonts here using this pattern
const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-roboto",
});
const sourceSansPro = Source_Sans_Pro({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	variable: "--font-sourceSansPro",
});

export default function RootLayout({ children }) {
	return (
		<html lang='en' className={`${(roboto.variable, sourceSansPro.variable)}`}>
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body
				className={` mx-4 md:mx-12  2xl:48 ${
					(roboto.variable, sourceSansPro.variable)
				} bg-[#070707] text-white`}
			>
				<Nav />
				{children}
			</body>
		</html>
	);
}
