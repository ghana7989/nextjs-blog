/** @format */

import React, {FC} from 'react'
import PostItem from './PostItem'

import classes from './PostsGrid.module.css'

export interface Post {
	image: string
	title: string
	slug: string
	excerpt: string
	date: Date
	content: string
	isFeatured?: boolean
}

const PostsGrid: FC<{posts: Array<Post>}> = ({posts}) => {
	return (
		<ul className={classes.grid}>
			{posts.map(post => (
				<PostItem post={post as Post} key={post.slug} />
			))}
		</ul>
	)
}

export default PostsGrid
