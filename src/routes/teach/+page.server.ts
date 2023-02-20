import type { ICourse } from '../../models';
import { baseURL } from '../../utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies, fetch }) => {
	const response = await fetch(baseURL + 'courses/creator', {
		headers: {
			authorization: 'Bearer ' + cookies.get('token')
		}
	});
	return { courses: (await response.json()) as ICourse[] };
}) satisfies PageServerLoad;
