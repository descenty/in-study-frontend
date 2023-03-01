import type { PageLoad } from './$types';

export const load = (async () => {
	return { HomePage: (await import('./custom_data_loader' /* @vite-ignore */)).HomePage };
}) satisfies PageLoad;
