/** @format */

import React, {FC} from 'react'

import {Posts} from '../homePage/FeaturedPosts'
import PostsGrid from './PostsGrid'
import classes from './AllPosts.module.css'

const AllPosts: FC<{posts: Posts}> = ({posts}) => {
	return (
		<section className={classes.posts}>
			<h1>All Posts</h1>
			<PostsGrid posts={posts} />
		</section>
	)
}

export default AllPosts
