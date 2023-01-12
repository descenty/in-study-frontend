<script lang="ts">
	import Button from '../../lib/Button.svelte';
	import Input from '../../lib/Input.svelte';
	import LoginForm from '../../lib/LoginForm.svelte';
</script>

<div class="auth">
	<LoginForm />
</div>

<style lang="postcss">
	.auth {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 70vh;
	}
</style>
