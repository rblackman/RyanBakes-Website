import { SanityReference, Unit } from '@ryan-blackman/ryan-bakes-cms';
import Fraction from 'app/recipe/[slug]/(components)/fraction';
import getAllUnits from 'queries/getAllUnits';
import { use } from 'react';
import 'server-only';

interface UnitDisplayProps extends Pick<Unit, 'name' | 'abbreviation' | 'noUnit'> {
	full: boolean;
}

function UnitDisplay({ name, abbreviation, noUnit, full }: UnitDisplayProps) {
	if (noUnit) {
		return null;
	}

	return <span>{(full || 'short') === 'short' ? abbreviation : name}</span>;
}

interface AmountProps {
	display: 'Fraction' | 'Decimal';
	amount: string;
	noCount: boolean;
}

function AmountDisplay({ amount, display, noCount }: AmountProps) {
	if (noCount) {
		return null;
	} else {
		return display === 'Fraction' ? <Fraction val={amount} /> : <span>{amount}</span>;
	}
}

interface Props {
	amount: string;
	unit: SanityReference<Unit>;
	full?: boolean;
}

export default function IngredientAmount({ amount, unit: { _ref: unitRef }, full }: Props) {
	const units = use(getAllUnits());
	const { display, noCount, noUnit, name, abbreviation } = units.filter(({ _id: id }) => id === unitRef)[0];

	const unitNode = <UnitDisplay name={name} abbreviation={abbreviation} noUnit={noUnit} full={full ?? false} />;
	const amountNode = <AmountDisplay amount={amount} display={display} noCount={noCount} />;

	return (
		<>
			{unitNode} {amountNode}
		</>
	);
}

IngredientAmount.defaultProps = {
	full: false
};
