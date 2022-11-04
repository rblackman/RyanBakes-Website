import { Ingredient as IngredientType } from '@ryan-blackman/ryan-bakes-cms';
import { SanityKeyed } from 'sanity-codegen';
import 'server-only';
import styles from '../(styles)/ingredient.module.css';
import IngredientAmount from './ingredientAmount';

interface Props {
	ingredient: SanityKeyed<IngredientType>;
}

export default function Ingredient({ ingredient: { name, amount, unit, notes } }: Props) {
	return (
		<tr>
			<td>{name}</td>
			<td>
				<IngredientAmount unit={unit} amount={amount} />
				{notes && notes.length > 0 && (
					<>
						{' '}
						<span className={styles.note}>({notes})</span>
					</>
				)}
			</td>
		</tr>
	);
}
