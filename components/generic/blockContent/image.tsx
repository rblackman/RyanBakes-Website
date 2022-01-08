/* eslint-disable react/jsx-props-no-spreading */
import { InlineImage } from '@ryan-blackman/ryan-bakes-cms';
import { useMemo } from 'react';
import NextImage from '../sanityImage';

interface Props {
	block: InlineImage;
}

export default function Image({ block: { size, position, aspectRatio: ar, asset, alt, emptyAlt } }: Props) {
	const width = useMemo(() => {
		switch (size) {
			case 'Medium':
				return 450;
			case 'Small':
			default:
				return 880;
		}
	}, [size]);

	const height = useMemo(() => {
		if (ar) {
			return null;
		}
		return width * 0.75;
	}, [ar, width]);

	const aspectRatio = ar || '3/4';
	const other = height ? { height } : { aspectRatio };
	return (
		<div className={position.toLocaleLowerCase()}>
			<NextImage src={asset} width={width} layout="responsive" alt={alt} emptyAlt={emptyAlt || false} {...other} />;
		</div>
	);
}
