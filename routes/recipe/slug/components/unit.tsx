import { SanityReference, Unit as SanityUnit } from '@ryan-blackman/ryan-bakes-cms';
import useUnits from '../hooks/useUnits';

interface Props {
	unit: SanityReference<SanityUnit>;
	display?: 'full' | 'short' | undefined;
}

function Unit({ display, unit: { _ref: unitRef } }: Props) {
	const units = useUnits();

	const { name, abbreviation, exempt } = units.filter(({ _id }) => _id === unitRef)[0];

	if (exempt) {
		return null;
	}

	return <span>{(display || 'short') === 'short' ? abbreviation : name}</span>;
}

Unit.defaultProps = {
	display: 'short'
};

export default Unit;
