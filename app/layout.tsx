import getSiteConfig from 'queries/getSiteConfig';
import { ReactNode, use } from 'react';

import '../styles/global.css';
import '../styles/variables.css';

export default function RootLayout({ children }: { children: ReactNode }) {
	const { title, lang } = use(getSiteConfig());

	return (
		<html lang={lang}>
			<body>{children}</body>
		</html>
	);
}
