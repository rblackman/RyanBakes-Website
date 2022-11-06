import Heading from 'app/(components)/heading';
import Link from 'next/link';
import getAllTags from 'queries/getAllTags';
import getRecipesByTag from 'queries/getRecipesByTag';
import { use } from 'react';
import 'server-only';

export interface Props {
	params: { slug: string };
}

export default function Tag({ params: { slug } }: Props) {
	const { result: recipes } = use(getRecipesByTag(slug));
	return (
		<>
			<Heading level={3}>Tag: {slug}</Heading>

			<Heading level={4} sr>
				Recipes
			</Heading>
			<ul>
				{recipes.map(({ _id: id, title, slug: { current: slug } }) => (
					<li>
						<Link key={id} href={`/recipe/${slug}`}>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export async function generateStaticParams() {
	const tags = await getAllTags();
	return tags.map((slug) => ({ slug }));
}
