import { createElement, CSSProperties, ReactNode, useMemo } from 'react';
import styled from 'styled-components';
import assertUnreachable from '../../helpers/assertUnreachable';
import baseSpacing from '../../helpers/styled-components/baseSpacing';
import srCss from '../../helpers/styled-components/sr';

interface Props {
	level: 1 | 2 | 3;
	children: ReactNode;
	style?: CSSProperties | undefined;
	sr?: boolean;
}

const Heading1 = styled.h1`
	font-size: 3rem;

	&.sr {
		${srCss}
	}
`;

const Heading2 = styled.h2`
	margin: 0 0 ${baseSpacing(2)}; // top margin set in global styles
	text-transform: uppercase;
	font-size: 2rem;
	font-weight: normal;
	&.sr {
		${srCss}
	}
`;

const Heading3 = styled.h3`
	margin: ${baseSpacing(0.5)} 0 ${baseSpacing(1)};
	font-size: 1.25rem;

	&.sr {
		${srCss}
	}
`;

export default function Heading({ level, children, sr, style }: Props) {
	const heading = useMemo(() => {
		switch (level) {
			case 1:
				return Heading1;
			case 2:
				return Heading2;
			case 3:
				return Heading3;
			default:
				assertUnreachable(level);
				return Heading1;
		}
	}, [level]);

	return createElement(heading, { className: sr === true ? 'sr' : '', style: style || {} }, children);
}

Heading.defaultProps = {
	sr: false,
	style: undefined
};
