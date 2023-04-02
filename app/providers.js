"use client";

import { SessionProvider } from "next-auth/react";

export default function Providers({ children, ...props }) {
	return <SessionProvider session={props.session}>{children}</SessionProvider>;
}
