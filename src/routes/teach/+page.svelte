<script lang="ts">
	import { axiosInstance } from '../../utils';
	import { onMount } from 'svelte';
	import { user } from '../../stores/UserStore';
	import CourseBlock from '$lib/CourseBlock.svelte';
	import type { ICourse } from '../../models';
	import type { PageData } from './$types';
	import CourseRowCreator from '$lib/CourseRowCreator.svelte';
	import Button from '$lib/Button.svelte';
	export let data: PageData;
	const { courses } = data;
</script>

<svelte:head>
	<title>Преподавание</title>
</svelte:head>
<Button alignSelf="flex-start" primary label="Создать курс" />
<h2>Мои Курсы</h2>
<section class="courses">
	{#if courses.length === 0}
		<p>У вас нет курсов</p>
	{:else}
		{#each courses as course}
			<a href={`courses/${course.id}/info`}>
				<CourseRowCreator {course} />
			</a>
		{/each}
	{/if}
</section>

<style lang="scss">
	h2 {
		margin-block: 1em;
		font-size: 28px;
	}
	.courses {
		display: flex;
		flex-direction: column;
		gap: 1em;
		width: 600px;
		max-width: 100%;
	}
</style>
