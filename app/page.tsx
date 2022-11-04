import Link from 'next/link';
import getAllTags from 'queries/getAllTags';
import { use } from 'react';
import 'server-only';
import getRecipesByRecent from '../queries/getRecipesByRecent';

export default function Page() {
	const { result: recipes } = use(getRecipesByRecent());

	return (
		<ul>
			{recipes.map(({ slug: { current: slug }, title }) => (
				<li key={slug}>
					<Link href={`/recipe/${slug}`}>{title}</Link>
				</li>
			))}
		</ul>
	);
}

export async function generateStaticParams() {
	const tags = await getAllTags();
	return tags;
}
