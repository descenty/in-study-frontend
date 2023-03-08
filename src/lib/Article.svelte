<script lang="ts">
	import TextArea from '$lib/TextArea.svelte';
	import { fade } from 'svelte/transition';
	import SvelteMarkdown from 'svelte-markdown';
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import type { IArticle } from '../models';

	export let article: IArticle;
</script>

<section transition:fade>
	<img src={PUBLIC_BASE_URL + article.image.url} alt={article.title} />
	<h1>{article.title}</h1>
	<div class="content">
		<SvelteMarkdown source={article.content} />
	</div>
	<div class="comments">
		<h2>2 комментария</h2>
		<TextArea placeholder="Написать комментарий..." />
	</div>
</section>

<style lang="scss">
	@import './styles.scss';
	section {
		@include round-block;
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding-block: 3em;
		width: 95%;
		max-width: 1000px;
		align-self: center;
		h1 {
			text-align: center;
		}
		img {
			width: 90%;
			max-width: 900px;
			height: 500px;
			object-fit: cover;
			align-self: center;
			border-radius: 16px;
			box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.314);
			margin-bottom: 1em;
		}
		.content {
			line-height: 1.5em;
			display: flex;
			flex-direction: column;
			gap: 1em;
			padding: 1em;
			max-width: 900px;
			align-self: center;
		}
		.comments {
			display: flex;
			flex-direction: column;
			padding-inline: 1em;
			gap: 2em;
      h2 {
        font-size: 1.4em;
      }
		}
	}
</style>
