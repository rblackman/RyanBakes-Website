import getSiteConfig from 'queries/getSiteConfig';
import { ReactNode, use } from 'react';
import 'server-only';
import '../styles/global.css';
import '../styles/variables.css';
import MainNav from './(components)/mainNav';

export default function RootLayout({ children }: { children: ReactNode }) {
	const { lang } = use(getSiteConfig());

	return (
		<html lang={lang}>
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#0d19a3" />
			</head>
			<body>
				<MainNav />
				{children}
			</body>
		</html>
	);
}
