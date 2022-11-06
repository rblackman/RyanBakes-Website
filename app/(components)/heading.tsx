import clsx from 'clsx';
import assertUnreachable from 'helpers/assertUnreachable';
import { createElement, CSSProperties, ReactNode, useMemo } from 'react';
import 'server-only';

interface Props {
	level: 2 | 3 | 4;
	children: ReactNode;
	style?: CSSProperties | undefined;
	sr?: boolean;
	className?: string;
}

export default function Heading({ level, children, sr, style: inlineStyles, className: providedClass }: Props) {
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

	const className = useMemo(() => {
		const arr = new Array<string>();
		if (providedClass && providedClass.length) {
			arr.push(providedClass);
		}
		if (sr === true) {
			arr.push('sr');
		}
		return clsx(arr);
	}, [providedClass, sr]);

	const props = useMemo(
		() => ({
			style: inlineStyles || {},
			className
		}),
		[inlineStyles]
	);

	return createElement(heading, props, children);
}

Heading.defaultProps = {
	sr: false,
	style: undefined
};
