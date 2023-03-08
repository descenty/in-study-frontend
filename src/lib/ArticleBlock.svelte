<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import type { IArticle } from '../models';
	import { shorten } from '../utils';

	export let article: IArticle;
</script>

<div class="article">
	<img src={PUBLIC_BASE_URL + article.thumbnail.url} alt={article.title} />
	<div>
		<h3>{article.title}</h3>
		<p>{shorten(article.content, 140)}...</p>
		<span
			>{new Date(article.createdAt).toLocaleString('ru', {
				year: 'numeric',
				month: 'long',
				day: 'numeric'
			})}</span
		>
	</div>
</div>

<style lang="scss">
	@import './styles.scss';
	.article {
		display: flex;
		flex-direction: column;
		gap: 1em;
		width: 300px;
		height: 320px;
		background: white;
		overflow: hidden;
		border-radius: 10px;
		box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		transition: 0.5s;
		&:hover {
			box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.25);
		}
		img {
			width: 100%;
			height: 150px;
			object-fit: cover;
		}
		div {
			padding-inline: 1em;
			display: flex;
			flex-direction: column;
			gap: 0.4em;
			h3 {
				font-size: 1.25em;
			}
			p {
				color: rgb(156, 156, 156);
				font-size: 0.9em;
				font-style: italic;
			}
			span {
				text-align: right;
				font-size: 0.95em;
				font-style: italic;
			}
		}
	}
</style>
