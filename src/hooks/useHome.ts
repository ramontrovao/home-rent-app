import { useQuery } from '@tanstack/react-query';
import { HOMES_KEY, HOME_KEY, HOME_TYPES_KEY } from '@constants/queries';
import { fetchHome, fetchHomeTypes, fetchHomes } from '@services/home';
import { THome } from '@type/home';
import { THomeType } from '@type/home-type';

export const useHome = () => {
  const getHomes = () => {
    const data = useQuery<THome[]>({
      queryKey: [HOMES_KEY],
      queryFn: fetchHomes,
    });

    return data;
  };

  const getHome = (id: number) => {
    const data = useQuery<THome>({
      queryKey: [HOME_KEY, id],
      queryFn: () => fetchHome(id),
    });

    return data;
  };

  const getHomeTypes = () => {
    const data = useQuery<THomeType[]>({
      queryKey: [HOME_TYPES_KEY],
      queryFn: fetchHomeTypes,
    });

    return data;
  }

  return { getHomes, getHome, getHomeTypes };
};
