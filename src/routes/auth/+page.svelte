<script lang="ts">
	import Button from '../../components/Button.svelte';
	import Input from '../../components/Input.svelte';
	import LoginForm from '../../components/LoginForm.svelte';
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
