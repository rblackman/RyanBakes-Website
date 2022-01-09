export default function isProduction() {
	return ['production', 'staging'].indexOf(process.env.NODE_ENV) >= 0;
}
