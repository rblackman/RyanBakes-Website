'use client';
import { ImageWithAlt } from '@ryan-blackman/ryan-bakes-cms';
import useImageBuilder from 'hooks/useImageBuilder';
import NextImage, { ImageLoaderProps } from 'next/image';
import { useCallback, useMemo } from 'react';
import styles from './(styles)/image.module.css';

interface OptionalBaseProps {
	quality: number;
	blur: number;
	crop: 'top,left' | 'top,right' | 'bottom,left' | 'bottom,right' | 'center' | 'focalpoint' | 'entropy';
	fit: 'clip' | 'crop' | 'fill' | 'fillmax' | 'max' | 'scale' | 'min';
}

interface BaseProps extends OptionalBaseProps {
	image: ImageWithAlt;
	width: number;
}

interface FixedWidthProps extends BaseProps {
	height: number;
}

interface AspectRatioProps extends BaseProps {
	aspectRatio: number;
}

type Props = FixedWidthProps | AspectRatioProps;

function isFixedWidth(props: Props): props is FixedWidthProps {
	const height = (props as FixedWidthProps)?.height;
	if (typeof height === 'number') {
		return true;
	}
	return false;
}

export default function Image(props: Props) {
	const {
		image: { asset, alt, emptyAlt },
		width: baseWidth,
		quality: providedQuality,
		blur,
		crop,
		fit
	} = props;

	const { baseUrl, buildUrlWithOptions } = useImageBuilder(asset);

	// calculate height using either provided height or setting the aspect ratio
	const baseHeight = useMemo(() => (isFixedWidth(props) ? props.height : Math.round(baseWidth / props.aspectRatio)), [baseWidth, isFixedWidth, props]);

	// regardless of if we provide an explicit height, we want to set an aspect ratio for CSS
	const aspectRatio = useMemo(() => baseWidth / baseHeight, [baseWidth, baseHeight]);

	// loader function
	// respect values passed in, but request a specific image width and height
	const loader = useCallback(
		({ width, quality }: ImageLoaderProps) => {
			const factor = width / baseWidth;
			return buildUrlWithOptions({
				blur,
				crop,
				fit,
				width: Math.round(baseWidth * factor),
				height: Math.round(baseHeight * factor),
				quality: (providedQuality ?? quality ?? 75) / 100
			});
		},
		[buildUrlWithOptions, baseWidth, baseHeight]
	);

	// outer div is the container for our image
	// it gets an aspect ratio and width.
	// then the image is set to fill the container
	return (
		<div className={styles.image} style={{ width: baseWidth, aspectRatio: aspectRatio }}>
			<NextImage src={baseUrl} loader={loader} fill alt={emptyAlt || !alt ? '' : alt} sizes={`(max-width: ${baseWidth}px) 100vw, ${baseWidth}px`} />
		</div>
	);
}
