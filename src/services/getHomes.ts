import { fakeAPI } from '@lib/axios';

export const getHomes = async () => {
  return fakeAPI.get('/homes').then((res) => res.data);
};
