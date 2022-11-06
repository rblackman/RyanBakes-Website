import { Recipe } from '@ryan-blackman/ryan-bakes-cms';
import 'server-only';
import Query from 'types/query';
import buildGroqQuery from './lib/buildGroqQuery';
import nextFetch from './lib/nextFetch';

export default async function getRecipesByTag(tag: string): Promise<Query<Recipe>> {
	const url = buildGroqQuery(`*[ _type == 'recipe' && '${tag}' in tags[]]`);
	const response = await nextFetch(url);
	return response.json();
}
