import type { Metadata } from 'next'

// styles
import '@/styles/index.css'

// components
import { Grid, Col } from '@/components/ui/Grid';
import Nav from '@/components/Nav';
import Scene from '@/components/Scene';
import Scenario from '@/components/Scenario';

// fontawesome
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

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
				
				<Scene>
					<Grid className='h-full'>
						<Col col='2' extraMargin>
							<Scenario />
						</Col>
						<Col col='5'>
							{children}
						</Col>
					</Grid>
				</Scene>

			</body>
		</html>
	)
}
