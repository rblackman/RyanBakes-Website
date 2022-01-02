import { SiteConfig } from '@ryan-blackman/ryan-bakes-cms';
import { createDataHook, isServerSidePropsContext } from 'next-data-hooks';
import sanityClient from '../../sanity/sanityClient';

const siteConfigId = process.env.SITE_CONFIG_KEY ?? 'siteConfig';

export default createDataHook<SiteConfig>(siteConfigId, async (context) => {
	if (isServerSidePropsContext(context)) {
		throw new Error('This hook is only intended to be used in getStaticProps');
	}

	const siteConfig = await sanityClient.get('siteConfig', siteConfigId);
	return siteConfig;
});
