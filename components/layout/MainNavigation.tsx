/** @format */

import Link from 'next/link'
import React from 'react'

import Logo from './logo'
import classes from './MainNavigation.module.css'

const MainNavigation = () => (
	<header className={classes.header}>
		<Link href='/' passHref>
			<a>
				<Logo />
			</a>
		</Link>
		<nav>
			<ul>
				<li>
					<Link href='/posts'>Posts</Link>
				</li>
				<li>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	</header>
)

export default MainNavigation
