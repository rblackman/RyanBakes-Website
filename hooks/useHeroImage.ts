import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useMemo } from 'react';
import urlFor from '../sanity/urlFor';
import Theme from '../styles/theme';
import useDeviceSize from './useDeviceSize';

export default function useHeroImage(src: SanityImageSource) {
	const deviceSize = useDeviceSize();

	const {
		breakpoints: {
			mobile: {
				maxWidth: mmw,
				heroAspectRatio: { w: mw, h: mh }
			},
			tablet: {
				maxWidth: tmw,
				heroAspectRatio: { w: tw, h: th }
			},
			desktop: {
				maxWidth: dmw,
				heroAspectRatio: { w: dw, h: dh }
			},
			largeDesktop: {
				maxWidth: ldmw,
				heroAspectRatio: { w: ldw, h: ldh }
			}
		}
	} = Theme;

	const imageWidth = useMemo(() => {
		if (deviceSize === 'mobile') {
			return mmw;
		}
		if (deviceSize === 'tablet') {
			return tmw;
		}
		if (deviceSize === 'desktop') {
			return dmw;
		}
		return ldmw;
	}, [deviceSize, dmw, mmw, tmw, ldmw]);

	const pixelRatio = useMemo(() => {
		if (typeof window === 'undefined') {
			return 1;
		}
		return Math.ceil(window.devicePixelRatio);
	}, []);

	const aspectRatio = useMemo(() => {
		if (deviceSize === 'mobile') {
			return mw / mh;
		}
		if (deviceSize === 'tablet') {
			return tw / th;
		}
		if (deviceSize === 'desktop') {
			return dw / dh;
		}
		return ldw / ldh;
	}, [deviceSize, dh, dw, ldh, ldw, mh, mw, th, tw]);

	const backgroundImage = useMemo(() => {
		const urlBuilder = urlFor(src);
		const url =
			urlBuilder
				.dpr(pixelRatio)
				.width(imageWidth)
				.height(Math.ceil(imageWidth / aspectRatio))
				.toString() ?? '';
		return `url(${url})`;
	}, [aspectRatio, imageWidth, pixelRatio, src]);

	return backgroundImage;
}
