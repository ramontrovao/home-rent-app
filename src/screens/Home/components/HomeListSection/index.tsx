import * as S from "./styles";
import { THome } from "@/types/home";
import type { HomeListSectionProps } from "./types";
import { type ListRenderItem } from "react-native";
import { DEFAULT_THEME } from "@/styles/theme";
import { HomeCard } from "./HomeCard";

export const HomeListSection = ({ homes }: HomeListSectionProps) => {
  const renderItem: ListRenderItem<THome> = ({ item }) => (
    <HomeCard home={item} />
  );

  return (
    <S.HomeListSectionContainer
      horizontal
      data={homes}
      contentContainerStyle={{ gap: DEFAULT_THEME.SPACING.XXL }}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      testID="home-list-section"
      renderItem={renderItem}
    />
  );
};
