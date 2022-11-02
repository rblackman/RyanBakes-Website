import { Recipe } from '@ryan-blackman/ryan-bakes-cms';
import Distinct from 'helpers/distinct';
import 'server-only';
import Query from 'types/query';
import buildGroqQuery from './buildGroqQuery';

export default async function getAllTags(): Promise<string[]> {
	const url = buildGroqQuery(`*[ _type == 'recipe' ]{ tags }`);
	const response = await fetch(url);
	const { result } = (await response.json()) as Query<Pick<Recipe, 'tags'>>;
	return Distinct(result.reduce<string[]>((acc, { tags }) => acc.concat(tags), []));
}
