import {
	collection,
	orderBy,
	query,
	where,
	limit,
	getDocs,
	getDoc,
	doc,
	startAfter,
} from "@firebase/firestore"
import { useEffect, useState, useContext } from "react"
import { db } from "../../../firebase"
import Post from "./Post"
import UserContext from "../../../context/userContext"
import useInfiniteScroll from "react-infinite-scroll-hook"

function Posts() {
	const { currentUser, currentGroup, combineGroupsUsers } =
		useContext(UserContext)
	const [posts, setPosts] = useState([])
	const [lastKey, setLastKey] = useState(null)
	const [hasMorePosts, setHasMorePosts] = useState(true)
	const [loading, setLoading] = useState(false)

	const [sentryRef] = useInfiniteScroll({
		loading,
		hasNextPage: hasMorePosts,
		// threshold: 400,
		onLoadMore: handleLoadMore,
	})

	function handleLoadMore() {
		if (!loading) fetchPosts(lastKey)
	}

	/* ------------------------ Fetch Posts w/ key and batchSize ----------------------- */
	const fetchPosts = async (key = null, batchSize = 2) => {
		try {
			setLoading(true)
			// Query to fetch first batch of posts
			let q = query(
				collection(db, "posts"),
				where("uid", "in", [
					...combineGroupsUsers(currentGroup, currentUser),
					currentUser.uid,
				]),
				orderBy("timestamp", "desc"),
				limit(batchSize)
			)
			if (key) {
				// If key is passed, create query to fetch next batch of posts
				q = query(
					collection(db, "posts"),
					where("uid", "in", [
						...combineGroupsUsers(currentGroup, currentUser),
						currentUser.uid,
					]),
					orderBy("timestamp", "desc"),
					limit(batchSize),
					startAfter(key || new Date(253402300799999))
				)
			}
			const postsSnap = await getDocs(q)
			postsSnap.forEach((postDoc) => {
				getDoc(doc(db, "users", postDoc.data().uid))
					.then((userDoc) => {
						// if (cancel) return
						setPosts((prevPosts) => [
							...prevPosts,
							{
								id: postDoc.id,
								...postDoc.data(),
								user: userDoc.data(),
							},
						])
					})
					.catch((e) => console.log(e))
				setLastKey(postDoc.data().timestamp)
			})
			if (postsSnap.docs.length < batchSize) setHasMorePosts(false)
			setLoading(false)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		// let cancel = false

		if (!loading) setHasMorePosts(true)
		setPosts([])
		fetchPosts()

		// cleanup to prevent memory leaks
		// return () => (cancel = true)
	}, [currentGroup])

	return (
		<div>
			{posts.map((post, i) => (
				<>
					<Post
						currentUser={currentUser}
						key={post.id}
						id={post.id}
						image={post.image}
						likes={post.likes}
						caption={post.caption}
						username={post.user.username}
						userImg={post.user.profilePic}
					/>
					{i === posts.length - 1 && hasMorePosts && (
						<div
							ref={sentryRef}
							className='grid place-items-center p-5'>
							<i className='loader' />
						</div>
					)}
				</>
			))}
		</div>
	)
}

export default Posts
