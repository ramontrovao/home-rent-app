import axios from 'axios';

export const fakeAPI = axios.create({
  baseURL: 'http://localhost:3000',
});
