import { InlineImage, TextSection } from '@ryan-blackman/ryan-bakes-cms';
import assertUnreachable from '../../../helpers/assertUnreachable';
import ImageComponent from './image';
import TextComponent from './text';

interface Props {
	block: InlineImage | TextSection;
}

export default function Block({ block }: Props) {
	const { _type } = block;
	switch (_type) {
		case 'inlineImage':
			return <ImageComponent block={block as InlineImage} />;
		case 'textSection':
			return <TextComponent block={block as TextSection} />;
		default:
			console.warn('Failed to find switch type', { _type, block });
			assertUnreachable(_type);
	}
	return null;
}
