import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { createImageUrlBuilder } from 'next-sanity';
import config from './sanityConfig';

const urlFor = (source: SanityImageSource) => createImageUrlBuilder(config).image(source);

export default urlFor;
