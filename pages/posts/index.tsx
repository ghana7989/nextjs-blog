/** @format */

import React from 'react'
import AllPosts from '../../components/posts/AllPosts'
import {getAllPosts} from '../../utils/postutil'

function AllPostsPage({posts}) {
	return <AllPosts posts={posts} />
}
export async function getStaticProps() {
	const allPosts = getAllPosts()
	return {
		props: {
			posts: allPosts,
		},
		revalidate: 3600,
	}
}
export default AllPostsPage
