import { TagsPage } from '@ryan-blackman/ryan-bakes-cms';
import 'server-only';
import Query from 'types/query';
import buildGroqQuery from './buildGroqQuery';

const tagsPageKey = process.env.TAGS_PAGE_KEY;

export default async function getTagsPage(): Promise<TagsPage> {
	const url = buildGroqQuery(`*[ _id == '${tagsPageKey}' ]`);
	const response = await fetch(url);
	const { result } = (await response.json()) as Query<TagsPage>;

	if (result.length === 0) {
		throw new Error(`Could not find a ${tagsPageKey}.`);
	}

	if (result.length > 1) {
		console.warn(`Got more than one ${tagsPageKey}. Using the first.`, { result });
	}

	return result[0];
}
