import { Recipe } from '@ryan-blackman/ryan-bakes-cms';
import ImageCard from './imageCard';

interface Props {
	recipe: Recipe;
}

export default function RecipeMetadata({ recipe: { openGraphImage } }: Props) {
	return (
		<>
			<ImageCard image={openGraphImage} />
			{/* TODO: Add Schema Data: https://developers.google.com/search/docs/advanced/structured-data/recipe */}
		</>
	);
}
