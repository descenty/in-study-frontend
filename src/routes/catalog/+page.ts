import type { ICourse, IShortCourse } from "../../models";
import { baseURL } from "../../utils";
import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const fetchCourses = async () => {
    const response = await fetch(baseURL + 'courses')
    return await response.json() as IShortCourse[]

  }
  return {
    courses: await fetchCourses()
  }
}) satisfies PageLoad