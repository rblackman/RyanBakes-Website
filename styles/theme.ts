import type ThemeType from '../types/theme';

const Theme: ThemeType = {
	colors: {
		primary: {
			color: '#5bccf6',
			contrastColor: '#030e12',
			background: '#ffffff',
			text: '#030e12'
		},
		secondary: {
			color: '#fcde67',
			contrastColor: '#030e12'
		},
		error: {
			color: '#f57390',
			contrastColor: '#030e12'
		}
	},
	typography: {
		baseFontSize: 20,
		baseLineHeight: 1.6,
		fontFamily: 'system-ui, sans-serif'
	},
	baseSpacing: 1
};

export default Theme;
