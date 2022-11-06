import Heading from 'app/(components)/heading';
import 'server-only';
import styles from './(styles)/secondaryFeaturedRecipes.module.css';
import SecondaryFeaturedRecipe from './secondaryFeaturedRecipe';

interface Props {
	ids: string[];
}

export default function SecondaryFeaturedRecipes({ ids }: Props) {
	return null;

	return (
		<>
			<Heading level={3} sr>
				Other Recipes
			</Heading>
			<div className={styles.otherStyles}>
				{ids.map((id) => (
					<SecondaryFeaturedRecipe key={id} id={id} />
				))}
			</div>
		</>
	);
}
