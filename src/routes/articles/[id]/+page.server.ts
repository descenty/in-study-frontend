import { BASE_URL } from '$env/static/private';
import type { PageServerLoad } from './$types';
import type { IArticle } from '../../../models';

export const load = (async ({ fetch, params }) => {
	const fetchArticle = async (): Promise<IArticle> => {
		return (await (await fetch(BASE_URL + `articles/${params.id}/?populate=image`)).json()).data;
	};
	return { article: await fetchArticle(), articleId: params.id };
}) satisfies PageServerLoad;
