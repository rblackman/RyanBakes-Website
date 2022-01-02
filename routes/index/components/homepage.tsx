import ApplicationPage from '../../../components/shared/applicatonPage';
import useSiteConfig from '../../../hooks/data-hooks/useSiteConfig';

function HomePage() {
	return (
		<ApplicationPage>
			<h1>Homepage</h1>
		</ApplicationPage>
	);
}

HomePage.dataHooks = [useSiteConfig];

export default HomePage;
