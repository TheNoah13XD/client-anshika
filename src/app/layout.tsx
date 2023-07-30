import type { Metadata } from 'next'

import '@/styles/index.css'
import 'material-symbols';

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
			<body>{children}</body>
		</html>
	)
}
