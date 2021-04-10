/** @format */

import React, {FC} from 'react'
import PostsGrid, {Post} from '../posts/PostsGrid'
import classes from './FeaturedPosts.module.css'

export type Posts = Array<Post>

const FeaturedPosts: FC<{posts: Posts}> = ({posts}) => {
	return (
		<section className={classes.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid posts={posts} />
		</section>
	)
}

export default FeaturedPosts
