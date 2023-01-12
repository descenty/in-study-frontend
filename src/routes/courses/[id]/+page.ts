import type { ICourse, IShortCourse } from "../../../models";
import { baseURL } from "../../../utils";
import type { PageLoad } from "./$types";

export const load = (async ({ params, fetch }) => {
  const fetchCourse = async () => {
    const response = await fetch(baseURL + 'courses/' + params.id)
    return await response.json() as ICourse
  }
  return {
    course: fetchCourse()
  }
}) satisfies PageLoad