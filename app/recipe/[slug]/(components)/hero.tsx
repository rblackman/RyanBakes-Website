import getRecipeBySlug from 'queries/getRecipeBySlug';
import { use } from 'react';
import styles from '../(styles)/hero.module.css';
import { Props } from '../page';
import SubTitle from './subTitle';

export default function Hero({ params: { slug } }: Props) {
	const { title, picture } = use(getRecipeBySlug(slug));

	// const image = useImage(picture, {});

	return (
		<div className={styles.heroContainer}>
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
