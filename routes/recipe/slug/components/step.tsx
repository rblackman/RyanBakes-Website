import { Ingredient as IngredientType, Step as SanityStep } from '@ryan-blackman/ryan-bakes-cms';
import { SanityKeyed } from 'sanity-codegen';
import styled from 'styled-components';
import Block from '../../../../components/generic/blockContent/block';
import Heading from '../../../../components/generic/heading';
import baseSpacing from '../../../../helpers/styled-components/baseSpacing';
import bgAlt from '../../../../helpers/styled-components/bgAlt';
import IngredientAmount from './ingredientAmount';

interface Props {
	ingredients: Array<SanityKeyed<IngredientType>>;
	step: SanityKeyed<SanityStep>;
}

const StepWrap = styled.div`
	padding: ${baseSpacing(2)} ${baseSpacing()};
	display: grid;
	grid-template-columns: clamp(10vw, 20rem, 50vw) 1fr;
	grid-template-rows: 1fr;
	grid-template-areas: 'ing step';
	grid-gap: ${baseSpacing(2)};
	align-items: center;

	&:nth-of-type(even) {
		${bgAlt};
	}
`;

const IngredientsWrap = styled.ul`
	list-style: none;
	padding: 0;
	grid-area: ing;

	margin-right: ${baseSpacing()};

	li {
		line-height: 1.25;
		font-size: 0.75em;
	}
`;

const DirectionsWrap = styled.div`
	grid-area: step;
	p:last-of-type {
		margin-bottom: 0;
	}
`;

export default function Step({ ingredients, step: { title, content } }: Props) {
	return (
		<StepWrap role="listitem">
			{ingredients && ingredients.length > 0 && (
				<IngredientsWrap>
					{ingredients.map(({ _key, name, amount, unit }) => (
						<li key={_key}>
							<IngredientAmount amount={amount} unit={unit} /> {name}
						</li>
					))}
				</IngredientsWrap>
			)}
			<DirectionsWrap>
				<Heading level={3} style={{ margin: 0 }}>
					{title}
				</Heading>
				{content.map(({ _key, ...block }) => {
					return <Block key={_key} block={block} />;
				})}
			</DirectionsWrap>
		</StepWrap>
	);
}
