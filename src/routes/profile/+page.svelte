<script>
	import Button from '../../lib/Button.svelte';
	import { logout, user } from '../../stores/UserStore';
</script>

<section class="profile">
	<h3>{$user?.email}</h3>
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
