import type { ICourse, IShortCourse } from '../../models';
import { baseURL } from '../../utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies, fetch }) => {
	console.log(cookies.get('token'));
	const response = await fetch(baseURL + 'courses/creator', {
		headers: {
			Authorization: 'Bearer ' + cookies.get('token')
		}
	});
	return { courses: (await response.json()) as IShortCourse[] };
}) satisfies PageServerLoad;
