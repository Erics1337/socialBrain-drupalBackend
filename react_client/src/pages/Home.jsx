import React, { useEffect, useContext } from 'react'
import Loader from '../components/Loader'
import AuthContext from '../context/AuthContext'
import Homepage from '../components/landingPage/Homepage'
import Feed from '../components/feed/Feed'
import Navbar from '../components/Navbar'

function Home() {
	const {
		currentUser,
		isLoggedIn,
		checkLoggedIn,
		isLoading,
		signin,
		signout,
	} = useContext(AuthContext)

	useEffect(() => {
		checkLoggedIn(false, '/login')
	}, [])

	if (isLoading) return <Loader />
	return (
		<div className='bg-gray-50 min-h-screen overflow-y-auto scrollbar-hide dark:bg-gray-700'>
			<Navbar />

			{isLoggedIn ? <Feed /> : <Homepage />}
		</div>
	)
}

export default Home
