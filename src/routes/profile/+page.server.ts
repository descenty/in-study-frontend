import type { IUser } from '../../models';
import { baseURL } from '../../utils';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies, fetch }) => {
	const response = await fetch(baseURL + 'auth/', {
		headers: {
			authorization: 'Bearer ' + cookies.get('token')
		}
	});
	return { user: (await response.json()) as IUser };
}) satisfies PageServerLoad;
