import chalk from 'chalk';
import type { ComponentType, SvelteComponent } from 'svelte';

const homePagePath = '../lib/custom_data/HomePage.svelte';

export let HomePage: ComponentType
try {
	HomePage = (await import(homePagePath /* @vite-ignore */)).default;
} catch (error) {
	console.log(chalk.red('No HomePage.svelte in custom_data folder'));
}
