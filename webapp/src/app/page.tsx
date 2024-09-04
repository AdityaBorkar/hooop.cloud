import { redirect } from 'next/navigation'
import type { IconType } from 'react-icons'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { LuBuilding2, LuKeySquare, LuMail } from 'react-icons/lu'

import { auth, signIn } from '@/auth'

export default async function Login() {
	const session = await auth()
	if (session) redirect('/overview')

	// TODO: Generative Art Background with circuit like interface to pass signals.

	return (
		<div className='flex min-h-screen items-center justify-center select-none'>
			<div className='-mt-16 min-w-[28rem] rounded-3xl border border-neutral-900 py-8 px-16 text-neutral-400 backdrop-blur-2xl'>
				<div className='mt-4 mx-auto size-14 rounded-full bg-neutral-300 text-center' />

				<div className='mt-4 mb-12 text-center text-2xl font-semibold text-neutral-100'>
					Login to hooop.cloud
				</div>

				<LoginFormButton icon={FaGoogle} name='google'>
					Continue with Google
				</LoginFormButton>
				<LoginFormButton icon={FaGithub} name='github'>
					Continue with GitHub
				</LoginFormButton>
				<LoginStepButton icon={LuKeySquare}>
					{/* TODO: Auto-detect onClick */}
					Continue with Passkey
				</LoginStepButton>
				<LoginStepButton icon={LuBuilding2}>
					{/* TODO: Accept email-password as input */}
					Continue with SAML SSO
				</LoginStepButton>
				<LoginStepButton icon={LuMail}>
					{/* TODO: Accept email-password as input */}
					Continue with Email
				</LoginStepButton>
			</div>
		</div>
	)
}

function LoginStepButton(props: { icon: IconType; children: string }) {
	return (
		<button
			type='button'
			className='my-4 block w-full rounded-md border border-neutral-800 bg-neutral-900 py-3 px-6 font-medium hover:bg-neutral-800 active:scale-95'
		>
			<props.icon className='-mt-0.5 mr-2 inline-block size-4' />
			{props.children}
		</button>
	)
}

function LoginFormButton(props: {
	name: string
	icon: IconType
	children: string
}) {
	return (
		<form
			action={async () => {
				'use server'
				await signIn(props.name, {
					redirect: true,
					callbackUrl: '/',
				})
			}}
		>
			<button
				type='submit'
				className='my-4 block w-full rounded-md border border-neutral-800 bg-neutral-900 py-3 px-6 text-sm font-medium hover:bg-neutral-800 active:scale-95'
			>
				<props.icon className='-mt-1 mr-2 inline-block size-4' />
				{props.children}
			</button>
		</form>
	)
}
