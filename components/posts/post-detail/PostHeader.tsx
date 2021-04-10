/** @format */

import Image from 'next/image'
import React, {FC} from 'react'

import classes from './PostHeader.module.css'

// Here expecting image as full path
const PostHeader: FC<{title: string; image: string}> = ({title, image}) => {
	return (
		<header className={classes.header}>
			<h1>{title}</h1>
			<Image src={image} alt={title} width={200} height={150} />
		</header>
	)
}

export default PostHeader
