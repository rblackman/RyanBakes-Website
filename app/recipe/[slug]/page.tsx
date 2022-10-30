import getAllRecipeIds from 'queries/getAllRecipeIds';
import Commentary from './(components)/commentary';
import Ingredients from './(components)/ingredients';
import Steps from './(components)/steps';
import Tags from './(components)/tags';

export interface Props {
	params: { slug: string };
}

export default function Page(props: Props) {
	return (
		<main>
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
	const ids = await getAllRecipeIds();
	return ids.map((slug) => ({ slug }));
}
