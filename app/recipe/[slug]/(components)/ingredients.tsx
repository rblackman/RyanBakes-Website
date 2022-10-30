import Heading from 'app/(components)/heading';
import getRecipeById from 'queries/getRecipeById';
import { use } from 'react';
import styles from '../(styles)/ingredients.module.css';
import { Props } from '../page';
import Ingredient from './ingredient';

export default function Ingredients({ params: { slug: id } }: Props) {
	const { ingredients } = use(getRecipeById(id));

	if (!ingredients) {
		return null;
	}

	return (
		<>
			<Heading level={2}>Ingredients</Heading>
			<div className={styles.ingredientsTableWrap}>
				<table className={styles.ingredientsTable}>
					<thead className={styles.ingredientsTable_thead}>
						<tr>
							<th scope="col">Ingredient</th>
							<th scope="col">Amount</th>
						</tr>
					</thead>
					<tbody className={styles.ingredientsTable_tbody}>
						{ingredients.map((ingredient) => (
							<Ingredient key={ingredient._key} ingredient={ingredient} />
						))}
					</tbody>
				</table>
			</div>
		</>
	);
}
