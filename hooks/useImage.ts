import sanityClient from '@sanity/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import isProduction from 'helpers/isProduction';
import { useNextSanityImage, UseNextSanityImageOptions } from 'next-sanity-image';
import { useMemo } from 'react';
import 'server-only';

export default function useImage(
	image: SanityImageSource,
	options?: UseNextSanityImageOptions & {
		enableBlurUp?: true;
	}
) {
	const client = useMemo(
		() =>
			sanityClient({
				projectId: process.env.SITE_CONFIG_KEY,
				dataset: process.env.SANITY_DATASET,
				useCdn: isProduction()
			}),
		[]
	);

	return useNextSanityImage(client, image, options);
}
