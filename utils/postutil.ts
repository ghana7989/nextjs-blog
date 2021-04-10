/** @format */

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export const getPostData = (postIdentifier: string) => {
	const postSlug = postIdentifier.replace(/\.md$/, '')
	const filePath = path.join(postsDirectory, postSlug + '.md')
	const fileContent = fs.readFileSync(filePath, 'utf8')

	const {data, content} = matter(fileContent)

	const postData = {
		slug: postSlug,
		content,
		...data,
	}
	return postData
}

export const getAllPosts = () => {
	const postFiles = fs.readdirSync(postsDirectory)

	const allPosts = postFiles
		.map(postFile => getPostData(postFile))
		// @ts-ignore
		.sort((postA, postB) => (postA.date > postB.date ? -1 : 1))

	return allPosts
}

export const getFeaturedPosts = () => {
	// @ts-ignore
	return getAllPosts().filter(post => post.isFeatured)
}
