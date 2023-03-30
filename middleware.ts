
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(req) {
        console.log('middleware', req.nextauth.token?.role)

        if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token?.role !== 'ADMIN')

            return NextResponse.rewrite(
                new URL("/auth/login?message=You are not authorized!", req.url)
            );
        console.log('not authorized', req.nextauth.token?.role)
    },
    {

        callbacks: {
            authorized: ({ token }) => !!token,

        },
    },
)

export const config = {
    matcher: ["/admin/:path*"],
}