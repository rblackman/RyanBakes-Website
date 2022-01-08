import { useMemo } from 'react';
import styled from 'styled-components';

const Numerator = styled.sup`
	font-feature-settings: frac;
	font-variant-numeric: diagonal-fractions;
	font-variant-position: super;
`;

const Denominator = styled.sub`
	font-feature-settings: frac;
	font-variant-numeric: diagonal-fractions;
	font-variant-position: sub;
`;

const Divide = styled.span`
	font-feature-settings: frac;
	font-variant-numeric: diagonal-fractions;
`;

function FractionPart({ val }: { val: string }) {
	const hasSlash = useMemo(() => val && val.length > 0 && val.indexOf('/') > 0, [val]);

	const [numerator, denominator] = useMemo(() => {
		if (hasSlash) {
			return val.split('/').map((num) => num.trim());
		}
		return [null, null];
	}, [val, hasSlash]);

	if (hasSlash) {
		return (
			<>
				<Numerator>{numerator}</Numerator>
				<Divide>/</Divide>
				<Denominator>{denominator}</Denominator>
			</>
		);
	}
	return <span>{val}</span>;
}

export default function Fraction({ val }: { val: string }) {
	const parts = useMemo(() => val.split(' '), [val]);

	return (
		<>
			{parts.map((part) => (
				<FractionPart val={part} key={part} />
			))}
		</>
	);
}
