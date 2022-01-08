import { TextSection } from '@ryan-blackman/ryan-bakes-cms';
import PortableText from '../../../sanity/portableText';

interface Props {
	block: TextSection;
}

export default function Text({ block: { text } }: Props) {
	return <PortableText blocks={text} />;
}
