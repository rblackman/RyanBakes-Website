import assertUnreachable from 'helpers/assertUnreachable';
import 'server-only';
import type { InlineImage, RecipePreview, SanityKeyed, TextSection } from 'types/sanity-schema';
import TextSectionComponent from './(blockTypes)/textSection';

interface Props {
	content: SanityKeyed<InlineImage> | SanityKeyed<TextSection> | SanityKeyed<RecipePreview>;
}

export default function Block({ content }: Props) {
	const { _type: type } = content;
	switch (type) {
		case 'inlineImage':
			return <p>IMG</p>;
		case 'textSection':
			return <TextSectionComponent value={content as TextSection} />;
		case 'recipePreview':
			return <p>RECIPE PREVIEW</p>;
		default:
			assertUnreachable(type);
	}
	return null;
}
