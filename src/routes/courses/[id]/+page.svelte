<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { course } = data;
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
	<h4>Преподаватель</h4>
	<span>{course.creator.name}</span>
</div>

<style src="./styles.postcss">
</style>
