import Theme from '../../types/theme';

export default function createRule({
	theme: {
		breakpoints: {
			mobile: {
				maxWidth: mMw,
				heroAspectRatio: { w: mw, h: mh }
			},
			tablet: {
				maxWidth: tMw,
				heroAspectRatio: { w: tw, h: th }
			},
			desktop: {
				maxWidth: dMw,
				heroAspectRatio: { w: dw, h: dh }
			},
			largeDesktop: {
				heroAspectRatio: { w: ldw, h: ldh }
			}
		}
	}
}: {
	theme: Theme;
}) {
	return `
		aspect-ratio: ${ldw} / ${ldh};

		@media (max-width: ${dMw}px) {
			aspect-ratio: ${dw} / ${dh};
		}

		@media (max-width: ${tMw}px) {
			aspect-ratio: ${tw} / ${th};
		}

		@media (max-width: ${mMw}px) {
			aspect-ratio: ${mw} / ${mh};
		}
	`;
}
