import type ThemeType from '../types/theme';

const Theme: ThemeType = {
	colors: {
		primary: {
			color: '#0d19a3',
			contrastColor: '#ffffff',
			background: '#ffffff',
			text: '#ffffff'
		},
		secondary: {
			color: '#15db95',
			contrastColor: '#000000'
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
	baseSpacing: 1,
	breakpoints: {
		mobile: {
			maxWidth: 768,
			heroAspectRatio: { w: 3, h: 4 }
		},
		tablet: {
			maxWidth: 1000,
			heroAspectRatio: { w: 1, h: 1 }
		},
		desktop: {
			maxWidth: 1921,
			heroAspectRatio: { w: 8, h: 3 }
		},
		largeDesktop: {
			maxWidth: 2000,
			heroAspectRatio: { w: 7, h: 2 }
		}
	}
};

export default Theme;
