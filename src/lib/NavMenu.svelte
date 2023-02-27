<script lang="ts" context="module">
	export interface IMenuItem {
		label: string;
		href: string;
	}
</script>

<script lang="ts">
	import { page } from '$app/stores';
	export let items: IMenuItem[];
</script>

<div class="menu">
	{#each items as item}
		<a aria-current={$page.url.pathname.includes(item.href)} href={item.href}>{item.label}</a>
	{/each}
</div>

<style lang="scss">
	@import './styles.scss';
	.menu {
		display: flex;
		flex-direction: column;
		width: 200px;
		gap: 1em;
		a {
			height: 40px;
			display: flex;
			align-items: center;
			&[aria-current='true'] {
				color: $primary-color;
			}
		}
	}
</style>
