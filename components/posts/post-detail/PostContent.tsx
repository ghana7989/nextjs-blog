/** @format */

import Image from 'next/image'
import React, {FC} from 'react'
import ReactMarkdown from 'react-markdown'
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'

import {Post} from '../PostsGrid'
import classes from './PostContent.module.css'
import PostHeader from './PostHeader'

const PostContent: FC<{post: Post}> = ({post}) => {
	const {image, slug, title, content} = post

	const customRenderers = {
		image(image) {
			return <Image src={image.src} alt={image.alt} width={600} height={300} />
		},
		paragraph(paragraph: {children?: any; node?: any}) {
			const {node} = paragraph

			if (node.children[0].type === 'image') {
				const image = node.children[0]

				return (
					<div className={classes.image}>
						<Image src={image.url} alt={image.alt} width={600} height={300} />
					</div>
				)
			}

			return <p>{paragraph.children}</p>
		},

		code(code: {language: any; value: any}) {
			const {language, value} = code
			return <SyntaxHighlighter style={atomDark} language={language} children={value} />
		},
	}

	return (
		<article className={classes.content}>
			<PostHeader title={title} image={image} />
			<ReactMarkdown renderers={customRenderers}>{content}</ReactMarkdown>
		</article>
	)
}

export default PostContent
