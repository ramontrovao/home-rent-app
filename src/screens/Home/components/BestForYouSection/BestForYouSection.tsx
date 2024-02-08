import { type ListRenderItem, TouchableOpacity } from "react-native";
import * as S from "./BestForYouSection.styles";
import { BestForYouSectionProps } from "./BestForYouSection.types";
import { DEFAULT_THEME } from "@/styles/theme";
import type { THome } from "@/types/home";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export const BestForYouSection = ({ homes }: BestForYouSectionProps) => {
  const renderItem: ListRenderItem<THome> = ({
    item: { name, price, bedroomsQuantity, bathromsQuantity, imagesUri },
  }) => {
    const lastItem = homes[homes.length - 1]

    return (
      <S.BestForYouCardContainer>
        <S.HomeImage
          source={{
            uri: imagesUri[0],
          }}
        />

        <S.BestForYouCardRightWrapper>
          <S.HomeNameText>{name}</S.HomeNameText>
          <S.HomePriceText>$ {price} / Year</S.HomePriceText>

          <S.HomeInfoWrapper hasPadding={name === lastItem.name}>
            <S.HomeInfoContainer>
              <S.HomeInfoText>
                <Icon
                  name="bed"
                  size={18}
                  color={DEFAULT_THEME.COLORS.GRAY_300}
                />
                {bedroomsQuantity} Bedroom
              </S.HomeInfoText>
            </S.HomeInfoContainer>

            <S.HomeInfoContainer>
              <Icon
                name="bathtub-outline"
                size={18}
                color={DEFAULT_THEME.COLORS.GRAY_300}
              />
              <S.HomeInfoText>{bathromsQuantity} Bathroom</S.HomeInfoText>
            </S.HomeInfoContainer>
          </S.HomeInfoWrapper>
        </S.BestForYouCardRightWrapper>
      </S.BestForYouCardContainer>
    );
  };

  return (
    <S.BestForYouSectionContainer>
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
