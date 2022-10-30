import getRecipeById from 'queries/getRecipeById';
import { use } from 'react';
import styles from '../(styles)/hero.module.css';
import { Props } from '../page';
import SubTitle from './subTitle';

export default function Hero({ params: { slug: id } }: Props) {
	const { title, picture: back, preheat, bakeTime, totalTime, serves } = use(getRecipeById(id));

	return (
		<div className={styles.heroContainer}>
			<div className={styles.headingWrap}>
				<h1 className={styles.heading}>{title}</h1>
				<SubTitle params={{ slug: id }} />
			</div>
		</div>
	);
}

Hero.defaultProps = {
	subTitle: undefined
};
