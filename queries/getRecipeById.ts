import { Recipe } from '@ryan-blackman/ryan-bakes-cms';
import 'server-only';
import Query from 'types/query';
import buildGroqQuery from './buildGroqQuery';

export default async function getRecipeById(id: string): Promise<Recipe> {
	if (!id || id.length === 0) {
		throw new Error('Must provide an id');
	}

	const url = buildGroqQuery(`*[ _type == 'recipe' && _id == '${id}' ]`);

	const response = await fetch(url);
	const { status, statusText } = response;

	if (status !== 200) {
		throw new Error(`Got a ${status} response: ${statusText}`);
	}

	const { result } = (await response.json()) as Query<Recipe>;

	if (result.length === 0) {
		throw new Error(`Could not find recipe with id: ${id}`);
	}

	if (result.length > 1) {
		console.warn(`Got more than one recipe with id ${id}. Using the first.`, { id, result });
	}

	return result[0];
}
