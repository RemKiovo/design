import type { Metadata } from 'next'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
	title: 'FaeDigital',
	description:
		'FaeDigital is a website that allows you to create your own website',
	icons: {
		icon: '/logo.svg'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='dark'>
			<ThemeProvider>
				<body
					className={`${spaceGrotesk.className} antialiased container mx-auto bg-background dark:text-background dark:bg-foreground transition-colors duration-300`}
				>
					<div className='flex flex-col h-[100dvh]'>
						<Header />
						{children}
						<Footer />
					</div>
				</body>
			</ThemeProvider>
		</html>
	)
}
