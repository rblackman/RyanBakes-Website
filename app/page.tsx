import getHomepage from 'queries/getHomepage';
import { use } from 'react';
import 'server-only';
import Block from './(components)/block';

export default function Page() {
	const { title, content } = use(getHomepage());

	return (
		<div className="content">
			{content.map((block) => (
				<Block key={block._key} content={block} />
			))}
		</div>
	);
}
