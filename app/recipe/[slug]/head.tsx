import useImageBuilder from 'hooks/useImageBuilder';
import getRecipeBySlug from 'queries/getRecipeBySlug';
import getSiteConfig from 'queries/getSiteConfig';
import { use, useMemo } from 'react';
import 'server-only';

export default function Head({ params: { slug } }: { params: { slug: string } }) {
	const { title: siteTitle } = use(getSiteConfig());
	const {
		title: recipeTitle,
		description,
		tags,
		_createdAt: created,
		_updatedAt: updated,
		openGraphImage: { asset }
	} = use(getRecipeBySlug(slug));
	const keywords = useMemo(() => tags.join(','), [tags]);

	const combinedTitle = `${siteTitle} | ${recipeTitle}`;
	const ogImage = useImageBuilder(asset).buildUrlWithOptions({
		width: 1200,
		height: 627,
		quality: 0.6
	});
	return (
		<>
			<title>{combinedTitle}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="og:title" content={recipeTitle} />
			<meta name="og:type" content="article" />
			<meta name="article:published_time" content={created} />
			<meta name="article:modified_time" content={updated} />
			{tags.map((tag) => (
				<meta name="article:tag" content={tag} key={tag} />
			))}
			<meta property="og:image" content={ogImage} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="627" />
		</>
	);
}
