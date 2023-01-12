<script lang="ts">
	import type { PageData } from './$types';
	import { fade } from 'svelte/transition'
	export let data: PageData;
	const { courses } = data;
</script>

<svelte:head>
	<title>Каталог</title>
</svelte:head>

<h2>Каталог курсов</h2>
<section class="courses">
	{#each courses as course}
		<div class="course">
			<img src={course.image} alt="course" />
			<div class="info">
				<h3>{course.title}</h3>
				<span class="creator">{course.creator.name}</span>
			</div>
			<span class="price"
				>{course.price.toLocaleString('ru-RU', {
					style: 'currency',
					currency: 'RUB'
				})}</span
			>
		</div>
	{/each}
</section>

<style src="./styles.postcss">
</style>
