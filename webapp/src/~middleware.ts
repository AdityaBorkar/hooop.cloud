export { auth as middleware } from '@/auth'

// import { NextAuthRequest } from 'next-auth/lib'
// import { NextResponse } from 'next/server'
// import { is } from 'superstruct'

// import { UserSchema, auth } from './auth'

// // ? Runs on Lambda Edge

// async function middleware(request: NextAuthRequest) {
// 	// Init:
// 	const headers = new Headers(request.headers)

// 	// Authentication:
// 	const user = request.auth
// 	if (!is(user, UserSchema)) {
// 		if (user !== null) {
// 			// TODO - REPORT INVALID USER
// 			console.error('Invalid user:', user)
// 			request.cookies.delete('authjs.session-token')
// 		}
// 		if (request.nextUrl.pathname !== '/login') {
// 			// ! REDIRECT DOES NOT WORK
// 			request.cookies.set(
// 				'__Secure-authjs.callback-url',
// 				encodeURI(request.nextUrl.origin + request.nextUrl.pathname),
// 			)
// 			return NextResponse.redirect(new URL('/login', request.nextUrl.origin))
// 		}
// 	} else {
// 		headers.set('x-app-auth', JSON.stringify(user))
// 	}

// 	return NextResponse.next({ request: { headers } })

// 	// TODO - DO NOT PASS HEADERS TO CLIENT
// 	// TODO - AVOID PASSING TOKENS THROUGH THIS THING
// }

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico (favicon file)
		 */
		{
			source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
			missing: [
				{ type: 'header', key: 'next-router-prefetch' },
				{ type: 'header', key: 'purpose', value: 'prefetch' },
			],
		},
	],
}
