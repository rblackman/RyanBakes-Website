import { ImageWithAlt } from '@ryan-blackman/ryan-bakes-cms';
import { useMemo } from 'react';
import urlFor from '../../../sanity/urlFor';

interface Props {
	image: ImageWithAlt;
}

export default function ImageCard({ image: { asset, alt, emptyAlt } }: Props) {
	const urlBuilder = useMemo(() => {
		if (asset) {
			return urlFor(asset);
		}
		return null;
	}, [asset]);

	const ogImage = urlBuilder?.width(1200).height(630).url();
	const twitterImage = urlBuilder?.width(2048).height(2048).url();

	return (
		<>
			{ogImage && (
				<>
					<meta property="og:image" content={ogImage} />
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="630" />
					{!emptyAlt && <meta name="og:image:alt" content={alt} />}
				</>
			)}

			{twitterImage && (
				<>
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:image" content={twitterImage} />
				</>
			)}
		</>
	);
}
