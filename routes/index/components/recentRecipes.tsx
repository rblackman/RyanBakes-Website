import Link from 'next/link';
import Heading from '../../../components/generic/heading';
import userRecentRecipes from '../hooks/userRecentRecipes';

export default function RecentRecipes() {
	const recent = userRecentRecipes();

	return (
		<>
			<Heading level={2}>Recent Recipes</Heading>
			<ul>
				{recent
					.filter(({ slug: { current } }) => current && current.length > 0)
					.map(({ _id, title, slug: { current } }) => (
						<li key={_id}>
							<Link href={`/recipe/${current}`}>{title}</Link>
						</li>
					))}
			</ul>
		</>
	);
}

RecentRecipes.dataHooks = [userRecentRecipes];
