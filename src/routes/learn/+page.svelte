<script lang="ts">
	import type { PageData } from './$types';
	import CourseRow from '$lib/CourseRow.svelte';
	import type { ICourse, IShortCourse } from '../../models';

	export let data: PageData;
	const { courses } = data;
</script>

<svelte:head>
	<title>Моё обучение</title>
	<meta name="description" content="About this app" />
</svelte:head>

<h2>Каталог курсов</h2>
<section class="courses">
	{#each courses as course}
		<CourseRow {course} />
	{/each}
</section>

<style>
	h2 {
		margin-block: 1em;
		font-size: 28px;
	}
	.courses {
		display: flex;
		flex-direction: column;
		gap: 2em;
		width: 100%;
	}
</style>
