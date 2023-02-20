import type { IUser } from '../models';
import { writable } from 'svelte/store';
import { axiosInstance, setAuthToken } from '../utils';
import { goto, invalidateAll } from '$app/navigation';
import type { AxiosError } from 'axios';
import { browser } from '$app/environment';
export const user = writable<IUser | undefined>(undefined);

export const login = async (
	email: string,
	password: string
): Promise<{ success: boolean; message?: string }> => {
	try {
		const token = (await axiosInstance.post<{ token: string }>('auth/login/', { email, password }))
			.data.token;
		setAuthToken(token);
		return { success: true };
	} catch (e) {
		const axiosError = e as any;
		return { success: false, message: axiosError.response?.data?.message };
	}
};

export const logout = async () => {
	setAuthToken(undefined);
	user.set(undefined);
	location.href = '/';
};

export const updateUserData = async () => {
	try {
		user.set((await axiosInstance.get<IUser>('auth/')).data);
	} catch (e) {
		console.log('failed to login');
		setAuthToken(undefined);
	}
};
browser && localStorage.getItem('token') != null && updateUserData();
