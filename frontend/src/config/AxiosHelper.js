import axios from 'axios'
export const baseurl = import.meta.env.VITE_BACKEND_URL
export const AxiosApi = axios.create({
    baseURL: baseurl
});