<script lang="ts">
	import './styles.scss';
	import type { HTMLInputTypeAttribute } from 'react';
	export let type: HTMLInputTypeAttribute = 'text';
	export let name = '';
	export let label = '';
	export let value = '';
	export let placeholder = '...';

</script>

<div class="input-block">
	<label for={name}>{label}</label>
	<input
		{value}
		{type}
		{name}
		{placeholder}
		id={name}
		on:input={(e) => (value = e.target?.value)}
	/>
</div>

<style lang="scss">
	.input-block {
		display: flex;
		flex-direction: column;
		label {
			font-size: 14px;
			font-weight: 400;
			margin-bottom: 2px;
			margin-left: 4px;
			text-transform: lowercase;
		}
		input {
			width: 100%;
			padding: 0.6em;
			font-size: 14px;
			letter-spacing: 1px;
			font-weight: bold;
			border: 1px solid #ccc;
			border-radius: 0.5em;
			&:focus {
				outline: none;
				background: #f6f6f6;
			}
		}
		// disable autocomplete background color
		:-webkit-autofill {
			background-color: transparent !important;
			box-shadow: 0 0 0 50px white inset;
		}
	}
</style>
