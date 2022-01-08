import Heading from '../../../components/generic/heading';
import ApplicationPage from '../../../components/shared/applicatonPage';
import RecentRecipes from './recentRecipes';

function HomePage() {
	return (
		<ApplicationPage>
			<Heading level={1}>Ryan Bakes</Heading>
			<RecentRecipes />
		</ApplicationPage>
	);
}

HomePage.dataHooks = [...ApplicationPage.dataHooks, ...RecentRecipes.dataHooks];

export default HomePage;
