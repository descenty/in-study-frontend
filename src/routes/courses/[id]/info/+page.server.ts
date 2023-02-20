// import type { ICourse } from '../../../../models';
// import { baseURL } from '../../../../utils';
// import type { PageServerLoad } from '../edit/$types';

// export const load = (async ({ cookies, params, fetch }) => {
// 	const fetchCourse = async () => {
// 		const response = await fetch(baseURL + 'courses/' + params.id, {
// 			headers: {
// 				Authorization: 'Bearer ' + cookies.get('token')
// 			}
// 		});
// 		console.log(await response.json())
// 		return (await response.json()) as ICourse;
// 	};
// 	return {
// 		course: fetchCourse()
// 	};
// }) satisfies PageServerLoad;
