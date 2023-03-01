<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { HomePage } = data;
</script>

<svelte:head>
	<title>In Study</title>
	<meta name="description" content="Каталог курсов" />
</svelte:head>

{#if HomePage}
	<svelte:component this={HomePage} />
{/if}

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
