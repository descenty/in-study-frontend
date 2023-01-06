<script>
	import { page } from '$app/stores';
</script>

<div class="error">
	<h2>
		{#if $page.status === 404}
			Страница не найдена
		{:else if $page.status === 403}
			Отказано в доступе
		{:else if $page.status === 500}
			Ошибка сервера
		{:else}
			Неизвестная ошибка
		{/if}
		({$page.status})
	</h2>
</div>
<style lang="postcss">
	.error {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 500px;
		h2 {
			color: red;
		}
	}
</style>
