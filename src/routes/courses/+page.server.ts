import type { ICourse, IShortCourse } from "../../models";
import { baseURL, getCookie } from "../../utils";
import type { PageServerLoad } from "./$types";

export const load = (async ({ cookies, fetch }) => {
  const fetchCourses = async () => {
    const response = await fetch(baseURL + 'courses', {
      headers: {
        authorization: 'Bearer ' + cookies.get('token')
      }
    })
    return await response.json() as IShortCourse[]

  }
  return {
    courses: fetchCourses()
  }
}) satisfies PageServerLoad