<script lang="ts">
	import PieChartOutlined from '~icons/ant-design/pie-chart-outlined';
	import type { ICourse, IShortCourse } from '../models';
	import Button from './Button.svelte';

	export let course: IShortCourse;
</script>

<div class="course">
	<img src={course.image} alt={course.title} />
	<div>
		<h3>{course.title}</h3>
		<p>{course.creator.name}</p>
		<p class="progress"><PieChartOutlined />29/82</p>
	</div>
	<div>
		<Button label="Продолжить" />
	</div>
</div>

<style lang="scss">
	@import './styles.scss';
	.course {
		display: flex;
		align-items: center;
		gap: 2em;
		height: 70px;
		width: 100%;
		img {
			height: 100%;
			width: 100px;
			object-fit: cover;
			border-radius: 10px;
		}
		.progress {
			display: flex;
			align-items: center;
			gap: 0.5em;
			color: $secondary-color;
		}
	}
</style>
