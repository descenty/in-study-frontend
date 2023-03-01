import chalk from 'chalk';
import type { ComponentType } from 'svelte';

const loadComponent = async (path: string): Promise<ComponentType | undefined> => {
	try {
		return (await import(path /* @vite-ignore */)).default;
	} catch (error) {
		console.log(chalk.red(`No ${path} in custom_data folder`));
	}
};

export const HomePage: ComponentType | undefined = await loadComponent('./pages/HomePage.svelte');
export const AboutPage: ComponentType | undefined = await loadComponent('./pages/AboutPage.svelte');
