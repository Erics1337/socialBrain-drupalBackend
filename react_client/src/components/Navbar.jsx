import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
	UserIcon,
} from '@heroicons/react/outline'
import { useContext, useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import AuthContext from '../context/AuthContext'
// import UploadPostModal from './UploadPostModal'
// import ChatContext from '../context/chatContext'
// import UserContext from '../context/userContext'
import { useNavigate } from 'react-router-dom'

function Navbar() {
	const navigate = useNavigate()
	// const { setModalState, currentUser } = useContext(UserContext)
	// const { newMessageCount, getNewMessageCount, currentChat } =
	// 	useContext(ChatContext)
	const { isLoggedIn, signout } = useContext(AuthContext)
	const [showMobileMenu, setShowMobileMenu] = useState(false)

	const newMessageCount = 0
	const currentUser = {
		username: 'test',
	}

	// useEffect(() => {
	// 	getNewMessageCount(currentUser)
	// }, [currentChat])

	return (
		<>
			{/* <UploadPostModal /> */}
			<nav className='shadow-md border-b bg-white sticky top-0 z-50 dark:bg-gray-800 dark:border-b-gray-900 dark:text-gray-100'>
				<div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
					{/* Left Part */}
					<div className='hidden md:inline-grid'>
						<div
							onClick={() => navigate('/')}
							className='relative w-60 cursor-pointer dark:hidden'>
							<img
								alt='Logo'
								src={
									process.env.PUBLIC_URL +
									'/assets/images/logoText.png'
								}
								className='w-full'
							/>
						</div>
						<div
							onClick={() => navigate('/')}
							className='relative w-60 cursor-pointer hidden dark:block'>
							<img
								alt='Logo'
								src={
									process.env.PUBLIC_URL +
									'/assets/images/logoText-dark.png'
								}
								className='w-full'
							/>
						</div>
					</div>

					<div
						onClick={() => navigate('/')}
						className='relative w-10 md:hidden flex-shrink-0 cursor-pointer my-auto'>
						<img
							alt='Logo'
							src={
								process.env.PUBLIC_URL +
								'/assets/images/logo.png'
							}
							className='w-full my-auto'
						/>
					</div>

					{/* Middle Part - Custom search input field */}
					<div className='max-w-xs '>
						<SearchBox />
					</div>

					{/* Right Part */}
					<div className='flex items-center justify-end space-x-4'>
						<MenuIcon
							className='h-9 md:hidden cursor-pointer'
							onClick={() => setShowMobileMenu(!showMobileMenu)}
						/>

						{isLoggedIn ? (
							<>
								<HeartIcon
									className='navBtn'
									onClick={() => navigate('/activity')}
								/>
								<div
									className='relative navBtn'
									onClick={() => navigate('/messaging')}>
									<PaperAirplaneIcon className='navBtn rotate-45' />
									{newMessageCount > 0 && (
										<div className='absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse'>
											{newMessageCount}
										</div>
									)}
								</div>
								<PlusCircleIcon
									// onClick={() => setModalState(true)}
									className='navBtn'
								/>
								<UserGroupIcon
									className='navBtn'
									onClick={() => navigate('/groups')}
								/>
								<UserIcon
									onClick={() =>
										navigate(
											`/profile/${currentUser.username}`
										)
									}
									className='navBtn'
								/>

								{/* <img src={} alt="profile pic" onClick={signOut} className="h-10 w-10 rounded-full cursor-pointer" /> */}
								<button
									onClick={() =>
										signout().then(() => {
											window.location.reload()
										})
									}
									className='cursor-pointer'>
									Sign Out
								</button>
							</>
						) : (
							<button
								className='inline-block bg-blue-500 px-2 py-1 text-white font-semibold 
						text-sm rounded'
								onClick={() => navigate('/login')}>
								Log In
							</button>
						)}
					</div>
				</div>
				{showMobileMenu && (
					<div className='md:hidden'>
						{isLoggedIn ? (
							<div className='grid grid-cols-5 p-4 mb-5 text-xs'>
								<div className='col-span-1 btn mx-auto mb-5'>
									<HeartIcon
										className='mx-auto'
										onClick={() => navigate('/activity')}
									/>
									<h1>Activity</h1>
								</div>
								<div className='col-span-1 btn mx-auto mb-5'>
									<PaperAirplaneIcon
										className='ml-4 rotate-45 mx-auto'
										onClick={() => navigate('/messaging')}
									/>
									<h1>Messaging</h1>
								</div>

								<div className='col-span-1 btn mx-auto mb-5'>
									<PlusCircleIcon
										className='mx-auto'
										// onClick={() => setModalState(true)}
									/>
									<h1>Add Post</h1>
								</div>
								<div className='col-span-1 btn mx-auto mb-5'>
									<UserGroupIcon
										className='mx-auto'
										onClick={() => navigate('/groups')}
									/>
									<h1>Groups</h1>
								</div>
								<div className='col-span-1 btn mx-auto mb-5'>
									<UserIcon
										className='mx-auto'
										onClick={() =>
											navigate(
												`/profile/${currentUser.username}`
											)
										}
									/>
									<h1>Profile</h1>
								</div>
							</div>
						) : (
							<button
								className='inline-block bg-blue-500 px-2 py-1 text-white font-semibold 
						text-sm rounded'
								onClick={() => navigate('/login')}>
								Log In
							</button>
						)}
					</div>
				)}
			</nav>
		</>
	)
}

export default Navbar
