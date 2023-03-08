import axios from 'axios';
import { browser } from '$app/environment';
import { updateUserData } from './stores/UserStore';
import cookies from 'js-cookie';

export const baseURL = 'http://localhost:1337/api/';
export const axiosInstance = axios.create({
	baseURL
});

const updateAxiosInstance = () => {
	if (browser) {
		const token = localStorage.getItem('token');
		if (token) axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	}
};

export function setCookie(name: string, value: string) {
	document.cookie = name + '=' + value + ';';
}

export function getCookie(name: string) {
	const value = '; ' + document.cookie;
	const parts = value.split('; ' + name + '=');
	if (parts.length == 2) return parts.pop()?.split(';').shift();
}

export const setAuthToken = (token?: string) => {
	if (!token) {
		localStorage.removeItem('token');
		cookies.remove('token');
	} else {
		localStorage.setItem('token', token);
		cookies.set('token', token);
		updateAxiosInstance();
		updateUserData();
	}
};

updateAxiosInstance();

export const getNoun = (number: number, one: string, two: string, five: string) => {
	let n = Math.abs(number);
	n %= 100;
	if (n >= 5 && n <= 20) {
		return five;
	}
	n %= 10;
	if (n === 1) {
		return one;
	}
	if (n >= 2 && n <= 4) {
		return two;
	}
	return five;
};

export const shorten = (str: string, maxLen: number, separator = ' ') => {
	if (str.length <= maxLen) return str;
	return str.substr(0, str.lastIndexOf(separator, maxLen));
};
