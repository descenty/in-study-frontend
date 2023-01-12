import axios from "axios";
import { browser } from "$app/environment"
import { updateUserData } from "./stores/UserStore";

export const baseURL = 'http://localhost:3000/api/'
export const axiosInstance = axios.create(
  {
    baseURL
  }
)

const updateAxiosInstance = () => {
  if (browser) {
    const token = localStorage.getItem('token');
    if (token)
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

export function setCookie(name: string, value: string) {
  document.cookie = name + "=" + value + ";"
}

export function getCookie(name: string) {
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop()?.split(";").shift();
}

export const setAuthToken = (token?: string) => {
  if (!token) {
    localStorage.removeItem('token');
    document.cookie = 'token=; Max-Age=0'
  }
  else {
    localStorage.setItem('token', token)
    setCookie('token', token)
    updateAxiosInstance();
    updateUserData()
  }
}

updateAxiosInstance()