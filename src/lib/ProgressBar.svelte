<script lang="ts">
	import { css } from '@emotion/css';

	export let value: number;
	$: style = css({
		'::after': {
			width: `${value * 100}%`
		}
	});
</script>

<div class={style} />

<style lang="scss">
	@import './styles.scss';
	div {
		width: 100%;
		height: 10px;
		background-color: whitesmoke;
		border-radius: 10px;
		position: relative;
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			background-color: $primary-color;
			border-radius: 10px;
		}
	}
</style>
