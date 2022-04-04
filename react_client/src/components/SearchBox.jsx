import { SearchIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'
// import AsyncSelect from "react-select/async"
// import makeAnimated from "react-select/animated"
// import Router from "next/router"
// import { collection, where, query, limit, getDocs } from "@firebase/firestore"
// import { db } from "../firebase"

const customStyles = {
	container: (provided) => ({
		...provided,
		maxWidth: 300,
		minWidth: 200,
	}),
}

function SearchBox() {
	return <div>Search</div>

	// const animatedComponents = makeAnimated()

	// const loadOptions = async (inputValue, callback) => {
	// 	const searchTerm = inputValue.toLowerCase()
	// 	const strlength = searchTerm.length
	// 	const strFrontCode = searchTerm.slice(0, strlength - 1)
	// 	const strEndCode = searchTerm.slice(strlength - 1, searchTerm.length)
	// 	// This mumbo jumbo allows dynamic searching in firebase
	// 	const endCode =
	// 		strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1)
	// 	if (query.length > 0) {
	// 		const snapshot = await getDocs(
	// 			query(
	// 				collection(db, "users"),
	// 				where("username", ">=", searchTerm),
	// 				where("username", "<=", endCode),
	// 				limit(5)
	// 			)
	// 		)
	// 		callback(
	// 			snapshot.docs.map((doc) => ({
	// 				label: doc.data().username,
	// 				value: doc.data().username,
	// 				image: doc.data().profilePic,
	// 			}))
	// 		)
	// 	}
	// }

	// return (
	// 	<>
	// 		<div className='relative mt-1 p-3 rounded-md'>
	// 			<div className='bg-grey-50 pl-10 sm:text-sm border-grey-300 focus:ring-black focus:border-black rounded-md border-grey-300'>
	// 				<AsyncSelect
	// 					placeholder={
	// 						<span className='flex pl-1 font-semibold outline-none'>
	// 							<SearchIcon className='h-5 w-5 text-grey-500 mr-2' />
	// 							Search Users
	// 						</span>
	// 					}
	// 					styles={customStyles}
	// 					onChange={(value) =>
	// 						Router.push(`/profile/${value.label}`)
	// 					}
	// 					loadOptions={loadOptions}
	// 					components={
	// 						(animatedComponents,
	// 						{
	// 							DropdownIndicator: () => null,
	// 							IndicatorSeparator: () => null,
	// 						})
	// 					}
	// 					formatOptionLabel={(user) => (
	// 						<div className='flex flex-row hover:cursor-pointer mx-auto text-black'>
	// 							<img
	// 								src={user.image}
	// 								alt='user-image'
	// 								className='w-10 h-10 rounded-full border p-[2px]'
	// 							/>
	// 							<span className='my-auto pl-2 font-semibold'>
	// 								{user.label}
	// 							</span>
	// 						</div>
	// 					)}
	// 				/>
	// 			</div>
	// 		</div>
	// 	</>
	// )
}

export default SearchBox
