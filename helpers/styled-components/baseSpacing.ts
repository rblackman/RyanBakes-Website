import Theme from '../../types/theme';

export default function baseSpacing(multiple: number = 1) {
	return function createRule({ theme }: { theme: Theme }) {
		return `${theme.baseSpacing * multiple}rem`;
	};
}
