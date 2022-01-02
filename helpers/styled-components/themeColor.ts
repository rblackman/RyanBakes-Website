import type Theme from '../../types/theme';
import type { ThemePalette } from '../../types/theme';

export default function themeColor(getColor: (theme: Theme) => ThemePalette, alpha?: string | undefined) {
	return function createRule({ theme }: { theme: Theme }) {
		const color = getColor(theme);
		return `
			background: ${color.color}${alpha ?? ''};
			color: ${color.contrastColor};
		`;
	};
}
