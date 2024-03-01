import { HOMES_KEY, HOME_KEY } from '@constants/queries';
import { fetchHome, fetchHomes } from '@/services/home';
import { useQuery } from '@tanstack/react-query';
import { THome } from '@type/home';

export const useHome = () => {
  const getAllHomes = () => {
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

  return { getAllHomes, getHome };
};
