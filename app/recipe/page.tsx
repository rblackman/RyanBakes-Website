import FeaturedRecipe from 'app/(components)/featuredRecipe';
import Heading from 'app/(components)/heading';
import PortableText from 'app/(components)/portableText';
import getRecipesPage from 'queries/getRecipesPage';
import { use } from 'react';
import 'server-only';
import SecondaryFeaturedRecipes from './(components)/secondaryFeaturedRecipes';

export default function Page() {
	const {
		title,
		intro,
		featuredRecipe: { _ref: featuredId },
		secondaryFeatured
	} = use(getRecipesPage());

	return (
		<main>
			<div className="content">
				<Heading level={2}>{title}</Heading>
				<div>
					<PortableText value={intro} />
				</div>

				<FeaturedRecipe id={featuredId} />

				<SecondaryFeaturedRecipes ids={secondaryFeatured.map(({ _ref }) => _ref)} />
			</div>
		</main>
	);
}
