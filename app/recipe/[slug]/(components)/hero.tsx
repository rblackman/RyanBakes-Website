import useImageBuilder from 'hooks/useImageBuilder';
import getRecipeBySlug from 'queries/getRecipeBySlug';
import { CSSProperties, use, useMemo } from 'react';
import styles from '../(styles)/hero.module.css';
import { Props } from '../page';
import SubTitle from './subTitle';

export default function Hero({ params: { slug } }: Props) {
	const {
		title,
		picture: { asset }
	} = use(getRecipeBySlug(slug));
	const imageBuilder = useImageBuilder(asset);

	const containerStyle = useMemo(() => {
		const baseUrl = imageBuilder.buildUrlWithOptions({ crop: 'focalpoint', width: 2000, aspectRatio: 7 / 2 });

		const baseUrl2x = imageBuilder.buildUrlWithOptions({ crop: 'focalpoint', width: 2000, aspectRatio: 7 / 2, dpr: 2 });

		const desktop = imageBuilder.buildUrlWithOptions({ crop: 'focalpoint', width: 1920, aspectRatio: 8 / 3 });

		const desktop2x = imageBuilder.buildUrlWithOptions({ crop: 'focalpoint', width: 1920, aspectRatio: 8 / 3, dpr: 2 });

		const tablet = imageBuilder.buildUrlWithOptions({ crop: 'focalpoint', width: 1000, aspectRatio: 1 });

		const tablet2x = imageBuilder.buildUrlWithOptions({ crop: 'focalpoint', width: 1920, aspectRatio: 1, dpr: 2 });

		const mobile = imageBuilder.buildUrlWithOptions({ crop: 'focalpoint', width: 1000, aspectRatio: 1 });

		const mobile2x = imageBuilder.buildUrlWithOptions({ crop: 'focalpoint', width: 1920, aspectRatio: 1, dpr: 2 });

		return {
			'--bgUrl': `url('${baseUrl}')`,
			'--bgUrl-2x': `url('${baseUrl2x}')`,
			'--bgUrl-desk': `url('${desktop}')`,
			'--bgUrl-desk-2x': `url('${desktop2x}')`,
			'--bgUrl-tablet': `url('${tablet}')`,
			'--bgUrl-tablet-2x': `url('${tablet2x}')`,
			'--bgUrl-mobile': `url('${mobile}')`,
			'--bgUrl-mobile-2x': `url('${mobile2x}')`
		} as CSSProperties;
	}, [imageBuilder]);

	return (
		<div className={styles.heroContainer} style={containerStyle}>
			<div className={styles.headingWrap}>
				<h1 className={styles.heading}>{title}</h1>
				<SubTitle params={{ slug }} />
			</div>
		</div>
	);
}

Hero.defaultProps = {
	subTitle: undefined
};
