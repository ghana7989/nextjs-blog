/** @format */

import React, {Fragment} from 'react'
import FeaturedPosts from '../components/homePage/FeaturedPosts'

import Hero from '../components/homePage/Hero'
import {getFeaturedPosts} from '../utils/postutil'

function HomePage({posts}) {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={posts} />
		</Fragment>
	)
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts()
	return {
		props: {
			posts: featuredPosts,
		},
		revalidate: 3600,
	}
}

export default HomePage
