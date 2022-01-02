import { Ingredient as IngredientType } from '@ryan-blackman/ryan-bakes-cms';
import { SanityKeyed } from 'sanity-codegen';
import Unit from './unit';

interface Props {
	ingredient: SanityKeyed<IngredientType>;
}
export default function Ingredient({ ingredient: { name, amount, unit } }: Props) {
	return (
		<tr>
			<td>{name}</td>
			<td>
				{amount}
				<Unit unit={unit} />
			</td>
		</tr>
	);
}
