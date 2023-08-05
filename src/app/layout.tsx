import type { Metadata } from 'next'

// styles
import '@/styles/index.css'

// components
import Nav from '@/components/Nav';

export const metadata: Metadata = {
	title: '.anshika - portfolio',
	description: 'developed by .noah',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className='container display-f'>
				<Nav />
				{children}
			</body>
		</html>
	)
}
