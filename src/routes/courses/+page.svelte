<script lang="ts">
	import type { PageData } from './$types';
	import CourseBlock from '$lib/CourseBlock/CourseBlock.svelte';
	export let data: PageData;
	const { courses } = data;
</script>

<svelte:head>
	<title>Каталог</title>
</svelte:head>

<h2>Каталог курсов</h2>
<section class="courses">
	{#each courses as course}
		<CourseBlock {course} />
	{/each}
</section>

<style src="./styles.postcss">
</style>
