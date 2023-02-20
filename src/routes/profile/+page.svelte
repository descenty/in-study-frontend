<script lang="ts">
	import Button from '../../lib/Button.svelte';
	import { logout } from '../../stores/UserStore';
	import type { IUser } from '../../models';
	import type { PageData } from './$types';
	export let data: PageData;
	const { user } = data;
</script>

<section class="profile">
	<h3>{user?.email}</h3>
	<Button on:click={() => logout()} label="Выйти" />
</section>

<style lang="scss">
	.profile {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5em;
	}
</style>
