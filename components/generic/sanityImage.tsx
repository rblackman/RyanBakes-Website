import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { ImageUrlBuilder, useNextSanityImage, UseNextSanityImageBuilderOptions } from 'next-sanity-image';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { basicClient } from '../../sanity/sanityClient';

interface BaseProps extends Omit<ImageProps, 'src' | 'width' | 'height' | 'alt' | 'layout'> {
	src: SanityImageSource;
	alt: string | undefined;
	emptyAlt: boolean;
	width: number;
	layout: 'fill' | 'fixed' | 'intrinsic' | 'responsive';
}

interface FixedProps extends BaseProps {
	height: number;
}

interface AspectProps extends BaseProps {
	aspectRatio: string;
}

type Props = FixedProps | AspectProps;

function isAspectProps(props: Props): props is AspectProps {
	return typeof (props as AspectProps)?.aspectRatio === 'string';
}

export default function SanityImage(props: Props) {
	const { src, alt: altText, emptyAlt, width, ...rest } = props;

	const alt = useMemo(() => {
		if (emptyAlt) {
			return '';
		}
		return altText;
	}, [altText, emptyAlt]);

	const calculatedAspectRatio = useMemo(() => {
		if (isAspectProps(props)) {
			const { aspectRatio } = props;
			const [w, h] = aspectRatio.trim().split('/');
			return parseInt(w, 10) / parseInt(h, 10);
		}
		const { height } = props;
		return width / height;
	}, [props, width]);

	const imageBuilder: (imageUrlBuilder: ImageUrlBuilder, options: UseNextSanityImageBuilderOptions) => ImageUrlBuilder = useCallback(
		(imageUrlBuilder, { width: rWidth }) => {
			const w = rWidth ?? width;
			const h = Math.round(w / calculatedAspectRatio);

			return imageUrlBuilder.width(w).height(h).format('webp');
		},
		[calculatedAspectRatio, width]
	);

	const imageProps = useNextSanityImage(basicClient, src, {
		imageBuilder
	});

	const combinedProps = {
		...rest,
		...imageProps
	};

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Image alt={alt} {...combinedProps} />;
}
