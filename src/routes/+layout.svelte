<script lang="ts">
	import '@fontsource/nunito/200.css';
	import '@fontsource/nunito/300.css';
	import '@fontsource/nunito/400.css';
	import '@fontsource/nunito/500.css';
	import '@fontsource/nunito/600.css';
	import '@fontsource/nunito/700.css';
	import Telegram from '~icons/ic/baseline-telegram';
	import Vk from '~icons/uil/vk';
	import Oils from '$lib/images/oils.jpg';
	import Lavanda from '$lib/images/lavanda.png';
	import Button from '../lib/Button.svelte';
	import Header from '../lib/Header.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;
	const { authorized } = data;
</script>

<div class="app">
	<!-- <img class="background" src={Oils} alt="bg" /> -->
	<Header {authorized} />
	<main>
		<slot />
	</main>
	<footer>
		<div class="social">
			<a href="https://vk.com/aromimir">
				<Vk color="#0077FF" />
			</a>
			<a href="https://t.me/aromabel">
				<Telegram color="#26A5E5" />
			</a>
		</div>
		<span>Здесь надо сделать навигацию как на htmllessons.ru</span>
		<span>А по бокам страницы сделать картинки масел, растений</span>
		2023 г.
	</footer>
</div>

<style lang="scss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background: rgb(111, 88, 70);
		background: linear-gradient(135deg, rgba(111, 88, 70, 1) 0%, rgba(220, 198, 186, 1) 100%);
		.background {
			position: absolute;
			width: 99vw;
			height: 400vh;
			object-fit: cover;
			object-position: 0;
			z-index: -1;
			box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.2);
		}
	}

	main {
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
	}

	footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1em;
		margin-block: 40px;
		width: 800px;
		padding: 1em;
		background: white;
		align-self: center;
		border-radius: 16px;
		.social {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.5em;
			font-size: 40px;
			a {
				height: 50px;
			}
		}
	}
</style>
