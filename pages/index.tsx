import { GetStaticProps, GetStaticPropsContext } from 'next';
import { getDataHooksProps } from 'next-data-hooks';
import useSiteConfig from '../hooks/data-hooks/useSiteConfig';

interface Props {}

export default function Home() {
	const { title } = useSiteConfig();

	return (
		<>
			<h1>{title}</h1>
			<p>Hello World</p>
		</>
	);
}

Home.dataHooks = [useSiteConfig];

type StaticProps = Props & {
	nextDataHooks: {
		[k: string]: any;
	};
};

export const getStaticProps: GetStaticProps<StaticProps> = async (context: GetStaticPropsContext) => {
	const dataHooksProps = await getDataHooksProps({
		context,
		dataHooks: Home.dataHooks
	});

	return {
		props: {
			...dataHooksProps
		},
		revalidate: 60 * 60 * 12 // 12 hours
	};
};
