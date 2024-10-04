'use client'

import React from 'react'
import { useTheme } from './context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

const Page: React.FC = () => {
	const { theme } = useTheme()
	return (
		<main className='text-center flex items-center justify-center h-full'>
			<div className='flex flex-col gap-10'>
				<h1 className='text-2xl font-bold'>
					{theme === 'dark' ? 'Dark Mode 🌙' : 'Light Mode 🌞'}
				</h1>
				<div
					className={`relative flex flex-col items-center justify-center transition-transform duration-500 ${
						theme === 'dark' ? '-translate-y-20' : 'translate-y-20'
					}`}
				>
					<FaSun
						size={150}
						className={`transition-all duration-500 hover:scale-110 hover:rotate-90 ${
							theme === 'dark' ? 'opacity-0' : 'opacity-100'
						} text-foreground`}
					/>
					<FaMoon
						size={150}
						className={`transition-all duration-500 hover:scale-110 hover:-rotate-12 ${
							theme === 'dark' ? 'opacity-100' : 'opacity-0'
						} text-background`}
					/>
				</div>
			</div>
		</main>
	)
}

export default Page
