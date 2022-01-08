export interface ThemePalette {
	color: string;
	contrastColor: string;
}

export interface PrimaryThemePalette extends ThemePalette {
	background: string;
	text: string;
}

export interface Colors {
	primary: PrimaryThemePalette;
	secondary: ThemePalette;
	error: ThemePalette;
}

export interface Typography {
	fontFamily: string;
	baseFontSize: number;
	baseLineHeight: number;
}

export interface BreakPoint {
	maxWidth: number;
	heroAspectRatio: { w: number; h: number };
}

export interface BreakPoints {
	mobile: BreakPoint;
	tablet: BreakPoint;
	desktop: BreakPoint;
	largeDesktop: BreakPoint;
}

export interface Sizes {
	maxContentWidth: number;
	largeImage: number;
	mediumImage: number;
	smallImage: number;
}

export default interface Theme {
	baseSpacing: number;
	colors: Colors;
	typography: Typography;
	breakpoints: BreakPoints;
	sizes: Sizes;
}
