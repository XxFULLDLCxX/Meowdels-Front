import axios from 'axios';

export const server = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const publicPaths = ['/sign-in', '/sign-up'];

export const formatCPF = (CPF) => CPF.replace(/(\d{3})(\d{1,3})(\d{0,3})(\d{0,2})/, '$1.$2.$3-$4').replace(/\.?-$/, '');
