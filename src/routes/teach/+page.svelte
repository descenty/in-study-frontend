<script type="ts">
	import { onMount } from 'svelte';
	import { axiosInstance } from '../../utils';
	import type { ICourse } from '../../models';
	import { user } from '../../stores/UserStore';

	let createdCourses: ICourse[] = [];
	onMount(async () => {
		createdCourses = (await axiosInstance.get<ICourse[]>(`course?creatorId=${$user.id}`)).data;
	});
</script>

<svelte:head>
	<title>Преподавание</title>
</svelte:head>
<h3>Курсы</h3>
