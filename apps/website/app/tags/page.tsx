import FeaturedRecipe from "@components/features/recipe/featured-recipe";
import Heading from "@components/ui/heading";
import PortableText from "@components/ui/portable-text";
import Tags from "@components/ui/tags";
import buildCanonicalUrl from "@helpers/build-canonical-url";
import getRecipesByTag from "@queries/live/getRecipesByTag";
import getTagsPage from "@queries/live/getTagsPage";
import getAllTags from "@queries/static/getAllTags";
import type { Recipe } from "@ryan-bakes/sanity-types";
import type { Metadata } from "next";
import Link from "next/link";
import "server-only";
import SecondaryFeaturedRecipes from "../recipe/features/secondary-featured-recipes";

function formatTagTitle(slug: string): string {
	return slug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

export async function generateMetadata(): Promise<Metadata> {
	const tagsPage = await getTagsPage();
	const title = tagsPage.title ?? "Tags";
	const featuredTag = tagsPage.featuredTag;
	const description = featuredTag ? `Browse recipes tagged with ${featuredTag} and more.` : "Browse all tags.";
	const canonical = buildCanonicalUrl("/tags");

	return {
		title,
		description,
		alternates: canonical ? { canonical } : undefined,
		openGraph: {
			title,
			description,
			...(canonical ? { url: canonical } : {}),
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
		},
	};
}

export default async function Page() {
	const [tagsPage, allTags] = await Promise.all([getTagsPage(), getAllTags()]);

	const title = tagsPage.title ?? "Tags";
	const intro = tagsPage.intro;
	const featuredTag = tagsPage.featuredTag;
	const secondaryFeature = tagsPage.secondaryFeature ?? [];

	const [featuredRecipes, ...secondaryRecipesPerTag] = await Promise.all([
		featuredTag ? getRecipesByTag(featuredTag) : Promise.resolve([]),
		...secondaryFeature.map((tag) => getRecipesByTag(tag)),
	]);

	const featuredRecipe = featuredRecipes[0];
	const hasTags = allTags.length > 0;

	return (
		<main>
			<div className="content">
				<Heading level={2}>{title}</Heading>

				{intro && (
					<div>
						<PortableText value={intro} />
					</div>
				)}

				{featuredTag && featuredRecipe && (
					<>
						<FeaturedRecipe recipe={featuredRecipe} priority large />
						<Link href={`/tags/${featuredTag}`}>See all {formatTagTitle(featuredTag)} recipes →</Link>
					</>
				)}

				{secondaryFeature.map((tag, i) => {
					const tagRecipes = secondaryRecipesPerTag[i] ?? [];
					if (tagRecipes.length === 0) {
						return null;
					}

					const slicedRecipes = tagRecipes
						.slice(0, 3)
						.map((recipe, index): { recipe: Recipe; index: number } => ({ recipe, index }));

					return (
						<section key={tag}>
							<Heading level={3}>
								<Link href={`/tags/${tag}`}>{formatTagTitle(tag)}</Link>
							</Heading>
							<SecondaryFeaturedRecipes recipes={slicedRecipes} />
						</section>
					);
				})}

				{hasTags ? <Tags tags={allTags} /> : <p>No tags available yet.</p>}
			</div>
		</main>
	);
}
