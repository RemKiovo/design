import React from 'react'

const Footer = () => {
	return (
		<footer className='bg-foreground dark:bg-background transition-colors duration-300 p-10 sm:mb-5 sm:rounded-3xl text-center'>
			<p className='text-background dark:text-foreground transition-colors duration-300'>
				Made by{' '}
				<a href='https://github.com/RemKiovo' target='_blank'>
					<span className='font-bold'>RemKiovo</span>
				</a>
			</p>
		</footer>
	)
}

export default Footer
