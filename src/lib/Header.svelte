<script lang="ts">
	import { page } from '$app/stores';
	import { user } from '../stores/UserStore';
	import favicon from '$lib/images/favicon.png';
	import AppStoreOutline from '~icons/mdi/apps';
	import LearnOutline from '~icons/mdi/learn-outline';
	import LightbulbOnOutline from '~icons/mdi/lightbulb-on-outline';
	import UserOutline from '~icons/mdi/account-circle-outline';
	import type { ComponentType } from 'svelte';
	export let authorized = false;
	interface ILink {
		href: string;
		label: string;
		icon: ComponentType;
	}
	const publicLinks: ILink[] = [
		{
			href: '/courses',
			label: 'Каталог',
			icon: AppStoreOutline
		}
	];
	const authenticatedLinks: ILink[] = [
		{
			href: '/learn',
			label: 'Моё обучение',
			icon: LearnOutline
		},
		{
			href: '/teach',
			label: 'Преподавание',
			icon: LightbulbOnOutline
		},
		{
			href: '/profile',
			label: 'Профиль',
			icon: UserOutline
		}
	];
</script>

<header>
	<a class="corner" href="/">
		<img src={favicon} alt="SvelteKit" />
		<!-- <span class="app-title">{PUBLIC_TITLE}</span> -->
	</a>
	<nav>
		<ul>
			{#each publicLinks as link}
				<li aria-current={$page.url.pathname === link.href}>
					<svelte:component this={link.icon} />
					<a href={link.href}>{link.label}</a>
				</li>
			{/each}
			{#if authorized}
				{#each authenticatedLinks as link}
					<li aria-current={$page.url.pathname === link.href}>
						<svelte:component this={link.icon} />
						<a href={link.href}>{link.label}</a>
					</li>
				{/each}
			{:else}
				<li aria-current={$page.url.pathname === '/auth'}>
					<a href="/auth">Войти</a>
				</li>
			{/if}
		</ul>
	</nav>
</header>

<style lang="scss">
	@import 'styles.scss';
	header {
		display: flex;
		justify-content: space-between;
		height: 75px;
		align-items: center;
		background: rgb(245, 245, 245);
	}

	.corner {
		margin-inline: 3em;
		width: 56px;
		height: 56px;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 1s;
		border-radius: 50%;
		&:hover {
			color: $primary-color;
			box-shadow: 0 5px 15px rgba($primary-color, 0.5);
			img {
				transform: rotate(-10deg) scale(1.2);
			}
		}
		img {
			width: 100%;
			height: 100%;
			transition: 1s;
			object-fit: contain;
		}
	}

	nav {
		display: flex;
		width: 100%;
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
		background-size: contain;
		gap: 2em;
		row-gap: 0em;
	}

	li {
		position: relative;
		display: flex;
		align-items: center;
		height: 100%;
		transition: 0.3s;
		cursor: pointer;
		&:hover {
			color: $primary-color;
		}
		.icon {
			color: red !important;
		}
	}

	li[aria-current='true'] {
		color: $primary-color;
		::before {
			--size: 8px;
			content: '';
			width: 0;
			height: 0;
			position: absolute;
			top: 0px;
			left: calc(50% - var(--size));
			border: var(--size) solid transparent;
			border-top: var(--size) solid $primary-color;
		}
		transform: scale(1.05);
	}

	nav a,
	span {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		letter-spacing: 0.5px;
		font-weight: 500;
		font-size: 1.05rem;
		text-transform: capitalize;
		transition: color 0.05s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
