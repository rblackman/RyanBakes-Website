import getRecipeById from 'queries/getRecipeById';
import { use } from 'react';
import 'server-only';
import styles from './(styles)/featuredRecipe.module.css';
import Heading from './heading';
import Image from './image';

interface Props {
	id: string;
}

export default function FeaturedRecipe({ id }: Props) {
	const { title, picture } = use(getRecipeById(id));

	return (
		<div className={styles.featuredRecipe}>
			<Heading level={3}>{title}</Heading>
			<Image image={picture} width={400} aspectRatio={1} />
		</div>
	);
}
