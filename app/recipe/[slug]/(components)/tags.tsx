import getRecipeById from 'queries/getRecipeById';
import { use, useMemo } from 'react';
import styles from '../(styles)/tags.module.css';
import { Props } from '../page';
import Tag from './tag';

export default function Tags({ params: { slug: id } }: Props) {
	const { tags } = use(getRecipeById(id));
	const sorted = useMemo(() => tags.sort(), [tags]);

	return (
		<ul className={styles.tagList}>
			{sorted.map((tag) => (
				<Tag tag={tag} key={tag} />
			))}
		</ul>
	);
}
