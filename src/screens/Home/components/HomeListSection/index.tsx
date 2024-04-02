import { DEFAULT_THEME } from '@styles/theme';
import type { THome } from '@type/home';
import { type ListRenderItem } from 'react-native';
import { HomeCard } from './HomeCard';
import * as S from './styles';
import { useHome } from '@hooks/useHome';

export const HomeListSection = () => {
  const { getHomes } = useHome();
  const { data: homesData } = getHomes();

  const renderItem: ListRenderItem<THome> = ({ item }) => (
    <HomeCard home={item} />
  );

  return (
    <S.HomeListSectionContainer
      horizontal
      data={homesData}
      contentContainerStyle={{ gap: DEFAULT_THEME.SPACING.XXL }}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      testID="home-list-section"
      renderItem={renderItem}
    />
  );
};
