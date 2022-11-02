import PortableText from 'app/(components)/portableText';
import getRecipeBySlug from 'queries/getRecipeBySlug';
import { use } from 'react';
import styles from '../(styles)/commentary.module.css';
import { Props } from '../page';

export default function Commentary({ params: { slug } }: Props) {
	const { commentary } = use(getRecipeBySlug(slug));
	return (
		<div className={styles.introWrap}>
			<PortableText value={commentary} />
		</div>
	);
}
