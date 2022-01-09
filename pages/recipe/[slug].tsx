import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { getDataHooksProps } from 'next-data-hooks';
import Recipe from '../../routes/recipe/slug/components/recipe';
import sanityClient from '../../sanity/sanityClient';

export const config = { amp: true };

export default function Slug() {
	return <Recipe />;
}

type StaticProps = {
	nextDataHooks: {
		[k: string]: any;
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const recipes = await sanityClient.getAll('recipe');
	const paths = recipes
		.map(({ slug: { current } }) => current)
		.filter((slug) => slug && slug.length > 0)
		.map((slug) => `/recipe/${slug}`);

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context: GetStaticPropsContext) => {
	const dataHooksProps = await getDataHooksProps({
		context,
		dataHooks: Recipe.dataHooks
	});

	return {
		props: {
			...dataHooksProps
		},
		revalidate: 60 * 60 * 12 // 12 hours
	};
};
