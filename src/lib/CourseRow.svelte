<script lang="ts">
	import PieChartOutlined from '~icons/ant-design/pie-chart-outlined';
	import type { IShortCourse } from '../models';

	export let course: IShortCourse;
</script>

<div class="course">
	<img src={course.image} alt={course.title} />
	<div>
		<h3>{course.title}</h3>
		<p>{course.creator.name}</p>
		<p class="progress"><PieChartOutlined />29/82</p>
	</div>
</div>

<style lang="scss">
	@import './styles.scss';
	.course {
		display: flex;
		align-items: center;
		gap: 1em;
		height: 80px;
		width: 100%;
		border-radius: 10px;
		padding: 0.5em;
		cursor: pointer;
		transition: box-shadow 0.2s ease-in-out;
		border: 1px solid rgb(244, 244, 244);
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
		img {
			height: 90%;
			width: 100px;
			object-fit: scale-down;
			border-radius: 10px;
		}
		h3 {
			transition: 0.3s;
		}
		.progress {
			display: flex;
			align-items: center;
			gap: 0.5em;
			color: $secondary-color;
		}
		&:hover {
			box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
			h3 {
				color: $primary-color;
			}
		}
	}
</style>
