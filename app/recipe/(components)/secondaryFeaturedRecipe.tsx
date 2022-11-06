import Heading from 'app/(components)/heading';
import Image from 'app/(components)/image';
import PortableText from 'app/(components)/portableText';
import Tags from 'app/(components)/tags';
import Link from 'next/link';
import getRecipeById from 'queries/getRecipeById';
import { use } from 'react';
import 'server-only';
import styles from './(styles)/secondaryFeaturedRecipe.module.css';

interface Props {
	id: string;
	index: number;
}

export default function SecondaryFeaturedRecipe({ id, index }: Props) {
	const {
		title,
		tags,
		picture,
		commentary,
		slug: { current: slug }
	} = use(getRecipeById(id));

	return (
		<div className={styles.recipeCard} style={{ zIndex: 1000 + index }}>
			<Image image={picture} width={400} aspectRatio={300 / 125} className={styles.pic} responsive />
			<Heading level={4} className={styles.name}>
				<Link href={`/recipe/${slug}`}>{title}</Link>
			</Heading>
			<div className={styles.tags}>
				<Tags tags={tags} noMargin />
			</div>
			<div className={styles.content}>
				<PortableText value={commentary} />
			</div>
		</div>
	);
}
