import Heading from '../../../../components/generic/heading';
import ApplicationPage from '../../../../components/shared/applicationPage';
import useTag from '../hooks/useTag';

function Tag() {
	const { tagName, recipes } = useTag();

	return (
		<ApplicationPage>
			<Heading level={1}>{tagName}</Heading>
			<ul>
				{recipes.map(({ _id, title, slug: { current } }) => (
					<li key={_id}>
						<a href={`/recipe/${current}`}>{title}</a>
					</li>
				))}
			</ul>
		</ApplicationPage>
	);
}

Tag.dataHooks = [useTag, ...ApplicationPage.dataHooks];

export default Tag;
