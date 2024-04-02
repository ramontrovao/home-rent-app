import { useState } from 'react';
import { type ListRenderItem } from 'react-native';
import { HomeTypeCard } from './HomeTypeCard';
import { DEFAULT_THEME } from '@styles/theme';
import type { THomeType, THomeTypeNames } from '@type/home-type';
import { useHome } from '@hooks/useHome';
import * as S from './styles';

export const HomeTypeSection = () => {
  const [selectedHomeType, setSelectedHomeType] = useState<THomeTypeNames | undefined>(
    undefined
  );
  
  const { getHomes, getHomeTypes } = useHome()
  getHomes({ ...(selectedHomeType && { homeType: selectedHomeType }) })
  const { data: homeTypesData } = getHomeTypes();

  const renderItem: ListRenderItem<THomeType> = ({ item: { name } }) => {
    const isSelected = selectedHomeType === name;

    const handleSelectItem = () => {
      setSelectedHomeType(name);
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
      data={homeTypesData}
      contentContainerStyle={{ gap: DEFAULT_THEME.SPACING.LG }}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      testID="home_type_section"
      renderItem={renderItem}
    />
  );
};
