import { Profiler, useEffect, useState, useContext } from "react"
import Story from "./Story"
import { db } from "../../../firebase"
import {
	onSnapshot,
	getDoc,
	doc,
	query,
	collection,
	where,
	updateDoc,
	arrayUnion,
} from "@firebase/firestore"
import UserContext from "../../../context/userContext"
import { useDrop } from "react-dnd"
import { ItemTypes } from "../../../utilities/items"

function Stories({ group = null }) {
	const {
		currentUser,
		currentGroup,
		combineGroupsUsers,
		groupNumber,
		setCurrentUser,
		usersInGroup,
	} = useContext(UserContext)
	const [stories, setStories] = useState([])

	// if no group prop passed, component will use userContext's currentGroup
	if (!group) group = currentGroup


	// Switch user from one group to another
	const moveUser = async (user, fromGroup, toGroup) => {
		// Guard against invalid input
		if (!user || !fromGroup || !toGroup) return

		// Guard against max number of users in group already
		if (usersInGroup(toGroup).exclusive >= groupNumber(toGroup).exclusive) return
		// Guard against total users
		if (usersInGroup(toGroup).inclusive >= groupNumber(toGroup).inclusive) return

		// Create new following array
		var newFollowingArray = currentUser.following
		newFollowingArray[`${fromGroup}`] = currentUser.following[
			`${fromGroup}`
		].filter((item) => item !== user)
		newFollowingArray[`${toGroup}`] =
			currentUser.following[`${toGroup}`].concat(user)

		// Update user's following array
		await updateDoc(doc(db, `users/${currentUser.uid}`), {
			following: newFollowingArray,
		})
		// Update user's followers array in state
		setCurrentUser({ ...currentUser, following: newFollowingArray })
	}

	// Makes this component a drop target
	const [{ isOver }, drop] = useDrop(() => ({
		accept: ItemTypes.USER,
		drop: (item) => moveUser(item.uid, item.fromGroup, group),
		canDrop: (item) => item.fromGroup !== group,
		collect: (monitor) => ({
			isOver: !!monitor.isOver() && monitor.canDrop(),
		}),
	}))

	// Get user's following from all groups w/ snapshot
	useEffect(() => {
		const unsubscribe = onSnapshot(
			query(
				collection(db, "users"),
				where("uid", "in", combineGroupsUsers(group, currentUser)),
				where("uid", "!=", currentUser.uid)
			),
			(snapshot) => {
				setStories(snapshot.docs.map((user) => user.data()))
			}
		)
		return () => unsubscribe()
	}, [db, group, currentUser])

	return (
		<div
			ref={drop}
			className={`border-gray-200 flex justify-between space-x-2 p-6 bg-white mt-8 border rounded-sm  dark:bg-gray-500 dark:text-gray-100 dark:border-gray-500 ${
				isOver &&
				"border-red-300 bg-yellow-50 dark:border-red-800 dark:bg-yellow-500"
			}`}>
			<div>
				<h3 className='inline-block'>Group</h3>
				<h3>
					{usersInGroup(group).exclusive +
						"/" +
						groupNumber(group).exclusive}
				</h3>
			</div>
			<div className='flex space-x-3'>
				{stories.map((profile, index) => (
					<Story
						group={group}
						key={index}
						img={profile.profilePic}
						username={profile.username}
						uid={profile.uid}
					/>
				))}
			</div>
			<div className='inline-block'>
				<h3>Total</h3>
				<h3>
					{usersInGroup(group).inclusive +
						"/" +
						groupNumber(group).inclusive}
				</h3>
			</div>
		</div>
	)
}

export default Stories
