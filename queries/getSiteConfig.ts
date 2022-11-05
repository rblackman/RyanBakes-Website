import { SiteConfig } from '@ryan-blackman/ryan-bakes-cms';
import 'server-only';
import Query from 'types/query';
import buildGroqQuery from './buildGroqQuery';

const siteConfigKey = process.env.SITE_CONFIG_KEY;

export default async function getSiteConfig(): Promise<SiteConfig> {
	const url = buildGroqQuery(`*[ _id == '${siteConfigKey}' ]`);
	const response = await fetch(url);
	const { result } = (await response.json()) as Query<SiteConfig>;

	if (result.length === 0) {
		throw new Error(`Could not find a ${siteConfigKey}.`);
	}

	if (result.length > 1) {
		console.warn(`Got more than one ${siteConfigKey}. Using the first.`, { result });
	}

	return result[0];
}
