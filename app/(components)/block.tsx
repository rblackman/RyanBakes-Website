import type { InlineImage, SanityKeyed, TextSection } from '@ryan-blackman/ryan-bakes-cms';
import assertUnreachable from 'helpers/assertUnreachable';
import 'server-only';
import TextSectionComponent from './(blockTypes)/textSection';

interface Props {
	content: SanityKeyed<InlineImage> | SanityKeyed<TextSection>;
}

export default function Block({ content }: Props) {
	const { _type: type } = content;
	switch (type) {
		case 'inlineImage':
			return <p>IMG</p>;
		case 'textSection':
			return <TextSectionComponent value={content as TextSection} />;
		default:
			assertUnreachable(type);
	}
	return null;
}
