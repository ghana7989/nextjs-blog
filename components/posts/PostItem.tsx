/** @format */

import Link from 'next/link'
import Image from 'next/image'
import React, {FC} from 'react'

import classes from './PostItem.module.css'
import {Post} from './PostsGrid'
import {isUrl} from '../../utils/isUrl'
import {formatDate} from '../../utils/formatDate'

const PostItem: FC<{post: Post}> = ({post}) => {
	const {title, excerpt, image, date, slug} = post
	const formattedDate = formatDate(date)
	let imagePath = undefined
	if (!isUrl(image)) {
		imagePath = `/images/posts/${slug}/${image}`
	}
	const linkPath = `/posts/${slug}`

	return (
		<li className={classes.post}>
			<Link href={linkPath}>
				<a>
					<div className={classes.image}>
						<Image
							src={imagePath ? imagePath : image}
							alt={title}
							width={300}
							height={200}
							layout='responsive'
						/>
					</div>
					<div className={classes.content}>
						<h3>{title}</h3>
						<time>{formattedDate}</time>
						<p>{excerpt}</p>
					</div>
				</a>
			</Link>
		</li>
	)
}

export default PostItem
