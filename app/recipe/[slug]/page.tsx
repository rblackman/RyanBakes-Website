import Tags from 'app/(components)/tags';
import getAllRecipeSlugs from 'queries/getAllRecipeSlugs';
import getRecipeBySlug from 'queries/getRecipeBySlug';
import { use } from 'react';
import 'server-only';
import BakeModeToggle from './(components)/bakeModeToggle';
import Commentary from './(components)/commentary';
import Hero from './(components)/hero';
import Ingredients from './(components)/ingredients';
import Steps from './(components)/steps';
export interface Props {
	params: { slug: string };
}

export default function Page(props: Props) {
	const {
		params: { slug }
	} = props;
	const { tags } = use(getRecipeBySlug(slug));

	return (
		<main>
			<Hero {...props} />
			<div className="content">
				<Tags tags={tags} />
				<Commentary {...props} />
				<BakeModeToggle />
				<Ingredients {...props} />
				<Steps {...props} />
			</div>
		</main>
	);
}

export async function generateStaticParams() {
	const ids = await getAllRecipeSlugs();
	return ids.map((slug) => ({ slug }));
}
