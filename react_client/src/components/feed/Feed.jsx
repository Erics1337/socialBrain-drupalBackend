// import Stories from "./stories/Stories"
// import Posts from "./posts/Posts"
// import MiniProfile from "../sidebar/MiniProfile"
// import Suggestions from "../sidebar/Suggestions"
// import Tabs from './Tabs';

function Feed() {
	return (
		<main
			className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3xl xl:grid-cols-3 
                xl:max-w-6xl mx-auto max-w-3xl`}>
			<section className='col-span-2'>
				Feed
				{/* <Tabs />
				<Stories />
				<Posts /> */}
			</section>
			<section className='hidden xl:inline-grid md:col-span-1'>
				<div className='fixed top-20'>
					Miniprofile
					{/* <MiniProfile />
					<Suggestions /> */}
				</div>
			</section>
		</main>
	)
}

export default Feed
