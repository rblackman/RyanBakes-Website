import { createGlobalStyle } from 'styled-components';
import baseSpacing from '../helpers/styled-components/baseSpacing';

export default createGlobalStyle`
* {
	box-sizing: border-box;
	margin: 0;
}

html {
	font-size: ${({ theme }) => theme.typography.baseFontSize}px;
}

body {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	font-family: ${({ theme }) => theme.typography.fontFamily};
	line-height: ${({ theme }) => theme.typography.baseLineHeight};
	color: ${({ theme }) => theme.colors.primary.text};
	background: ${({ theme }) => theme.colors.primary.background};
}

:is(h1, h2, h3) {
	line-height: 1.2;
}

:is(h1, h2, h3):not(:first-child) {
	margin-top: ${baseSpacing(3)};
}

article * + * {
	margin-top: ${baseSpacing()};
}

header, .content, footer {
	max-width: clamp(0px, 90vw, ${({ theme }) => theme.sizes.maxContentWidth}px);
	margin: 0 auto;
}

.content {
	padding: clamp(${baseSpacing(2)}, ${baseSpacing(2)}, 50vh) clamp(${baseSpacing()}, 5vw, ${baseSpacing(3)}) ${baseSpacing(6)};
	min-height: 100vh;

	@media only screen and (max-width: 660px){
		padding: clamp(2vh, ${baseSpacing(2)}, 50vh) clamp(${baseSpacing(0.5)}, 1vw, ${baseSpacing(3)}) ${baseSpacing(3)};
	}
}

header, footer{
	padding: 0 clamp(${baseSpacing()}, 5vw, ${baseSpacing(3)});
}


a {
	text-underline-offset: 0.15em;
}

p {
	line-height: ${({ theme }) => theme.typography.baseLineHeight};
	margin: 0 0 ${baseSpacing()} 0;
	max-width: 75ch;
}
`;
