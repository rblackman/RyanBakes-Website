import getRecipeById from 'queries/getRecipeById';
import { use } from 'react';
import 'server-only';
import styles from '../(styles)/commentary.module.css';
import { Props } from '../page';

export default function Commentary({ params: { slug: id } }: Props) {
	const { title } = use(getRecipeById(id));
	return (
		<div className={styles.introWrap}>
			<p>Commentary for {title}</p>
		</div>
	);
}
