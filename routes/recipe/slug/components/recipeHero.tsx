import { Recipe } from '@ryan-blackman/ryan-bakes-cms';
import { Fragment, ReactNode } from 'react';
import styled from 'styled-components';
import Hero from '../../../../components/generic/hero';
import Temp from '../../../../components/generic/temp';
import Time from '../../../../components/generic/time';

const Dl = styled.dl`
	margin: 0;
	display: flex;
	flex-flow: row wrap;
`;

const Dt = styled.dt`
	margin: 0;
	font-weight: bold;
	&:after {
		content: ':';
		font-weight: normal;
		margin-right: 0.25rem;
	}
`;

const Dd = styled.dd`
	margin: 0;
	+ dt {
		margin-left: 1rem;
	}
`;

interface Props {
	recipe: Recipe;
}

function SubTitle({ preheat, bakeTime, totalTime, serves }: Pick<Recipe, 'preheat' | 'bakeTime' | 'totalTime' | 'serves'>) {
	if (!(preheat || bakeTime || totalTime || serves)) {
		return null;
	}
	const elements: ReactNode[] = [];

	if (totalTime) {
		elements.push(
			<Fragment key="totalTime">
				<Dt>Total Time</Dt>
				<Dd>
					<Time totalMinutes={totalTime} />
				</Dd>
			</Fragment>
		);
	}

	if (bakeTime) {
		elements.push(
			<Fragment key="bakeTime">
				<Dt>Bake Time</Dt>
				<Dd>
					<Time totalMinutes={bakeTime} />
				</Dd>
			</Fragment>
		);
	}

	if (preheat) {
		elements.push(
			<Fragment key="preheat">
				<Dt>Preheat</Dt>
				<Dd>
					<Temp fahrenheit={preheat} />
				</Dd>
			</Fragment>
		);
	}

	if (serves) {
		elements.push(
			<Fragment key="serves">
				<Dt>Serves</Dt>
				<Dd>{serves}</Dd>
			</Fragment>
		);
	}

	return <Dl>{elements}</Dl>;
}

export default function RecipeHero({ recipe: { title, picture, preheat, bakeTime, totalTime, serves } }: Props) {
	const subTitle = <SubTitle preheat={preheat} bakeTime={bakeTime} totalTime={totalTime} serves={serves} />;
	return <Hero title={title} subTitle={subTitle} image={picture} />;
}
