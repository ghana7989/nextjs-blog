/** @format */

import React from 'react'

import MainNavigation from './MainNavigation'

const layout = ({children}) => {
	return (
		<>
			<MainNavigation />
			<main>{children}</main>
		</>
	)
}

export default layout
