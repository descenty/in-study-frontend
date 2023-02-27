import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (({ params }) => {
	throw redirect(302, '/courses/' + params.id + '/info');
}) satisfies LayoutServerLoad;
