import PortableText from 'app/(components)/portableText';
import getRecipeBySlug from 'queries/getRecipeBySlug';
import { use } from 'react';
import 'server-only';
import { Props } from '../page';
import styles from './(styles)/commentary.module.css';

export default function Commentary({ params: { slug } }: Props) {
	const { commentary } = use(getRecipeBySlug(slug));
	return (
		<div className={styles.introWrap}>
			<PortableText value={commentary} />
		</div>
	);
}
