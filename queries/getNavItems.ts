import 'server-only';
import Query from 'types/query';
import buildGroqQuery from './buildGroqQuery';

export interface NavItemQueryResult {
	id: string;
	name: string;
	pageInfo: {
		type: 'recipesPage' | 'tagsPage' | 'page';
		slug: { current: string } | null;
	};
}

export default async function getNavItems(): Promise<NavItemQueryResult[]> {
	const url = buildGroqQuery(`*[ _type == 'navItem' ] { 'id': _id, name, 'pageInfo': page->{ 'type': _type, slug } }`);
	const response = await fetch(url);
	var { result } = (await response.json()) as Query<NavItemQueryResult>;
	return result;
}
