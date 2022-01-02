import { Ingredient as IngredientType } from '@ryan-blackman/ryan-bakes-cms';
import { SanityKeyed } from 'sanity-codegen';
import styled from 'styled-components';
import baseSpacing from '../../../../helpers/styled-components/baseSpacing';
import sr from '../../../../helpers/styled-components/sr';
import Theme from '../../../../types/theme';
import Ingredient from './ingredient';

const IngredientsWrap = styled.div``;

const IngredientsHeading = styled.h2`
	${sr()}
`;

const IngredientsTableWrap = styled.div`
	overflow-x: auto;
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

const THead = styled.thead`
	font-weight: bold;
	th {
		text-align: left;
		padding: ${baseSpacing(0.25)} ${baseSpacing(1)} ${baseSpacing(0.125)} ${baseSpacing(1)};
		border-bottom: 0.1rem solid ${({ theme }: { theme: Theme }) => theme.colors.secondary.color};
	}
`;

const TBody = styled.tbody`
	tr:nth-of-type(even) td {
		background: ${({ theme }: { theme: Theme }) => theme.colors.secondary.color}10;
	}

	td {
		padding: ${baseSpacing(0.125)} ${baseSpacing(1)} ${baseSpacing(0.125)} ${baseSpacing(1)};
	}
`;

interface Props {
	ingredients: Array<SanityKeyed<IngredientType>>;
}

export default function Ingredients({ ingredients }: Props) {
	return (
		<IngredientsWrap>
			<IngredientsHeading>Ingredients</IngredientsHeading>
			<IngredientsTableWrap>
				<Table>
					<THead>
						<tr>
							<th scope="col">Ingredient</th>
							<th scope="col">Amount</th>
						</tr>
					</THead>
					<TBody>
						{ingredients.map((ingredient) => (
							<Ingredient key={ingredient._key} ingredient={ingredient} />
						))}
					</TBody>
				</Table>
			</IngredientsTableWrap>
		</IngredientsWrap>
	);
}
