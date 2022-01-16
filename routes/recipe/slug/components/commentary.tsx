import { PortableText as PortableTextType } from '@ryan-blackman/ryan-bakes-cms';
import styled from 'styled-components';
import PortableText from '../../../../sanity/portableText';

const IntroWrap = styled.div`
	p {
		font-size: 1.25em;
	}
`;

interface Props {
	text: PortableTextType;
}

export default function Commentary({ text }: Props) {
	return (
		<IntroWrap>
			<PortableText blocks={text} />
		</IntroWrap>
	);
}
