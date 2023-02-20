<script lang="ts">
	import Menu from '$lib/Menu.svelte';
	import type { IMenuItem } from '$lib/Menu.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let { course } = data;
	const menuItems: IMenuItem[] = [
		{
			label: 'Описание',
			href: 'info'
		},
		{
			label: 'Содержание',
			href: 'syllabus'
		}
	];
</script>

<section>
	<Menu items={menuItems} />
	<div>
		<h2>{course.title}</h2>
		{course.isCreator}
	</div>
</section>

<!-- <h1>{JSON.stringify(course)}</h1> -->
<style lang="scss">
	section {
		display: flex;
		gap: 1em;
	}
</style>
