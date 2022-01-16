import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { getDataHooksProps } from 'next-data-hooks';
import TagComponent from '../../routes/tags/tag/components/tag';
import sanityClient from '../../sanity/sanityClient';

export const config = { amp: false };

export default function Tag() {
	return <TagComponent />;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const tagResults = await sanityClient.query<{ tags: string[]; _id: string }>('*[ _type == "recipe" ]{_id, tags}');

	// get all tags and flatten making sure they are unique
	// replaces spaces with dashes
	const paths = tagResults
		.reduce((acc, { tags: innerTags }) => acc.concat(innerTags.filter((tag) => acc.indexOf(tag) === -1)), new Array<string>())
		.map((tag) => `/tags/${tag.replace(' ', '-')}`);

	return {
		paths,
		fallback: false
	};
};

type StaticProps = {
	nextDataHooks: {
		[k: string]: any;
	};
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context: GetStaticPropsContext) => {
	const dataHooksProps = await getDataHooksProps({
		context,
		dataHooks: TagComponent.dataHooks
	});

	return {
		props: {
			...dataHooksProps
		}
	};
};
