import FeaturedRecipe from "@components/features/recipe/featured-recipe";
import Heading from "@components/ui/heading";
import buildCanonicalUrl from "@helpers/build-canonical-url";
import resolveParams from "@helpers/resolve-params";
import getRecipesByTag from "@queries/live/getRecipesByTag";
import getAllTags from "@queries/static/getAllTags";
import type { Recipe } from "@ryan-bakes/sanity-types";
import type { Metadata } from "next";
import "server-only";
import SecondaryFeaturedRecipes from "../../recipe/features/secondary-featured-recipes";

type RouteParams = Readonly<{ slug: string }>;

export type Props = Readonly<{
	params: RouteParams | Promise<RouteParams>;
}>;

function formatTagTitle(slug: string): string {
	return slug
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await resolveParams(params);

	// convert slug to title case for metadata
	// replace - with spaces
	const title = formatTagTitle(slug);

	const description = `Recipes tagged with "${title}"`;
	const canonical = buildCanonicalUrl(`/tags/${slug}`);

	return {
		title,
		description,
		alternates: canonical ? { canonical } : undefined,
		keywords: [slug],
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

export default async function Tag({ params }: Props) {
	const { slug } = await resolveParams(params);
	const tagTitle = formatTagTitle(slug);

	const recipes = await getRecipesByTag(slug);

	const featuredRecipe = recipes[0];
	const secondaryRecipes = recipes
		.slice(1)
		.map((recipe, index): { recipe: Recipe; index: number } => ({ recipe, index }));

	return (
		<main>
			<div className="content">
				<Heading level={2}>Tag: {tagTitle}</Heading>

				{recipes.length > 0 ? (
					<>
						<FeaturedRecipe recipe={featuredRecipe} priority large />
						{secondaryRecipes.length > 0 && <SecondaryFeaturedRecipes recipes={secondaryRecipes} />}
					</>
				) : (
					<p>No recipes available for this tag yet.</p>
				)}
			</div>
		</main>
	);
}

export async function generateStaticParams(): Promise<RouteParams[]> {
	const tags = await getAllTags();
	return tags.map((slug) => ({ slug }));
}
