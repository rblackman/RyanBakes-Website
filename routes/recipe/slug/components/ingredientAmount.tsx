import { SanityReference, Unit } from '@ryan-blackman/ryan-bakes-cms';
import Fraction from '../../../../components/generic/fraction';
import useUnits from '../hooks/useUnits';

interface Props {
	amount: string;
	unit: SanityReference<Unit>;
	full?: boolean;
}

function UnitDisplay({ unit: { name, abbreviation, exempt }, full }: { unit: Unit; full: boolean }) {
	if (exempt) {
		return null;
	}

	return <span>{(full || 'short') === 'short' ? abbreviation : name}</span>;
}

export default function IngredientAmount({ amount, unit: { _ref: unitRef }, full }: Props) {
	const units = useUnits();
	const unit = units.filter(({ _id }) => _id === unitRef)[0];
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
