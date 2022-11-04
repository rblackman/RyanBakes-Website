import { Recipe } from '@ryan-blackman/ryan-bakes-cms';
import 'server-only';
import Query from 'types/query';
import buildGroqQuery from './buildGroqQuery';

export default async function getRecipesByRecent(count: number = 10): Promise<Query<Recipe>> {
	const url = buildGroqQuery(`*[ _type == 'recipe' ] | order(_createdAt desc) [0...${count}]`);
	const response = await fetch(url);
	return response.json();
}
