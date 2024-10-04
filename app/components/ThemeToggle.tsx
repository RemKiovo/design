'use client'

import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<button
			className='text-foreground border-foreground border-2 rounded-full ml-4 p-4 transition-colors duration-200 dark:text-background dark:border-background'
			onClick={toggleTheme}
			aria-label={
				theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
			}
		>
			{theme === 'dark' ? <FaSun /> : <FaMoon />}
		</button>
	)
}

export default ThemeToggle
