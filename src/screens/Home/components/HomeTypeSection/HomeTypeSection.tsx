import * as S from "./HomeTypeSection.styles";
import { type ListRenderItem } from "react-native";
import type { HomeTypeSectionProps, THomeType } from "./HomeTypeSection.types";
import { useState } from "react";
import { DEFAULT_THEME } from "@/styles/theme";

export const HomeTypeSection = ({ homeTypes }: HomeTypeSectionProps) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(1);

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
      contentContainerStyle={{ gap: DEFAULT_THEME.SPACING.LG }}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      testID="home_type_section"
      renderItem={renderItem}
    />
  );
};
