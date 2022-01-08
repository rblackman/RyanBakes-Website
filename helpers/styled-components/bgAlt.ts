import type Theme from '../../types/theme';

export default function createRule({ theme }: { theme: Theme }) {
	return `
			background: ${theme.colors.secondary.color}10;
		`;
}
