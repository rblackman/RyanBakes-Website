import assertUnreachable from 'helpers/assertUnreachable';
import { createElement, CSSProperties, ReactNode, useMemo } from 'react';
import 'server-only';

interface Props {
	level: 2 | 3 | 4;
	children: ReactNode;
	style?: CSSProperties | undefined;
	sr?: boolean;
}

export default function Heading({ level, children, sr, style: inlineStyles }: Props) {
	const heading = useMemo(() => {
		switch (level) {
			case 2:
				return 'h2';
			case 3:
				return 'h3';

			case 4:
				return 'h4';
			default:
				assertUnreachable(level);
				return 'h2';
		}
	}, [level]);

	const props = useMemo(
		() => ({
			style: inlineStyles || {},
			className: sr === true ? 'sr' : null
		}),
		[inlineStyles]
	);

	return createElement(heading, props, children);
}

Heading.defaultProps = {
	sr: false,
	style: undefined
};
