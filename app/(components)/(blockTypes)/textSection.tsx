import type { TextSection } from '@ryan-blackman/ryan-bakes-cms';
import PortableText from '../portableText';

export interface Props {
	value: TextSection;
}

export default function TextSection({ value: { text } }: Props) {
	return <PortableText value={text} />;
}
