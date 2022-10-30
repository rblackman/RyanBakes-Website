import Heading from 'app/(components)/heading';
import getRecipeById from 'queries/getRecipeById';
import { use, useCallback } from 'react';
import { Props } from '../page';
import Step from './step';

export default function Steps({ params: { slug: id } }: Props) {
	const { ingredients, steps } = use(getRecipeById(id));

	if (!(ingredients && steps)) {
		return null;
	}

	const getIngredientsForIndex = useCallback(
		(index: number) => {
			return ingredients.filter(({ usedInSteps }) => (usedInSteps?.indexOf(index + 1) ?? -1) > -1);
		},
		[ingredients]
	);

	return (
		<>
			<Heading level={2}>Instructions</Heading>
			<div role="list">
				{steps.map((step, i) => (
					<Step key={step._key} step={step} ingredients={getIngredientsForIndex(i)} />
				))}
			</div>
		</>
	);
}
