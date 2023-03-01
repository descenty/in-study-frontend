<script lang="ts">
	import { HomePage } from '$lib/custom_data/custom_data_loader';
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
</style>
