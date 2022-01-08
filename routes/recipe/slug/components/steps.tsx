import { Ingredient as IngredientType, Step as SanityStep } from '@ryan-blackman/ryan-bakes-cms';
import { useCallback } from 'react';
import { SanityKeyed } from 'sanity-codegen';
import Heading from '../../../../components/generic/heading';
import Step from './step';

interface Props {
	ingredients: Array<SanityKeyed<IngredientType>>;
	steps: Array<SanityKeyed<SanityStep>>;
}

export default function Steps({ ingredients, steps }: Props) {
	const getIngredientsForIndex = useCallback(
		(index: number) => {
			return ingredients.filter(({ usedInSteps }) => (usedInSteps?.indexOf(index + 1) ?? -1) > -1);
		},
		[ingredients]
	);

	return (
		<>
			<Heading level={2}>Steps</Heading>
			<div role="list">
				{steps.map((step, i) => (
					<Step key={step._key} step={step} ingredients={getIngredientsForIndex(i)} />
				))}
			</div>
		</>
	);
}
