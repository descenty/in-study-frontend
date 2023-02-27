<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const { course } = data;
</script>

<div>
	{#each course.lessons as lesson}
		<div>
			<h3>{lesson.title}</h3>
		</div>
	{/each}
</div>
