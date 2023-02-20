<script lang="ts">
	import '@fontsource/nunito/200.css';
	import '@fontsource/nunito/300.css';
	import '@fontsource/nunito/400.css';
	import '@fontsource/nunito/500.css';
	import '@fontsource/nunito/600.css';
	import '@fontsource/nunito/700.css';
	import Button from '../lib/Button.svelte';
	import Header from '../lib/Header.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	export let { authorized } = data;
</script>

<div class="app">
	<Header {authorized} />
	<main>
		<slot />
	</main>
	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
