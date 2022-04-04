import { useContext } from "react"
import UserContext from "../../context/userContext"
import TabButton from './TabButton';


function Tabs() {
    const { darkMode } = useContext(UserContext)

	return (
		<div className='pt-5'>
			{/* For Mobile */}
			<div className='sm:hidden'>
				<label htmlFor='tabs' className='sr-only'>
					Select Your Social Group
				</label>
				<select
					id='tabs'
					className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
					${darkMode && "dark"}`}>
					<option>All</option>
					<option>Loved</option>
					<option>Family</option>
					<option>Friends</option>
					<option>Connections</option>
					<option>Acquaintances</option>
					<option>Recognizable</option>
				</select>
			</div>
			{/* Expanded */}
			<ul
				className={`flex hidden rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 ${
					darkMode && "dark"
				}`}>
				<li className='w-full'>
					<TabButton group={'all'} otherStyles={'rounded-l-lg'} />
				</li>
				<li className='w-full'>
					<TabButton group={'loved'} />
				</li>
				<li className='w-full'>
					<TabButton group={'family'} />
				</li>
				<li className='w-full'>
					<TabButton group={'friends'}  />
				</li>
				<li className='w-full'>
					<TabButton group={'connections'} />
				</li>
				<li className='w-full'>
					<TabButton group={'acquaintances'} />
				</li>
				<li className='w-full'>
					<TabButton group={'recognizable'} otherStyles={'rounded-r-lg'} />
				</li>
			</ul>
		</div>
	)
}
export default Tabs
