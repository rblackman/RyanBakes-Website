import { GetStaticProps, GetStaticPropsContext } from 'next';
import { getDataHooksProps } from 'next-data-hooks';
import HomePage from '../routes/index/components/homepage';

export default function Home() {
	return <HomePage />;
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
	const dataHooksProps = await getDataHooksProps({
		context,
		dataHooks: HomePage.dataHooks
	});

	return {
		props: {
			...dataHooksProps
		},
		revalidate: 60 * 60 * 12 // 12 hours
	};
};
