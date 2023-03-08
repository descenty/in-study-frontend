<script lang="ts">
	import type { PageData } from './$types';
	import Article from '$lib/Article.svelte';

	export let data: PageData;
	const { article } = data;
</script>

<Article {article} />
