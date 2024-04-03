import { type ListRenderItem } from 'react-native';
import { HomeTypeCard } from './components/HomeTypeCard';
import { DEFAULT_THEME } from '@styles/theme';
import type { THomeType } from '@type/home-type';
import * as S from './styles';
import type { HomeTypeSectionProps } from './types';

export const HomeTypeSection = ({ homeTypes, selectedHomeType, onSelect }: HomeTypeSectionProps) => {
  const renderItem: ListRenderItem<THomeType> = ({ item: { name } }) => {
    const isSelected = selectedHomeType === name;


    return (
      <HomeTypeCard
        homeType={name}
        isSelected={isSelected}
        onPress={() => onSelect(name)}
      />
    );
  };

  return (
    <S.HomeTypeSectionContainer
      horizontal
      data={homeTypes}
      contentContainerStyle={{ gap: DEFAULT_THEME.SPACING.LG }}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      testID="home_type_section"
      renderItem={renderItem}
    />
  );
};
