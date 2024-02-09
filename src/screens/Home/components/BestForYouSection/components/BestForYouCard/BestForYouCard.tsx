import * as S from "./BestForYouCard.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import type { BestForYouCardProps } from "./BestForYouCard.types";
import { DEFAULT_THEME } from "@/styles/theme";

export const BestForYouCard = ({
  home: { name, price, bedroomsQuantity, bathromsQuantity, imagesUri },
  hasPadding = false,
}: BestForYouCardProps) => {
  return (
    <S.BestForYouCardContainer hasPadding={hasPadding}>
      <S.HomeImage
        source={{
          uri: imagesUri[0],
        }}
      />

      <S.BestForYouCardRightWrapper>
        <S.HomeNameText>{name}</S.HomeNameText>
        <S.HomePriceText>$ {price} / Year</S.HomePriceText>

        <S.HomeInfoWrapper>
          <S.HomeInfoContainer>
            <Icon name="bed" size={18} color={DEFAULT_THEME.COLORS.GRAY_300} />
            <S.HomeInfoText>{bedroomsQuantity} Bedroom</S.HomeInfoText>
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
