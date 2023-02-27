<script lang="ts">
	import Button from '$lib/Button.svelte';
	import { axiosInstance } from '../../../../utils';
	import type { PageData } from './$types';

	export let data: PageData;
	let { course } = data;

	const enroll = async () => {
		await axiosInstance.get(`/courses/${course.id}/enroll`);
		course = { ...course, enrolled: true };
	};
</script>

<div class="course">
	<h2>{course.title}</h2>
	<span class="rating">★ {course.rating}</span>
	<h3>О курсе</h3>
	<p>{course.description}</p>
	<h3>Уроки</h3>
	<div>
		{#each course.lessons as lesson}
			<div>
				<span>{lesson.title}</span>
				<!-- <p>{lesson.description}</p> -->
			</div>
		{/each}
		<div />
	</div>
	{#if course.enrolled}
		<span class="enrolled">Вы уже поступили на этот курс</span>
	{:else}
		<Button alignSelf="flex-start" primary label="Поступить на курс" on:click={async () => await enroll()} />
	{/if}
	<h4>Преподаватель</h4>
	<span>{course.creator.name}</span>
</div>

<style lang="scss">
	.course {
		display: flex;
		flex-direction: column;
		gap: 1em;
		padding: 1em;
		/* img {
			height: 300px;
			object-fit: scale-down;
			display: flex;
			background: red;
		} */
		.enrolled {
			color: green;
		}
	}
</style>
