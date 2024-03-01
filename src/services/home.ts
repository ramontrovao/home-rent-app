import { fakeAPI } from '@lib/axios';

export const fetchHomes = async () => {
  return fakeAPI.get('/homes').then((res) => res.data);
};

export const fetchHome = async (id: number) => {
  return fakeAPI.get(`/homes/${id}`).then((res) => res.data);
};
