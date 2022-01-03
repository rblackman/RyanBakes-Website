import { Ingredient as IngredientType, Step as SanityStep } from '@ryan-blackman/ryan-bakes-cms';
import { useCallback } from 'react';
import { SanityKeyed } from 'sanity-codegen';
import styled from 'styled-components';
import baseSpacing from '../../../../helpers/styled-components/baseSpacing';
import sr from '../../../../helpers/styled-components/sr';
import Step from './step';

interface Props {
	ingredients: Array<SanityKeyed<IngredientType>>;
	steps: Array<SanityKeyed<SanityStep>>;
}

const StepsWrap = styled.div``;

const StepsHeading = styled.h2`
	${sr()}
`;

const StepList = styled.div`
	display: grid;
	grid-template-columns: 10rem 1fr;
	grid-gap: ${baseSpacing(2)} ${baseSpacing(1)};
`;

export default function Steps({ ingredients, steps }: Props) {
	const getIngredientsForIndex = useCallback(
		(index: number) => {
			return ingredients.filter(({ usedInSteps }) => (usedInSteps?.indexOf(index + 1) ?? -1) > -1);
		},
		[ingredients]
	);

	return (
		<StepsWrap>
			<StepsHeading>Steps</StepsHeading>
			<StepList role="list">
				{steps.map((step, i) => (
					<Step key={step._key} step={step} ingredients={getIngredientsForIndex(i)} />
				))}
			</StepList>
		</StepsWrap>
	);
}
