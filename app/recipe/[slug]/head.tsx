import useImageBuilder from 'hooks/useImageBuilder';
import getRecipeBySlug from 'queries/getRecipeBySlug';
import getSiteConfig from 'queries/getSiteConfig';
import { use, useMemo } from 'react';
import 'server-only';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function Head({ params: { slug } }: { params: { slug: string } }) {
	const { title: siteTitle } = use(getSiteConfig());
	const {
		title: recipeTitle,
		description,
		tags,
		_createdAt: created,
		_updatedAt: updated,
		openGraphImage: { asset, alt }
	} = use(getRecipeBySlug(slug));

	const url = useMemo(() => `${baseUrl}/recipe/${slug}`, [slug]);
	const keywords = useMemo(() => tags.join(','), [tags]);

	const combinedTitle = `${siteTitle} | ${recipeTitle}`;
	const builder = useImageBuilder(asset);
	const ogImage = builder.buildUrlWithOptions({
		width: 1200,
		height: 627,
		quality: 0.6
	});

	const twitterImage = builder.buildUrlWithOptions({
		width: 4096,
		height: 2048,
		quality: 0.6
	});

	return (
		<>
			<title>{combinedTitle}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />

			<meta name="og:url" content={url} />
			<meta name="og:type" content="article" />
			<meta name="og:title" content={recipeTitle} />
			<meta name="og:description" content={description} />
			<meta property="og:image" content={ogImage} />
			<meta property="og:image:alt" content={alt} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="627" />
			<meta name="article:published_time" content={created} />
			<meta name="article:modified_time" content={updated} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="twitter:domain" content={baseUrl} />
			<meta property="twitter:url" content={url} />
			<meta name="twitter:title" content={recipeTitle} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={twitterImage} />
			<meta name="twitter:image:alt" content={alt} />

			{tags.map((tag) => (
				<meta name="article:tag" content={tag} key={tag} />
			))}
		</>
	);
}
