import { Ingredient as IngredientType, Step as SanityStep } from '@ryan-blackman/ryan-bakes-cms';
import Heading from 'app/(components)/heading';
import { SanityKeyed } from 'sanity-codegen';
import styles from '../(styles)/step.module.css';
import IngredientAmount from './ingredientAmount';

interface Props {
	ingredients: Array<SanityKeyed<IngredientType>>;
	step: SanityKeyed<SanityStep>;
}
export default function Step({ ingredients, step: { title, content } }: Props) {
	return (
		<div className={styles.stepWrap} role="listitem">
			{ingredients && ingredients.length > 0 && (
				<ul className={styles.ingredientsWrap}>
					{ingredients.map(({ _key, name, amount, unit }) => (
						<li key={_key}>
							<IngredientAmount amount={amount} unit={unit} /> {name}
						</li>
					))}
				</ul>
			)}
			<div className={styles.directionsWrap}>
				<Heading level={3} style={{ margin: 0 }}>
					{title}
				</Heading>
				{/* {content.map(({ _key, ...block }) => {
					// return <Block key={_key} block={block} />;
				})} */}
			</div>
		</div>
	);
}
