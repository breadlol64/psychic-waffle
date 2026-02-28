import { json } from '@sveltejs/kit';
import { getStore } from '@netlify/blobs';
import { NETLIFY_TOKEN } from '$env/static/private';

export async function GET() {
	const store = getStore('battery', {
		siteID: '7a3ce420-7b3d-49c0-a52c-ac525110bb63',
		token: NETLIFY_TOKEN
	});
	const level = await store.get('level');

	return json(level);
}
