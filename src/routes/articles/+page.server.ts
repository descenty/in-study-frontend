import { BASE_URL } from '$env/static/private';
import type { IArticle } from '../../models';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	let articles: IArticle[] = [];
	try {
		articles = (await (await fetch(BASE_URL + 'articles/?populate=thumbnail')).json()).data;
	} catch (error) {
		/* empty */
		console.log(error);
	}
	return { articles };
}) satisfies PageServerLoad;
