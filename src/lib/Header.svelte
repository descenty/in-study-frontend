<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { user } from '../stores/UserStore';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="SvelteKit" />
			<span>In Study</span>
		</a>
	</div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/catalog'}>
				<a href="/catalog">Каталог</a>
			</li>
			<li aria-current={$page.url.pathname === '/learn'}>
				<a href="/learn">Моё обучение</a>
			</li>
			<li aria-current={$page.url.pathname === '/teach'}>
				<a href="/teach">Преподавание</a>
			</li>
			{#if !$user}
				<li aria-current={$page.url.pathname === '/auth'}>
					<a href="/auth">Войти</a>
				</li>
			{:else}
				<li aria-current={$page.url.pathname === '/profile'}>
					<a href="/profile">{$user.email}</a>
				</li>
			{/if}
		</ul>
	</nav>
	<div class="corner">
		<a href="https://github.com/descenty/in-study-frontend">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style lang="postcss">
	header {
		display: flex;
		justify-content: space-between;
		height: 60px;
		align-items: center;
	}

	.corner {
		width: 8em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		transition: 0.3s;
		&:hover {
			color: var(--primary-color);
		}
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
		height: 100%;
	}
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
		gap: 2em;
	}

	li {
		position: relative;
		height: 100%;
		transition: 0.3s;
		&:hover {
			color: var(--primary-color);
		}
	}

	li[aria-current='true']::before {
		--size: 8px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0px;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--primary-color);
	}

	nav a,
	span {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
