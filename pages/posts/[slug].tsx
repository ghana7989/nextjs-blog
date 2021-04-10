/** @format */
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from 'next'
import React from 'react'
import PostContent from '../../components/posts/post-detail/PostContent'
import {getPostData} from '../../utils/postutil'

function PostDetailPage({post}) {
	return <PostContent post={post} />
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const {
		params: {slug},
	} = context

	const postData = getPostData(slug as string)
	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	}
}
export const getStaticPaths: GetStaticPaths<{slug: string}> = async () => {
	return {
		paths: [], //indicates that no page needs be created at build time
		fallback: 'blocking', //indicates the type of fallback
	}
}
export default PostDetailPage
