<script lang="ts">
	import './styles.scss';
	import { goto, invalidate, invalidateAll } from '$app/navigation';
	import type { AxiosError } from 'axios';
	import { login } from '../stores/UserStore';
	import { axiosInstance, setAuthToken } from '../utils';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	const debounce = (fn: () => void, delay: number = 250) => {
		let timeout: NodeJS.Timeout;
		return () => {
			clearTimeout(timeout);
			timeout = setTimeout(fn, delay);
		};
	};
	let authType: 'login' | 'register' = 'login';
	let email = '';
	let password = '';
	let error = '';
	const validateForm = () => {
		console.log('hy');
		if (!email || !password) {
			error = 'Заполните все поля';
		} else if (!email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/))
			error = 'Некорректный email';
		else if (password.length < 6) error = 'Пароль должен быть не менее 6 символов';
		else error = '';
	};
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		validateForm();
		if (!error) {
			const result = await login(email, password);
			if (!result.success) error = result.message ? result.message : 'Что-то пошло не так';
			else {
				location.href = '/';
			}
		}
	};
</script>

<form method="POST" class="login-form">
	<div class="auth-type">
		<h4 aria-current={authType === 'login'} on:mouseup={() => (authType = 'login')}>Вход</h4>
		<h4 aria-current={authType === 'register'} on:mouseup={() => (authType = 'register')}>
			Регистрация
		</h4>
	</div>
	<Input bind:value={email} type="email" name="email" label="электронная почта" />
	<Input bind:value={password} type="password" name="password" label="пароль" />
	{#if error}
		<span class="error_span">{error}</span>
	{/if}
	<Button type="submit" primary label="Войти" on:click={handleSubmit} />
</form>

<style lang="scss">
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
