import { Ingredient as IngredientType } from '@ryan-blackman/ryan-bakes-cms';
import { SanityKeyed } from 'sanity-codegen';
import styled from 'styled-components';
import IngredientAmount from './ingredientAmount';

const Note = styled.span`
	font-style: italic;
`;
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
						<Note>({notes})</Note>
					</>
				)}
			</td>
		</tr>
	);
}
