<script lang="ts">
	import type { PageData } from './$types';
	import Article from '$lib/Article.svelte';
	import axios from 'axios';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import type { IComment } from '../../../models';
	export let data: PageData;
	const { article, articleId } = data;
	const fetchComments = async () =>
		(await (
			await axios(`${PUBLIC_BASE_URL}/api/comments/api::article.article:${articleId}`)
		).data) as IComment[];
</script>

<Article {article} {fetchComments} />
