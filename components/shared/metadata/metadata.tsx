import { Recipe, SiteConfig } from '@ryan-blackman/ryan-bakes-cms';
import Head from 'next/head';
import { useMemo } from 'react';
import RecipeMetadata from './recipeMetadata';

export type AcceptedPages = Recipe | undefined;

interface Props {
	page: AcceptedPages;
	config: SiteConfig;
}

export function isRecipe(page: AcceptedPages): page is Recipe {
	if (page) {
		const { _type } = page;
		return _type === 'recipe';
	}
	return false;
}

export default function Metadata({ page, config: { title: siteTitle } }: Props) {
	const suffix = useMemo(() => {
		if (isRecipe(page)) {
			const { title: recipeTitle } = page;
			return ` | ${recipeTitle}`;
		}
		return '';
	}, [page]);

	return (
		<Head>
			<title>
				{siteTitle}
				{suffix}
			</title>
			{isRecipe(page) && <RecipeMetadata recipe={page} />}
		</Head>
	);
}
