import { Ingredient as IngredientType } from '@ryan-blackman/ryan-bakes-cms';
import { SanityKeyed } from 'sanity-codegen';
import styled from 'styled-components';
import Unit from './unit';

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
				{amount}
				<Unit unit={unit} />
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
