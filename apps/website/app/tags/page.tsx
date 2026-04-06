import Heading from "@components/ui/heading";
import buildCanonicalUrl from "@helpers/build-canonical-url";
import getTagsPage from "@queries/live/getTagsPage";
import getTagsWithCounts from "@queries/static/getTagsWithCounts";
import type { Metadata } from "next";
import Link from "next/link";
import { BiPurchaseTagAlt } from "react-icons/bi";
import "server-only";
import styles from "./tags-page.module.css";

type TagWithCountProps = Readonly<{
	tag: string;
	count: number;
}>;

function TagWithCount({ tag, count }: TagWithCountProps) {
	const encodedTag = encodeURIComponent(tag);
	return (
		<li className={styles.tagItem}>
			<Link className={styles.tagLink} href={`/tags/${encodedTag}`}>
				<BiPurchaseTagAlt aria-hidden="true" className={styles.tagIcon} />
				<span>{tag}</span>
			</Link>
			<span className={styles.count}>({count})</span>
		</li>
	);
}

export async function generateMetadata(): Promise<Metadata> {
	const tagsPage = await getTagsPage();
	const title = tagsPage.title ?? "Tags";
	const description = "Browse all recipe tags.";
	const canonical = buildCanonicalUrl("/tags");

	return {
		title,
		description,
		alternates: canonical ? { canonical } : undefined,
		openGraph: {
			title,
			description,
			...(canonical ? { url: canonical } : {}),
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
		},
	};
}

export default async function Page() {
	const [tagsPage, tagsWithCounts] = await Promise.all([getTagsPage(), getTagsWithCounts()]);

	const title = tagsPage.title ?? "Tags";

	return (
		<main>
			<div className="content">
				<Heading level={2}>{title}</Heading>

				{tagsWithCounts.length > 0 ? (
					<ul className={styles.tagList}>
						{tagsWithCounts.map(({ tag, count }) => (
							<TagWithCount key={tag} tag={tag} count={count} />
						))}
					</ul>
				) : (
					<p>No tags available yet.</p>
				)}
			</div>
		</main>
	);
}
