import axios from 'axios';

export const baseApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL || 'http:localhost:5001'}/api`,
  withCredentials: true,
});
