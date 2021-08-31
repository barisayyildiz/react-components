import React from 'react'
import Header from '../components/Header'
import NetflixScroll from '../components/NetflixScroll'
import './style.scss'

function Layout() {
	return (
		<div className="layout">
			<Header></Header>
			<div className="movie-showcase">
				<NetflixScroll></NetflixScroll>
				{/* <NetflixScroll></NetflixScroll>
				<NetflixScroll></NetflixScroll>
				<NetflixScroll></NetflixScroll>
				<NetflixScroll></NetflixScroll>
				<NetflixScroll></NetflixScroll>
				<NetflixScroll></NetflixScroll> */}
			</div>
		</div>
	)
}


export default Layout
