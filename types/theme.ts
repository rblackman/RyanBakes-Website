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

export default interface Theme {
	baseSpacing: number;
	colors: Colors;
	typography: Typography;
}
