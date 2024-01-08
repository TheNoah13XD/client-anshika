'use client';

import { StrictMode, useEffect, useState } from 'react';
import React from 'react';
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
	const [width, setWidth] = useState(window.innerWidth);

	const pathname = usePathname();
	const routeConfig = ['/', '/work', '/human', '/contact'];
	const hasScenario = routeConfig.includes(pathname);

	useEffect(() => {
		const handleResize = () => {
		  setWidth(window.innerWidth);
		};
	  
		window.addEventListener('resize', handleResize);
	  
		return () => {
		  window.removeEventListener('resize', handleResize);
		};
	}, [width]);

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
						{hasScenario && width > 1239 ? (
							<Col col='2' extraLMargin className='z-2 overflow-h'>
								<Scenario />
							</Col>
						) : null}
						<Col col={hasScenario  && width > 1239 ? '10' : '12'} extraLMargin={width > 1239} className='overflow-h'>
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
