import { DEFAULT_THEME } from '@styles/theme';
import { useEffect, useState } from 'react';
import { type ListRenderItem } from 'react-native';
import { HomeTypeCard } from './HomeTypeCard';
import * as S from './styles';
import type { HomeTypeSectionProps } from './types';
import { THomeType, THomeTypeNames } from '@type/home-type';
import { useHome } from '@/hooks/useHome';

export const HomeTypeSection = ({ homeTypes }: HomeTypeSectionProps) => {
  const [selectedHomeTypeName, setSelectedHomeTypeName] = useState<THomeTypeNames | null>(
    null
  );
  const { getHomes } = useHome();

  const { refetch } = getHomes({...(selectedHomeTypeName && { homeType: selectedHomeTypeName })})

  const renderItem: ListRenderItem<THomeType> = ({ item: { name } }) => {
    const isSelected = selectedHomeTypeName === name;

    const handleSelectItem = () => {
      setSelectedHomeTypeName(name);
    };

    return (
      <HomeTypeCard
        homeType={name}
        isSelected={isSelected}
        onPress={handleSelectItem}
      />
    );
  };

  useEffect(() => {
    if (selectedHomeTypeName) {
      refetch()
    }
  }, [selectedHomeTypeName])

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
