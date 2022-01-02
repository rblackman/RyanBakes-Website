import { ReactNode } from 'react';
import useSiteConfig from '../../hooks/data-hooks/useSiteConfig';
import Metadata, { AcceptedPages } from './metadata/metadata';

interface Props {
	children: ReactNode;
	hero?: ReactNode | undefined;
	page?: AcceptedPages;
}

function ApplicationPage({ page, hero, children }: Props) {
	const config = useSiteConfig();

	return (
		<>
			<Metadata config={config} page={page} />
			<main>
				{hero && <div className="hero-wrap">{hero}</div>}
				<div className="content">{children}</div>
			</main>
		</>
	);
}

ApplicationPage.defaultProps = {
	hero: undefined,
	page: undefined
};

ApplicationPage.dataHooks = [useSiteConfig];

export default ApplicationPage;
