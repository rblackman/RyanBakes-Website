import getSiteConfig from 'queries/getSiteConfig';
import { use } from 'react';

export default function Head() {
	const { title: siteTitle } = use(getSiteConfig());

	return <title>{siteTitle}</title>;
}
