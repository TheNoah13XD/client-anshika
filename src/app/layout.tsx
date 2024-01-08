'use client';

import React, { StrictMode } from 'react';
import { usePathname } from 'next/navigation';

// styles
import '@/styles/index.css';

// components
import { Grid, Col } from '@/components/ui/Grid';
import Nav from '@/components/Nav';
import Scene from '@/components/Scene';
import Scenario from '@/components/Scenario';

// fontawesome
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
    const pathname = usePathname();
    const routeConfig = ['/', '/work', '/human', '/contact'];
    const hasScenario = routeConfig.includes(pathname);

	return (
		<html lang="en">
			<head>
				<title>.anshika - portfolio</title>
				<meta name='description' content='developed by .noah' />
			</head>
			<body className='container display-f'>
				<StrictMode>
					<Nav className='xs-display-n fr-display-f' />
					<Grid className='w-full'>

						{/* big screens */}
						{hasScenario ? (
							<Col col='2' extraLMargin className='z-2 overflow-h xs-display-n fr-display-f'>
								<Scenario />
							</Col>
						) : null}
						<Col col="10" extraLMargin className='overflow-h xs-display-n fr-display-f'>
							<Scene className='overflow-s'>
								{children}
							</Scene>
						</Col>

						{/* small screens */}
						<Col col="12" className='overflow-h xs-display-f fr-display-n'>
							<Scene className='overflow-s'>
								<Nav className='xs-display-n sm-display-f fr-display-n' />
								{children}
							</Scene>
						</Col>

					</Grid>
				</StrictMode>
			</body>
		</html>
	)
}
