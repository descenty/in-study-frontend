<script lang="ts">
	import PieChartOutlined from '~icons/ant-design/pie-chart-outlined';
	import type { ICourse, IShortCourse } from '../models';
	import { getNoun } from '../utils';
	import Button from './Button.svelte';

	export let course: IShortCourse;
</script>

<div class="course">
	<img src={course.image} alt={course.title} />
	<h3>{course.title}</h3>
	<p>
		{course.price.toLocaleString('ru-RU', {
			currency: 'RUB',
			style: 'currency'
		})}
	</p>
	<p>{course.users} {getNoun(course.users, 'участник', 'участника', 'участников')}</p>
</div>

<style lang="scss">
	@import './styles.scss';
	.course {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: 1em;
		border-radius: 10px;
		border: 1px solid rgb(244, 244, 244);
		gap: 1em;
		padding: 1em;
		height: 80px;
		width: 100%;
		cursor: pointer;
		transition: box-shadow 0.2s ease-in-out;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
		* {
			padding-inline: 0.2em;
		}
		img {
			height: 100%;
			width: 100px;
			object-fit: scale-down;
		}
		h3 {
			font-weight: normal;
		}
		&:hover {
			box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
		}
	}
	@media (max-width: 500px) {
		.course {
			flex-direction: column;
			align-items: flex-start;
			height: 250px;
			padding: 1.5em;
		}
	}
</style>
