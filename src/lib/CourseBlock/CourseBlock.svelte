<script lang="ts">
	// import { CheckIcon } from 'svelte-feather-icons';
	import { goto } from '$app/navigation';
	import type { IShortCourse } from '../../models';
	export let course: IShortCourse;
</script>

<div class="course" on:mousedown={() => goto(`courses/${course.id}`)}>
	{#if course.enrolled}
		<div class="check-icon">
			<!-- <CheckIcon size="24" /> -->
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

<style lang="scss">
	.course {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		border-radius: 10px;
		height: 250px;
		gap: 0.5em;
		box-shadow: 1px 2px 12px 0 rgb(94 94 94 / 12%);
		cursor: pointer;
		transition: 0.15s;
		&:hover {
			box-shadow: 1px 2px 12px 0 rgb(94 94 94 / 30%);
		}
		.check-icon {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			right: 0;
			top: 0;
			width: 50px;
			height: 50px;
			color: rgb(7, 175, 7);
		}
		.info {
			display: flex;
			flex-direction: column;
			width: 100%;
			gap: 0.4em;
			h3 {
				font-size: 15px;
				text-align: left;
				width: 100%;
				transition: 0.1s;
				&:hover {
					color: #ff3e00;
				}
			}
			.creator {
				font-size: 14px;
				color: rgb(75, 75, 75);
				transition: 0.1s;
				&:hover {
					color: #ff3e00;
				}
			}
			.rating {
				font-size: 15px;
			}
			.enrolled {
				font-size: 14px;
				color: rgb(75, 75, 75);
			}
			.price {
				align-self: flex-end;
				font-size: 15px;
			}
		}
		img {
			height: 100px;
		}
	}
</style>
