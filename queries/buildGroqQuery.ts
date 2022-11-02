const siteKey = process.env.SANITY_KEY;
const dataset = process.env.SANITY_DATASET;

const baseAddress = `https://${siteKey}.api.sanity.io/v1/data/query/${dataset}`;

export default function buildGroqQuery(groq: string) {
	const encodedQuery = encodeURIComponent(groq);
	const url = `${baseAddress}?query=${encodedQuery}`;
	return url;
}
