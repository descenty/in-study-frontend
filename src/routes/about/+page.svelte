<script lang="ts">
	import { AboutPage } from '$lib/custom_data/custom_data_loader';
	export const prerender = true;
</script>

{#if AboutPage}
	<svelte:component this={AboutPage} />
{/if}
