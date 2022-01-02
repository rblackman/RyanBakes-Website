import { ImageWithAlt } from '@ryan-blackman/ryan-bakes-cms';
import { ReactNode } from 'react';
import styled from 'styled-components';
import baseSpacing from '../../helpers/styled-components/baseSpacing';
import responsiveAspectRatio from '../../helpers/styled-components/responsiveAspectRatio';
import themeColor from '../../helpers/styled-components/themeColor';
import useHeroImage from '../../hooks/useHeroImage';
import Theme from '../../types/theme';

interface Props {
	image: ImageWithAlt;
	title: ReactNode;
	subTitle?: ReactNode | undefined;
}

const HeroContainer = styled.div`
	width: 100%;
	${responsiveAspectRatio}
	// force to be full width and not go beyond device height
	max-height: 100vh;
	min-width: 100%;
	overflow: hidden;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	display: grid;
	place-content: end start;
`;

const HeadingWrap = styled.div`
	${themeColor((t) => t.colors.primary, 'dd')}
	padding: ${baseSpacing(1)} ${baseSpacing(4)};
	max-width: 90vw;
	backdrop-filter: blur(5px);
	margin: 0 0 ${baseSpacing()};

	@media (min-width: ${({ theme }: { theme: Theme }) => theme.breakpoints.tablet.maxWidth + 1}px) {
		padding: ${baseSpacing(1)} ${baseSpacing(6)};
	}
`;

const Heading = styled.h1`
	font-size: 2rem;

	@media (min-width: ${({ theme }: { theme: Theme }) => theme.breakpoints.tablet.maxWidth + 1}px) {
		font-size: 4rem;
	}
`;
const SubHeading = styled.div`
	margin: 0;
`;

export default function Hero({ title, subTitle, image }: Props) {
	const backgroundImage = useHeroImage(image);

	return (
		<HeroContainer style={{ backgroundImage }}>
			<HeadingWrap>
				<Heading>{title}</Heading>
				{subTitle && <SubHeading>{subTitle}</SubHeading>}
			</HeadingWrap>
		</HeroContainer>
	);
}

Hero.defaultProps = {
	subTitle: undefined
};
