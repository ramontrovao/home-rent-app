import { THome } from '@type/home';
import { fakeAPI } from '@lib/axios';
import { THomeType } from '@type/home-type';
import { FetchHomesProps } from './types';
import { updateQueryStringParameter } from '@/utils/updateQueryStringParameter';

export const fetchHomes = async (props?: FetchHomesProps): Promise<THome[]> => {
  let url = '/homes'
  const restFormattedToArray = Object.entries(props || {})

  restFormattedToArray.map(([key, value]) => {
    url = updateQueryStringParameter(url, key, value)
  })

  return fakeAPI.get(url).then((res) => res.data);
};

export const fetchHome = async (id: number): Promise<THome> => {
  return fakeAPI.get(`/homes/${id}`).then((res) => res.data);
};

export const fetchHomeTypes = async (): Promise<THomeType[]> => {
  return fakeAPI.get(`/home_types`).then((res) => res.data);
}