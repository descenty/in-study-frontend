import axios from "axios";
import { browser } from "$app/environment"
import { updateUserData } from "./stores/UserStore";
export const axiosInstance = axios.create(
  {
    baseURL: 'http://localhost:3000/api/'
  }
)

const updateAxiosInstance = () => {
  if (browser) {
    const token = localStorage.getItem('token');
    if (token)
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

export const setAuthToken = (token?: string) => {
  if (!token)
    localStorage.removeItem('token');
  else {
    localStorage.setItem('token', token)
    updateAxiosInstance();
    updateUserData()
  }
}

updateAxiosInstance()