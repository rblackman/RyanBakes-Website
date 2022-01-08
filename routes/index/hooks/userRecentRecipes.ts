import { Recipe as RecipeType } from '@ryan-blackman/ryan-bakes-cms';
import { createDataHook, isServerSidePropsContext } from 'next-data-hooks';
import sanityClient from '../../../sanity/sanityClient';

export default createDataHook<RecipeType[]>('userRecentRecipes', async (context) => {
	if (isServerSidePropsContext(context)) {
		throw new Error('This hook is only intended to be used in getStaticProps');
	}

	const matches = await sanityClient.query<RecipeType>('*[ _type == "recipe" ] | order(_createdAt desc) [0...10]');
	return matches;
});
