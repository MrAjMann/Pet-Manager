"use client";

import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

export default function Providers({ children, ...props }) {
	return <SessionProvider session={props.session}>{children}</SessionProvider>;
}
