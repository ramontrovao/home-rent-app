import { DEFAULT_THEME } from '@styles/theme';
import { type ListRenderItem } from 'react-native';
import { HomeTypeCard } from './HomeTypeCard';
import * as S from './styles';
import type { HomeTypeSectionProps } from './types';
import type { THomeType } from '@type/home-type';

export const HomeTypeSection = ({ homeTypes, onChangeHomeType, selectedHomeType }: HomeTypeSectionProps) => {
  const renderItem: ListRenderItem<THomeType> = ({ item: { name } }) => {
    const isSelected = selectedHomeType === name;

    const handleSelectItem = () => {
      onChangeHomeType(name);
    };

    return (
      <HomeTypeCard
        homeType={name}
        isSelected={isSelected}
        onPress={handleSelectItem}
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
