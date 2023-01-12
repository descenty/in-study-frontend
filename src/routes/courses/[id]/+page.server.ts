import type { ICourse } from "../../../models";
import { baseURL } from "../../../utils";
import type { PageServerLoad } from "./$types";

export const load = (async ({ cookies, params, fetch }) => {
  const fetchCourse = async () => {
    const response = await fetch(baseURL + 'courses/' + params.id, {
      headers: {
        authorization: 'Bearer ' + cookies.get('token')
      }
    })
    return await response.json() as ICourse
  }
  return {
    course: fetchCourse()
  }
}) satisfies PageServerLoad