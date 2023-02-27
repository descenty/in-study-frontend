<script lang="ts">
	import { goto } from '$app/navigation';
	import type { IShortCourse } from '../models';
	import CheckSmallRounded from '~icons/material-symbols/check-small-rounded';
	import Button from './Button.svelte';
	export let course: IShortCourse;
</script>

<div class="course">
	<!-- svelte-ignore a11y-missing-content -->
	<a class="link" href={`courses/${course.id}/info`} />
	{#if course.enrolled}
		<div class="check-icon">
			<CheckSmallRounded />
		</div>
	{/if}
	<img src={course.image} alt="course" />
	<div class="info">
		<a class="title" href={`courses/${course.id}/info`}>{course.title}</a>
		<a href="user/{course.creator.id}" class="creator">{course.creator.name}</a>
		<div class="bottom">
			<span class="rating">★ {course.rating}</span>
			{#if course.enrolled}
				<Button
					on:click={() => goto(`courses/${course.id}/syllabus`)}
					size="large"
					alignSelf="flex-end"
					shadow={false}
					label="продолжить"
				/>
			{:else}
				<span class="price"
					>{course.price.toLocaleString('ru-RU', {
						style: 'currency',
						currency: 'RUB'
					})}
				</span>
			{/if}
		</div>
	</div>
</div>

<style lang="scss">
	@import './styles.scss';
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
		.link {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
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
			color: $primary-color;
			font-size: 2rem;
		}
		.info {
			display: flex;
			flex-direction: column;
			width: 100%;
			gap: 0.4em;
			z-index: 1;
			.title {
				font-size: 18px;
				font-weight: bold;
				text-align: left;
				width: 100%;
				transition: 0.1s;
				&:hover {
					color: $primary-color;
				}
			}
			.creator {
				font-size: 14px;
				color: rgb(75, 75, 75);
				transition: 0.1s;
				&:hover {
					color: $primary-color;
				}
			}
			.rating {
				font-size: 15px;
				color: rgb(75, 75, 75);
				&:hover {
					color: $primary-color;
				}
			}
			.enrolled {
				font-size: 14px;
				color: rgb(75, 75, 75);
			}
			.price {
				align-self: flex-end;
				font-size: 15px;
			}
			.bottom {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				z-index: 1;
			}
		}
		img {
			height: 100px;
		}
	}
</style>
