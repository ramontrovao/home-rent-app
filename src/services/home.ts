import { THome } from '@type/home';
import { fakeAPI } from '@lib/axios';
import { THomeType } from '@type/home-type';

export const fetchHomes = async (): Promise<THome[]> => {
  return fakeAPI.get('/homes').then((res) => res.data);
};

export const fetchHome = async (id: number): Promise<THome> => {
  return fakeAPI.get(`/homes/${id}`).then((res) => res.data);
};

export const fetchHomeTypes = async (): Promise<THomeType[]> => {
  return fakeAPI.get(`/home_types`).then((res) => res.data);
}
