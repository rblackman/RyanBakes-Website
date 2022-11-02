import PortableText from 'app/(components)/portableText';
import getRecipeById from 'queries/getRecipeById';
import { use } from 'react';
import styles from '../(styles)/commentary.module.css';
import { Props } from '../page';

export default function Commentary({ params: { slug: id } }: Props) {
	const { commentary } = use(getRecipeById(id));
	return (
		<div className={styles.introWrap}>
			<PortableText value={commentary} />
		</div>
	);
}
