<script lang="ts">
	import type { PageData } from './$types';
	import CourseBlock from '$lib/CourseBlock.svelte';
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

<style lang="scss">
	h2 {
		margin-block: 1em;
		font-size: 28px;
	}
	.courses {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1em;
	}
	@media (max-width: 900px) {
		.courses {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 600px) {
		.courses {
			grid-template-columns: 1fr;
		}
	}
</style>
