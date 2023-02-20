import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	return {
		authorized: cookies.get('token') != null
	};
}) satisfies LayoutServerLoad;
