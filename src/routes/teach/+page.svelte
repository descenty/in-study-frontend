<script lang="ts">
	import { axiosInstance } from '../../utils';
	import { onMount } from 'svelte';
	import { user } from '../../stores/UserStore';
	import CourseBlock from '$lib/CourseBlock/CourseBlock.svelte';
	import type { ICourse } from '../../models';
	import type { PageData } from './$types';
	export let data: PageData;
	const { courses } = data;
</script>

<svelte:head>
	<title>Преподавание</title>
</svelte:head>
<h2>Мои Курсы</h2>
<section class="courses">
	{#if courses.length === 0}
		<p>У вас нет курсов</p>
	{:else}
		{#each courses as course}
			<CourseBlock {course} />
		{/each}
	{/if}
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
</style>
