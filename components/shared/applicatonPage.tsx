import { SiteConfig } from '@ryan-blackman/ryan-bakes-cms';
import { createDataHook, isServerSidePropsContext } from 'next-data-hooks';
import { ReactNode } from 'react';
import sanityClient from '../../sanity/sanityClient';
import Metadata, { AcceptedPages } from './metadata/metadata';

const siteConfigId = process.env.SITE_CONFIG_KEY ?? 'siteConfig';

export const useSiteConfig = createDataHook<SiteConfig>(siteConfigId, async (context) => {
	if (isServerSidePropsContext(context)) {
		throw new Error('This hook is only intended to be used in getStaticProps');
	}

	const siteConfig = await sanityClient.get('siteConfig', siteConfigId);
	return siteConfig;
});

interface Props {
	children: ReactNode;
	hero?: ReactNode | undefined;
	page?: AcceptedPages;
}

function ApplicationPage({ page, hero, children }: Props) {
	const config = useSiteConfig();

	return (
		<>
			<Metadata config={config} page={page} />
			<main>
				{hero && <div className="hero-wrap">{hero}</div>}
				<div className="content">{children}</div>
			</main>
		</>
	);
}

ApplicationPage.defaultProps = {
	hero: undefined,
	page: undefined
};

ApplicationPage.dataHooks = [useSiteConfig];

export default ApplicationPage;
