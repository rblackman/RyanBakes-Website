import { Ingredient as IngredientType, Step as SanityStep } from '@ryan-blackman/ryan-bakes-cms';
import { SanityKeyed } from 'sanity-codegen';
import styled from 'styled-components';

interface Props {
	ingredients: Array<SanityKeyed<IngredientType>>;
	step: SanityKeyed<SanityStep>;
}

const IngredientsWrap = styled.ul`
	grid-column: 1 / span 1;
	grid-row: auto;
	list-style: none;
	padding: 0;
	font-size: 0.75em;
`;

const DirectionsWrap = styled.div`
	grid-column: 2 / span 1;
	grid-row: auto;
`;

export default function Step({ ingredients, step: { title } }: Props) {
	return (
		<>
			{ingredients && ingredients.length > 0 && (
				<IngredientsWrap>
					{ingredients.map(({ _key, name }) => (
						<li key={_key}>{name}</li>
					))}
				</IngredientsWrap>
			)}
			<DirectionsWrap role="listitem">
				<h3>{title}</h3>
			</DirectionsWrap>
		</>
	);
}
