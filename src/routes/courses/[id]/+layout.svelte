<script lang="ts">
	import NavMenu from '$lib/NavMenu.svelte';
	import type { IMenuItem } from '$lib/NavMenu.svelte';
	import type { LayoutData, PageData } from './$types';
	import Button from '$lib/Button.svelte';
	import ProgressBar from '$lib/ProgressBar.svelte';
	export let data: LayoutData;
	const { course } = data;
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
	<div class="sidebar">
		<img src={course.image} alt="course" />
		<h3>{course.title}</h3>
		<div class="stats">
			<ProgressBar value={0.3} />
			<span>45% материалов пройдено</span>
			<span>29/82 баллов получено</span>
		</div>
		<Button alignSelf="flex-start" primary label="Продолжить" />
		<NavMenu items={menuItems} />
	</div>
	<slot />
</section>

<style lang="scss">
	section {
		display: flex;
		gap: 1em;
		.sidebar {
			flex-basis: 300px;
			flex-grow: 0;
			flex-shrink: 0;
			display: flex;
			flex-direction: column;
			padding: 1em;
			gap: 1.5em;
			border-radius: 10px;
			img {
				width: 120px;
			}
			.stats {
				display: flex;
				flex-direction: column;
				gap: 0.5em;
				span {
					font-size: 13px;
				}
			}
		}
	}
</style>
