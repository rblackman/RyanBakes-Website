const projectId = process.env.NEXT_PUBLIC_SANITY_ID ?? 'No SANITY_ID';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'No SANITY_DATASET';
const previewMode = process.env.NEXT_PUBLIC_SANITY_PREVIEW === 'true';
const useCdn = process.env.NEXT_PUBLIC_SANITY_USE_CDN === 'true';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2021-08-31';
export default {
	projectId,
	dataset,
	previewMode,
	useCdn,
	apiVersion,
	fetch
};
