import React from 'react'

const Button = ({
	title,
	type
}: {
	title: string
	type: { variant: 'primary' | 'secondary' }
}) => {
	return type.variant === 'primary' ? (
		<button className='px-5 py-3 rounded-md border-foreground border-2 dark:border-background dark:text-background dark:hover:text-foreground text-foreground font-bold hover:bg-primary hover:border-primary transition-all duration-300'>
			{title}
		</button>
	) : (
		<button className='px-5 py-3 rounded-md bg-gray-200 text-gray-800'>
			{title}
		</button>
	)
}

export default Button
