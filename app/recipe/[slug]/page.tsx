import getAllRecipeSlugs from 'queries/getAllRecipeSlugs';
import 'server-only';
import Commentary from './(components)/commentary';
import Hero from './(components)/hero';
import Ingredients from './(components)/ingredients';
import Steps from './(components)/steps';
import Tags from './(components)/tags';

export interface Props {
	params: { slug: string };
}

export default function Page(props: Props) {
	return (
		<main>
			<Hero {...props} />
			<div className="content">
				<Tags {...props} />
				<Commentary {...props} />
				<Ingredients {...props} />
				<Steps {...props} />
			</div>
		</main>
	);
}

export async function generateStaticParams() {
	const ids = await getAllRecipeSlugs();
	return ids.map((slug) => ({ slug }));
}
