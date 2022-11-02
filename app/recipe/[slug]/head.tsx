import getRecipeBySlug from 'queries/getRecipeBySlug';
import getSiteConfig from 'queries/getSiteConfig';
import { use } from 'react';
import 'server-only';

export default function Head({ params: { slug } }: { params: { slug: string } }) {
	const { title: siteTitle } = use(getSiteConfig());
	const { title: recipeTitle } = use(getRecipeBySlug(slug));

	const combinedTitle = `${siteTitle} | ${recipeTitle}`;

	return (
		<>
			<title>{combinedTitle}</title>
		</>
	);
}
