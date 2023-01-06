<script lang="ts">
	import { onMount } from 'svelte';
	import { axiosInstance } from '../../utils';
	import type { ICourse } from '../../models';

	let courses: ICourse[] = [];
	onMount(async () => {
		courses = (await axiosInstance.get<ICourse[]>('courses')).data;
	});
</script>

<svelte:head>
  <title>Каталог</title>
</svelte:head>

<h2>Каталог курсов</h2>
<section class="courses">
	{#each courses as course}
		<div class="course">
      <img src={course.image} alt="course" />
			<h3>{course.title}</h3>
			<p>{course.description}</p>
		</div>
	{/each}
</section>

<style scoped lang="postcss">
  h2 {
    margin-block: 1em;
    font-size: 28px;
  }
	.courses {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
		.course {
			padding: 10px;
      background: white;
      border-radius: 10px;
      height: 200px;
		}
	}
</style>
