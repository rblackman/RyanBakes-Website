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
			<body>
				<MainNav />
				{children}
			</body>
		</html>
	);
}
