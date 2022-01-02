import { Recipe as RecipeType } from '@ryan-blackman/ryan-bakes-cms';
import { createDataHook, isServerSidePropsContext } from 'next-data-hooks';
import Hero from '../../../../components/generic/hero';
import ApplicationPage from '../../../../components/shared/applicatonPage';
import sanityClient from '../../../../sanity/sanityClient';

export const useRecipe = createDataHook<RecipeType>('useRecipe', async (context) => {
	if (isServerSidePropsContext(context)) {
		throw new Error('This hook is only intended to be used in getStaticProps');
	}

	const { params } = context;
	const slug = params?.slug as string | undefined;

	if (slug === undefined) {
		throw new Error('Could not get slug from params');
	}
	const matches = await sanityClient.query<RecipeType & { _type: 'recipe' }>(`*[ _type == 'recipe' && slug.current == '${slug}']`);

	if (matches.length === 0) {
		throw new Error(`Could not find recipe with slug: '${slug}'`);
	}

	return matches[0];
});

function Recipe() {
	const recipe = useRecipe();
	const { title, picture } = recipe;
	return (
		<ApplicationPage page={recipe} hero={<Hero title={title} image={picture} />}>
			<p>Foo</p>
		</ApplicationPage>
	);
}

Recipe.dataHooks = [useRecipe, ...ApplicationPage.dataHooks];

export default Recipe;
