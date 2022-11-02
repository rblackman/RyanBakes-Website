import getRecipeBySlug from 'queries/getRecipeBySlug';
import { use, useMemo } from 'react';
import styles from '../(styles)/tags.module.css';
import { Props } from '../page';
import Tag from './tag';

export default function Tags({ params: { slug } }: Props) {
	const { tags } = use(getRecipeBySlug(slug));
	const sorted = useMemo(() => tags.sort(), [tags]);

	return (
		<ul className={styles.tagList}>
			{sorted.map((tag) => (
				<Tag tag={tag} key={tag} />
			))}
		</ul>
	);
}
