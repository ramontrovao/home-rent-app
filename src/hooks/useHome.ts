import { HOMES_KEY } from '@constants/queries';
import { getHomes } from '@services/getHomes';
import { useQuery } from '@tanstack/react-query';
import { THome } from '@type/home';

export const useHome = () => {
  const getAllHomes = () => {
    const data = useQuery<THome[]>({
      queryKey: [HOMES_KEY],
      queryFn: getHomes,
    });

    return data;
  };

  return { getAllHomes };
};
