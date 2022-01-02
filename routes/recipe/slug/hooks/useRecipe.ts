import { Recipe as RecipeType } from '@ryan-blackman/ryan-bakes-cms';
import { createDataHook, isServerSidePropsContext } from 'next-data-hooks';
import sanityClient from '../../../../sanity/sanityClient';

export default createDataHook<RecipeType>('useRecipe', async (context) => {
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
