import getRecipeById from 'queries/getRecipeById';
import { Fragment, ReactNode, use } from 'react';
import styles from '../(styles)/subTitle.module.css';
import { Props } from '../page';
import Temp from './temp';
import Time from './time';

export default function SubTitle({ params: { slug: id } }: Props) {
	const { preheat, bakeTime, totalTime, serves } = use(getRecipeById(id));

	if (!(preheat || bakeTime || totalTime || serves)) {
		return null;
	}

	const elements: ReactNode[] = [];

	if (totalTime) {
		elements.push(
			<Fragment key="totalTime">
				<dt>Total Time</dt>
				<dd>
					<Time totalMinutes={totalTime} />
				</dd>
			</Fragment>
		);
	}

	if (bakeTime) {
		elements.push(
			<Fragment key="bakeTime">
				<dt>Bake Time</dt>
				<dd>
					<Time totalMinutes={bakeTime} />
				</dd>
			</Fragment>
		);
	}

	if (preheat) {
		elements.push(
			<Fragment key="preheat">
				<dt>Preheat</dt>
				<dd>
					<Temp fahrenheit={preheat} />
				</dd>
			</Fragment>
		);
	}

	if (serves) {
		elements.push(
			<Fragment key="serves">
				<dt>Serves</dt>
				<dd>{serves}</dd>
			</Fragment>
		);
	}

	return (
		<div className={styles.subHeading}>
			{' '}
			<dl className={styles.dl}>{elements}</dl>
		</div>
	);
}
