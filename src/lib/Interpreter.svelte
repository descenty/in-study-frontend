<script type="ts">
	import './styles.scss';
	import { onMount } from 'svelte';
	import { axiosInstance } from '../utils';
	import type { ICourse } from '../models';
	import { user } from '../stores/UserStore';
	import CodeMirror from 'svelte-codemirror-editor';
	import { python } from '@codemirror/lang-python';
	import axios from 'axios';
	import Button from '$lib/Button.svelte';

	let createdCourses: ICourse[] = [];
	onMount(async () => {
		createdCourses = (await axiosInstance.get<ICourse[]>(`course?creatorId=${$user?.id}`)).data;
	});
	let code = '';
	let output = '';
	const sendCode = async (): Promise<string> =>
		(await axios.post<string>('http://localhost:5000/execute/', { code })).data;
</script>

<svelte:head>
	<title>Преподавание</title>
</svelte:head>
<!-- <h3>Курсы</h3> -->
<div class="interpeter">
	<h3>Интерпретатор python</h3>
	<CodeMirror
		bind:value={code}
		lang={python()}
		styles={{
			'&': {
				width: '500px',
				height: '300px',
				fontSize: '16px'
			},
			'*': {
				fontFamily: 'monospace'
			}
		}}
	/>
	<!-- <textarea placeholder="Введите код" rows="10" cols="50" /> -->
	<Button on:click={async () => (output = await sendCode())} label="Выполнить" />
	<textarea bind:value={output} placeholder="Вывод" rows="10" cols="50" readonly />
</div>

<style lang="scss">
	.interpeter {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5em;
		textarea {
			background-color: #1e1e1e;
			color: white;
			width: 500px;
			padding: 4px;
			padding-inline: 8px;
			font-family: monospace;
		}
	}
</style>
