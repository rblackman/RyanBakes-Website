import Link from 'next/link';
import getRecipeById from 'queries/getRecipeById';
import { use } from 'react';
import 'server-only';
import styles from './(styles)/featuredRecipe.module.css';
import Heading from './heading';
import Image from './image';
import PortableText from './portableText';

interface Props {
	id: string;
}

export default function FeaturedRecipe({ id }: Props) {
	const {
		title,
		picture,
		commentary,
		slug: { current: slug }
	} = use(getRecipeById(id));

	return (
		<div className={styles.featuredRecipe}>
			<Image image={picture} width={350} aspectRatio={1} className={styles.img} />
			<Heading level={3} className={styles.heading}>
				{title}
			</Heading>
			<div className={styles.blurb}>
				<PortableText value={commentary} />
				<PortableText value={commentary} />
			</div>
			<Link href={`/recipe/${slug}`} className={styles.cta}>
				View
			</Link>
		</div>
	);
}
