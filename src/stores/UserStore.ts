import type { IUser } from "../models";
import { writable } from "svelte/store";
import { axiosInstance } from "../utils";
export const user = writable(undefined as IUser | undefined);

export const updateUserData = async () => {
  try {
    user.set((await axiosInstance.get<IUser>('auth/')).data);
  }
  catch (e) {
    console.log('failed to login')
  }
}
updateUserData()
