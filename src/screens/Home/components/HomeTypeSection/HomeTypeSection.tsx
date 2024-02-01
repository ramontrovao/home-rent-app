import * as S from "./HomeTypeSection.styles";
import { type ListRenderItem } from "react-native";
import type { HomeTypeSectionProps, THomeType } from "./HomeTypeSection.types";
import { useState } from "react";

export const HomeTypeSection = ({ homeTypes }: HomeTypeSectionProps) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const renderItem: ListRenderItem<THomeType> = ({ item }) => {
    const isSelected = selectedItem === item.id;

    const handleSelectItem = () => setSelectedItem(item.id);

    return (
      <S.HomeTypeContainer onPress={handleSelectItem} isSelected={isSelected}>
        <S.HomeTypeText isSelected={isSelected}>{item.name}</S.HomeTypeText>
      </S.HomeTypeContainer>
    );
  };

  return (
    <S.HomeTypeSectionContainer
      horizontal
      data={homeTypes}
      contentContainerStyle={{ gap: 16 }}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      testID="home_type_section"
      renderItem={renderItem}
    />
  );
};
