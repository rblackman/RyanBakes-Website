import { Recipe as RecipeType } from '@ryan-blackman/ryan-bakes-cms';
import { createDataHook, isServerSidePropsContext } from 'next-data-hooks';
import sanityClient from '../../../../sanity/sanityClient';

export default createDataHook<{ tagName: string; recipes: RecipeType[] }>('useTag', async (context) => {
	if (isServerSidePropsContext(context)) {
		throw new Error('This hook is only intended to be used in getStaticProps');
	}

	const { params } = context;
	const tagName = params?.tag as string | undefined;

	if (tagName === undefined) {
		throw new Error('Could not get slug from params');
	}

	const recipes = await sanityClient.query<RecipeType & { _type: 'recipe' }>(`*[ _type == 'recipe' && ('${tagName}' in tags) ]`);

	return { tagName, recipes };
});
