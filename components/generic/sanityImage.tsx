import { ImageWithAlt } from '@ryan-blackman/ryan-bakes-cms';
import { ImageUrlBuilder, useNextSanityImage, UseNextSanityImageBuilderOptions } from 'next-sanity-image';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { basicClient } from '../../sanity/sanityClient';

interface Props extends Omit<ImageProps, 'src' | 'width' | 'height' | 'alt' | 'layout'> {
	src: ImageWithAlt;
	width: number;
	height: number;
	layout: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
}

export default function SanityImage({ src, width, height, ...rest }: Props) {
	const { alt: altText, emptyAlt } = src;

	const alt = useMemo(() => {
		if (emptyAlt) {
			return '';
		}
		return altText;
	}, [altText, emptyAlt]);

	const aspectRatio = useMemo(() => width / height, [width, height]);

	const imageBuilder: (imageUrlBuilder: ImageUrlBuilder, options: UseNextSanityImageBuilderOptions) => ImageUrlBuilder = useCallback(
		(imageUrlBuilder, { width: rWidth }) => {
			const w = rWidth ?? width;
			const h = Math.round(w / aspectRatio);

			return imageUrlBuilder.width(w).height(h).format('webp');
		},
		[aspectRatio, width]
	);

	const imageProps = useNextSanityImage(basicClient, src, {
		imageBuilder
	});

	const props = {
		...rest,
		...imageProps
	};

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Image alt={alt} {...props} />;
}
