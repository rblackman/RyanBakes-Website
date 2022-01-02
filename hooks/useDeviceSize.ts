import { useCallback, useEffect, useState } from 'react';
import Theme from '../styles/theme';
import useWindowSize from './useWindowSize';

type Size = 'mobile' | 'tablet' | 'desktop' | 'large-desktop' | undefined;

export default function useDeviceSize(): Size {
	const { width } = useWindowSize();

	const {
		breakpoints: {
			mobile: { maxWidth: mobile },
			tablet: { maxWidth: tablet },
			desktop: { maxWidth: desktop }
		}
	} = Theme;

	const calculateSize = useCallback(
		(w: number | undefined) => {
			if (!w) {
				return undefined;
			}

			if (w < mobile) {
				return 'mobile';
			}

			if (w < tablet) {
				return 'tablet';
			}

			if (w < desktop) {
				return 'desktop';
			}
			return 'large-desktop';
		},
		[desktop, mobile, tablet]
	);

	const [sizeState, setSizeState] = useState<Size>(calculateSize(width));
	useEffect(() => {
		setSizeState(calculateSize(width));
	}, [calculateSize, width]);

	return sizeState;
}
