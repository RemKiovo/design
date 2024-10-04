'use client'

import Link from 'next/link'
import React from 'react'
import ThemeToggle from './ThemeToggle'

const Header: React.FC = () => {
	return (
		<header className='flex items-center justify-between py-4 px-4'>
			<Link href='/' className='flex items-center gap-2 group'>
				<p className='text-2xl font-bold pl-2 dark:text-background transition-colors'>
					Light Test
				</p>
			</Link>

			<nav className='flex items-center gap-2'>
				<ThemeToggle />
			</nav>
		</header>
	)
}

export default Header
