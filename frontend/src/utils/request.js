import axios from 'axios';

const BASE_API = process.env.VUE_APP_BASE_API;

const service = axios.create({
  baseURL: BASE_API,
});

export { BASE_API };

export default service;
