import getRecipeById from 'queries/getRecipeById';
import getSiteConfig from 'queries/getSiteConfig';
import { use } from 'react';
import 'server-only';

export default function Head({ params: { slug: id } }: { params: { slug: string } }) {
	const { title: siteTitle } = use(getSiteConfig());
	const { title: recipeTitle } = use(getRecipeById(id));

	const combinedTitle = `${siteTitle} | ${recipeTitle}`;

	return (
		<>
			<title>{combinedTitle}</title>
		</>
	);
}
