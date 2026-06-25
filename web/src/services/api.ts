import axios from 'axios'

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://mini-project-0f2w.onrender.com';

const api = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  withCredentials: true,
})

export default api
