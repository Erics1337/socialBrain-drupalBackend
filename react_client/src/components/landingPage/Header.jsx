import React from 'react'
import { useNavigate } from 'react-router-dom'
import WaveTop from '../assets/svg/WaveTop'

// import YoutubeEmbed from './YoutubeEmbed'

function Header({ embedId }) {
	const navigation = useNavigate()

	return (
		<>
			<div className='pt-24 bg-gray-50 dark:bg-gray-700 dark:text-gray-100'>
				<div className='container px-3 mx-auto flex flex-wrap flex-col lg:flex-row items-center'>
					{/* <!--Left Col--> */}
					<div className='flex flex-col w-full lg:w-2/5 justify-center items-start text-center md:text-left'>
						<p className='uppercase tracking-loose w-full'>
							It's time to re-claim your digital freedom
						</p>
						<h1 className='my-4 text-5xl font-bold leading-tight'>
							Social Brain Theory + Social Networking Tools
						</h1>
						<p className='leading-normal text-2xl mb-8'>
							The Social Brain Network is not a social network,
							but a social connection management system.
						</p>
						<p className='leading-normal mb-8'>
							It works with your biology instead of taking
							advantage of it, to empower you with tools you need
							to manage your social life
						</p>
					</div>
					{/* <!--Right Col--> */}
					<div className='w-full lg:w-3/5 py-6 grid place-items-center'>
						{/* <YoutubeEmbed embedId={embedId} /> */}
						<button
							onClick={() => navigation('/signUp')}
							className='mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out'>
							Sign Up
						</button>
					</div>
				</div>
			</div>
			<WaveTop />
		</>
	)
}

export default Header
