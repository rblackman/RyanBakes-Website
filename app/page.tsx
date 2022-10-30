import Link from 'next/link';
import { use } from 'react';
import getRecipesByRecent from '../queries/getRecipesByRecent';

export default function Page() {
	const { result: recipes } = use(getRecipesByRecent());

	return (
		<ul>
			{recipes.map(({ _id: id, title }) => (
				<li key={id}>
					<Link href={`/recipe/${id}`}>{title}</Link>
				</li>
			))}
		</ul>
	);
}
