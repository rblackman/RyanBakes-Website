import { Recipe } from '@ryan-blackman/ryan-bakes-cms';
import 'server-only';
import Query from 'types/query';
import buildGroqQuery from './buildGroqQuery';

export default async function getAllRecipeIds(): Promise<string[]> {
	const url = buildGroqQuery(`*[ _type == 'recipe' ] { _id}`);
	const response = await fetch(url);
	var { result } = (await response.json()) as Query<Pick<Recipe, '_id'>>;
	const ids = result.map(({ _id: id }) => id);
	console.log('response', ids);
	return ids;
}
