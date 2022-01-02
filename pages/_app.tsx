/* eslint-disable react/jsx-props-no-spreading */

import { NextDataHooksProvider } from 'next-data-hooks';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globalStyles';
import Theme from '../styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
	const { children, ...rest } = pageProps;

	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<NextDataHooksProvider {...rest}>
				<Component {...rest}>{children}</Component>
			</NextDataHooksProvider>
		</ThemeProvider>
	);
}
