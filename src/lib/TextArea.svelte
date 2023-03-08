<script lang="ts">
	export let value = '';
	export let placeholder = '';
</script>

<textarea {placeholder} rows={2} {value} on:input={(e) => (value = e.target?.value)} />

<style lang="scss">
	textarea {
		width: 100%;
		max-width: 500px;
		padding: 1em;
		font-size: 1em;
		border: 1px solid rgb(234, 234, 234);
		border-radius: 1em;
		resize: none;
		background: #f7f7f7;
		&:focus {
			outline: none;
			background: #fff;
		}
	}
</style>
