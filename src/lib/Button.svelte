<script lang="ts">
	import './styles.postcss';
	export let primary = false;
	export let backgroundColor: string | undefined = undefined;
	export let size: 'small' | 'medium' | 'large' = 'medium';
	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let label: string = '';
	export let alignSelf: 'flex-start' | 'flex-end' | 'center' = 'center';
	$: mode = primary ? 'primary' : 'secondary';
	$: style = backgroundColor
		? `background-color: ${backgroundColor};`
		: '' + alignSelf
		? `align-self: ${alignSelf};`
		: '';
</script>

<button {type} class={['storybook-button', size, mode].join(' ')} {style} on:click>
	{label}
</button>

<style lang="scss">
	.storybook-button {
		font-family: 'Fira Mono', monospace;
		font-weight: 500;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		display: inline-block;
		line-height: 0.8;
		width: max-content;
		&.primary {
			color: white;
			background-color: var(--primary-color);
			&:hover {
				filter: brightness(1.3);
			}
		}
		&.secondary {
			color: #333;
			background-color: white;
			box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
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
