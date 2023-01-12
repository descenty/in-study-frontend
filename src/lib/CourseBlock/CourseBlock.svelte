<script lang="ts">
	import { CheckIcon } from 'svelte-feather-icons';
	import { goto } from '$app/navigation';
	import type { IShortCourse } from 'src/models';
	export let course: IShortCourse;
</script>

<div class="course" on:mousedown={() => goto(`courses/${course.id}`)}>
	{#if course.enrolled}
		<div class="check-icon">
			<CheckIcon size="24" />
		</div>
	{/if}
	<img src={course.image} alt="course" />
	<div class="info">
		<h3>{course.title}</h3>
		<a href="user/{course.creator.id}" class="creator">{course.creator.name}</a>
		<span class="rating">★ {course.rating}</span>
		<span class="price"
			>{course.price.toLocaleString('ru-RU', {
				style: 'currency',
				currency: 'RUB'
			})}</span
		>
	</div>
</div>

<style src="./styles.postcss"></style>
