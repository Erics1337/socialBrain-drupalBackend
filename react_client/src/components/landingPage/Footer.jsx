import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
	const navigation = useNavigate()

	return (
		<footer className='pt-5 mt-5 bg-gray-50 dark:bg-gray-700'>
			<div className='container mx-auto px-8'>
				<div className='w-full flex flex-col md:flex-row py-6'>
					<div className='flex-1 mb-6 text-black'>
						<div
							className='text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl'
							onClick={() => navigation('/')}>
							<img
								alt='Logo'
								src={
									process.env.PUBLIC_URL +
									'/assets/images/logo.png'
								}
								className='w-20'
							/>
							Social Brain
						</div>
					</div>
					<div className='flex-1'>
						<p className='uppercase text-gray-500 dark:text-gray-100 md:mb-6'>
							Links
						</p>
						<ul className='list-reset mb-6'>
							<li className='mt-2 inline-block mr-2 md:block md:mr-0'>
								<a
									href='#'
									className='no-underline hover:underline text-gray-800 dark:text-gray-400 hover:text-pink-500'>
									FAQ
								</a>
							</li>
							<li className='mt-2 inline-block mr-2 md:block md:mr-0'>
								<a
									href='#'
									className='no-underline hover:underline text-gray-800 dark:text-gray-400 hover:text-pink-500'>
									Help
								</a>
							</li>
							<li className='mt-2 inline-block mr-2 md:block md:mr-0'>
								<a
									href='#'
									className='no-underline hover:underline text-gray-800 dark:text-gray-400 hover:text-pink-500'>
									Support
								</a>
							</li>
						</ul>
					</div>
					<div className='flex-1'>
						<p className='uppercase text-gray-500 dark:text-gray-100  md:mb-6'>
							Legal
						</p>
						<ul className='list-reset mb-6'>
							<li className='mt-2 inline-block mr-2 md:block md:mr-0'>
								<a
									href='#'
									className='no-underline hover:underline text-gray-800 dark:text-gray-400 hover:text-pink-500'>
									Terms
								</a>
							</li>
							<li className='mt-2 inline-block mr-2 md:block md:mr-0'>
								<a
									href='#'
									className='no-underline hover:underline text-gray-800 dark:text-gray-400 hover:text-pink-500'>
									Privacy
								</a>
							</li>
						</ul>
					</div>
					<div className='flex-1'>
						<p className='uppercase text-gray-500 dark:text-gray-100  md:mb-6'>
							Social
						</p>
						<ul className='list-reset mb-6'>
							<li className='mt-2 inline-block mr-2 md:block md:mr-0'>
								<a
									href='#'
									className='no-underline hover:underline text-gray-800 dark:text-gray-400 hover:text-pink-500'>
									Facebook
								</a>
							</li>
							<li className='mt-2 inline-block mr-2 md:block md:mr-0'>
								<a
									href='#'
									className='no-underline hover:underline text-gray-800 dark:text-gray-400 hover:text-pink-500'>
									Linkedin
								</a>
							</li>
							<li className='mt-2 inline-block mr-2 md:block md:mr-0'>
								<a
									href='#'
									className='no-underline hover:underline text-gray-800 dark:text-gray-400 hover:text-pink-500'>
									Twitter
								</a>
							</li>
						</ul>
					</div>
					<div className='flex-1'>
						<p className='uppercase text-gray-500 dark:text-gray-100  md:mb-6'>
							Company
						</p>
						<ul className='list-reset mb-6'>
							<li className='mt-2 inline-block mr-2 md:block md:mr-0'>
								<a
									href='#'
									className='no-underline hover:underline text-gray-800 dark:text-gray-400 hover:text-pink-500'>
									Official Blog
								</a>
							</li>
							<li className='mt-2 inline-block mr-2 md:block md:mr-0'>
								<a
									href='#'
									className='no-underline hover:underline text-gray-800 dark:text-gray-400 hover:text-pink-500'>
									About Us
								</a>
							</li>
							<li className='mt-2 inline-block mr-2 md:block md:mr-0'>
								<a
									href='#'
									className='no-underline hover:underline text-gray-800 dark:text-gray-400 hover:text-pink-500'>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
