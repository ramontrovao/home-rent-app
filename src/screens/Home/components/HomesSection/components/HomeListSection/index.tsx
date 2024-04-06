import { DEFAULT_THEME } from '@styles/theme';
import type { THome } from '@type/home';
import { type ListRenderItem } from 'react-native';
import { HomeCard } from './components/HomeCard';
import * as S from './styles';
import type { HomeListSectionProps } from './types';

export const HomeListSection = ({ homes }: HomeListSectionProps) => {
  const renderItem: ListRenderItem<THome> = ({ item }) => (
    <HomeCard home={item} />
  );

  return (
    <>
      {homes && (
        <S.HomeListSectionContainer
          horizontal
          data={homes}
          contentContainerStyle={{ gap: DEFAULT_THEME.SPACING.XXL }}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          testID="home-list-section"
          renderItem={renderItem}
        />
      )}
    </>
  );
};
