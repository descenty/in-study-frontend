<script lang="ts">
	import type { AxiosError } from 'axios';
	import { axiosInstance, setAuthToken } from '../utils';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	let authType: 'login' | 'register' = 'login';
	let email = '';
	let password = '';
	let error = '';
	const login = async () => {
		try {
			const token = (
				await axiosInstance.post<{ token: string }>('auth/login/', { email, password })
			).data.token;
			setAuthToken(token);
		} catch (e) {
			const axiosError = e as AxiosError;
			error = axiosError.response?.data.message;
		}
	};
</script>

<form class="login-form">
	<div class="auth-type">
		<h4 aria-current={authType === 'login'} on:mouseup={() => (authType = 'login')}>Вход</h4>
		<h4 aria-current={authType === 'register'} on:mouseup={() => (authType = 'register')}>
			Регистрация
		</h4>
	</div>
	<Input bind:value={email} type="email" name="email" label="электронная почта" />
	<Input bind:value={password} type="password" name="password" label="пароль" />
	<span class="error_span">{error}</span>
	<Button primary label="Войти" on:click={async () => await login()} />
</form>

<style lang="postcss">
	.login-form {
		display: flex;
		flex-direction: column;
		align-self: center;
		justify-content: center;
		gap: 1.5em;
		width: 350px;
		height: 300px;
		padding: 2em;
		background: rgb(252, 252, 252);
		border-radius: 10px;
		box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.136);
		.error_span {
			color: red;
			font-size: 14px;
		}
		.auth-type {
			display: flex;
			justify-content: space-between;
			width: 50%;
			gap: 1em;
			h4 {
				cursor: pointer;
				padding: 0.3em;
				font-weight: 500;
				transition: 0.3s;
				&[aria-current='true'] {
					color: var(--primary-color);
				}
			}
		}
	}
</style>
