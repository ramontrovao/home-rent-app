import { type ListRenderItem, TouchableOpacity } from "react-native";
import * as S from "./BestForYouSection.styles";
import { BestForYouSectionProps } from "./BestForYouSection.types";
import { DEFAULT_THEME } from "@/styles/theme";
import type { THome } from "@/types/home";
import { BestForYouCard } from "./components/BestForYouCard/BestForYouCard";

export const BestForYouSection = ({ homes }: BestForYouSectionProps) => {
  const renderItem: ListRenderItem<THome> = ({ item }) => {
    const lastItem = homes[homes.length - 1];

    return (
      <BestForYouCard home={item} hasPadding={item.name === lastItem.name} />
    );
  };

  return (
    <S.BestForYouSectionContainer testID="best-for-you-section">
      <S.BestForYouHeaderContainer>
        <S.BestForYouTitleText>Best for you</S.BestForYouTitleText>

        <TouchableOpacity>
          <S.BestForYouSeeMoreText>See more</S.BestForYouSeeMoreText>
        </TouchableOpacity>
      </S.BestForYouHeaderContainer>

      <S.BestForYouListContainer
        showsVerticalScrollIndicator={false}
        data={homes}
        renderItem={renderItem}
        keyExtractor={(item) => item?.id?.toString()}
        contentContainerStyle={{ gap: DEFAULT_THEME.SPACING.LG }}
      />
    </S.BestForYouSectionContainer>
  );
};
