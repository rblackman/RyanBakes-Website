import { Unit as SanityUnit } from '@ryan-blackman/ryan-bakes-cms';
import { createDataHook, isServerSidePropsContext } from 'next-data-hooks';
import sanityClient from '../../../../sanity/sanityClient';

export default createDataHook<SanityUnit[]>('useUnits', async (context) => {
	if (isServerSidePropsContext(context)) {
		throw new Error('This hook is only intended to be used in getStaticProps');
	}

	const units = await sanityClient.getAll('unit');
	return units;
});
