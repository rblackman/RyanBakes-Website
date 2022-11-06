import { SanityReference, Unit } from '@ryan-blackman/ryan-bakes-cms';
import Fraction from 'app/recipe/[slug]/(components)/fraction';
import getAllUnits from 'queries/getAllUnits';
import { use } from 'react';
import 'server-only';

interface UnitDisplayProps {
	unit: Unit;
	full: boolean;
}

function UnitDisplay({ unit: { name, abbreviation, exempt }, full }: UnitDisplayProps) {
	if (exempt) {
		return null;
	}

	return <span>{(full || 'short') === 'short' ? abbreviation : name}</span>;
}

interface Props {
	amount: string;
	unit: SanityReference<Unit>;
	full?: boolean;
}

export default function IngredientAmount({ amount, unit: { _ref: unitRef }, full }: Props) {
	const units = use(getAllUnits());
	const unit = units.filter(({ _id: id }) => id === unitRef)[0];
	const { display, exempt } = unit;

	const unitDisplay = <UnitDisplay unit={unit} full={full || false} />;
	const displayAmount = display === 'Fraction' ? <Fraction val={amount} /> : <span>{amount}</span>;

	if (exempt) {
		return null;
	}

	return (
		<>
			{displayAmount} {unitDisplay}
		</>
	);
}

IngredientAmount.defaultProps = {
	full: false
};
