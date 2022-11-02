import Heading from 'app/(components)/heading';
import getRecipeBySlug from 'queries/getRecipeBySlug';
import { use, useCallback } from 'react';
import { Props } from '../page';
import Step from './step';

export default function Steps({ params: { slug } }: Props) {
	const { ingredients, steps } = use(getRecipeBySlug(slug));

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
