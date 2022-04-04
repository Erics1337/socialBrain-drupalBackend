import React from 'react'
import { useNavigate } from 'react-router-dom'

function CallToAction() {
	const navigate = useNavigate()
	return (
		<section className='container mx-auto text-center py-6 mb-12 dark:text-gray-100'>
			<h1 className='w-full my-2 text-5xl font-bold leading-tight text-center'>
				Try It For Free!
			</h1>
			<div className='w-full mb-4'></div>
			<h3 className='my-4 text-3xl leading-tight'>
				Sign up for an account and start using the app
			</h3>
			<button
				onClick={() => navigate('/signUp')}
				className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
				Do It!
			</button>
			<div className='h-1 mx-auto w-1/6 opacity-25 my-0 py-0 rounded-t pb-5 dark:text-gray-100'>
				You can delete your account and all user data at any time.
			</div>
		</section>
	)
}

export default CallToAction
