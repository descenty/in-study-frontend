import type { IUser } from "../models";
import { writable } from "svelte/store";
import { axiosInstance, setAuthToken } from "../utils";
import { goto } from "$app/navigation";
export const user = writable<IUser>(undefined);

export const login = async (email: string, password: string): Promise<{ success: boolean, message?: string }> => {
  try {
    const token = (
      await axiosInstance.post<{ token: string }>('auth/login/', { email, password })
    ).data.token;
    setAuthToken(token);
    return { success: true };
  } catch (e) {
    const axiosError = e as AxiosError;
    return { success: false, message: axiosError.response?.data.message }
  }
};

export const logout = async () => {
  setAuthToken(undefined);
  user.set(undefined);
  goto('/')
}

export const updateUserData = async () => {
  try {
    user.set((await axiosInstance.get<IUser>('auth/')).data);
  }
  catch (e) {
    console.log('failed to login')
  }
}
updateUserData()
