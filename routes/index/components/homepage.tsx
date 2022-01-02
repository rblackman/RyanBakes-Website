import ApplicationPage from '../../../components/shared/applicatonPage';

function HomePage() {
	return (
		<ApplicationPage>
			<h1>Homepage</h1>
		</ApplicationPage>
	);
}

HomePage.dataHooks = ApplicationPage.dataHooks;

export default HomePage;
