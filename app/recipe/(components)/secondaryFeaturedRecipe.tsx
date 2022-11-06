import getRecipeById from 'queries/getRecipeById';
import { use } from 'react';
import 'server-only';

interface Props {
	id: string;
}

export default function SecondaryFeaturedRecipe({ id }: Props) {
	const { title } = use(getRecipeById(id));

	return <p>{title}</p>;
}
