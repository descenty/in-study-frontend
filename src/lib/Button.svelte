<script lang="ts">
	import './styles.scss';
	import variables from './cssvariables';
	import { css, cx } from '@emotion/css';
	export let primary = false;
	export let backgroundColor: string | undefined = undefined;
	export let shadow = true;
	export let hoverColor = false;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let label: string = '';
	export let alignSelf: 'flex-start' | 'flex-end' | 'center' = 'center';
	$: mode = primary ? 'primary' : 'secondary';
	// $: style = backgroundColor
	// 	? `background-color: ${backgroundColor};`
	// 	: '' + alignSelf
	// 	? `align-self: ${alignSelf};`
	// 	: '';
	$: style = css({
		backgroundColor: backgroundColor,
		alignSelf: alignSelf,
		boxShadow: !primary && shadow ? 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset' : '',
		':hover': {
			color: hoverColor ? variables.primaryColor + ' !important' : ''
		}
	});
</script>

<button {type} class={cx('base-button', size, mode, style)} on:click>
	{label}
</button>

<style lang="scss">
	@import './styles.scss';
	.base-button {
		font-weight: 500;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		display: inline-block;
		line-height: 0.8;
		width: max-content;
		transition: 0.3s;
		&.primary {
			color: white;
			background-color: $primary-color;
			transition: 0.2s;
			&:hover {
				filter: brightness(1.1);
			}
		}
		&.secondary {
			color: #333;
			background-color: rgb(249, 249, 249);
			&:hover {
				filter: brightness(0.982);
			}
		}
		&.small {
			font-size: 12px;
			padding: 10px 16px;
		}
		&.medium {
			font-size: 14px;
			padding: 0.8em 2.5em;
		}
		&.large {
			font-size: 16px;
			padding: 12px 24px;
		}
	}
</style>
