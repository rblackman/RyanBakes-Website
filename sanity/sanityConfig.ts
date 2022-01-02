const projectId = process.env.SANITY_ID ?? 'No SANITY_ID';
const dataset = process.env.SANITY_DATASET ?? 'No SANITY_DATASET';
const previewMode = process.env.SANITY_PREVIEW === 'true';
const useCdn = process.env.SANITY_USE_CDN === 'true';
const apiVersion = process.env.SANITY_API_VERSION ?? '2021-08-31';
export default {
	projectId,
	dataset,
	previewMode,
	useCdn,
	apiVersion,
	fetch
};
