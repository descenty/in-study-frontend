<script lang="ts">
	import ArticleBlock from '$lib/ArticleBlock.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const { articles } = data;
</script>

<section>
	<h1>Статьи</h1>
	<div>
		{#each articles as article}
			<a href={`articles/${article.id}`}>
				<ArticleBlock {article} />
			</a>
		{/each}
	</div>
</section>

<style>
	section {
		padding: 1em;
		padding-inline: 2em;
	}
	h1 {
		font-size: 2em;
		margin-bottom: 0.75em;
	}
	div {
		display: flex;
		flex-wrap: wrap;
	}
</style>
