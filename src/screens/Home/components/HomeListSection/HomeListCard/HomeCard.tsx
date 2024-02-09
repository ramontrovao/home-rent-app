import * as S from "./HomesCard.styles";
import { DEFAULT_THEME } from "@/styles/theme";
import type { HomeCardProps } from "./HomeCard.types";

export const HomeCard = ({
  home: {
    imagesUri,
    name,
    address: { country, state, city },
  },
}: HomeCardProps) => {
  return (
    <S.HomeCardContainer>
      <S.HomeCardBackgroundImage
        testID={`home-background-image`}
        imageStyle={{
          borderRadius: DEFAULT_THEME.BORDER_RADIUS.LG,
        }}
        source={{
          uri: imagesUri[0],
        }}
      >
        <S.BackdropContainer>
          <S.HomeCardContent>
            <S.HomeCardTitle>{name}</S.HomeCardTitle>
            <S.HomeCardAddress>
              {country}, {state} - {city}
            </S.HomeCardAddress>
          </S.HomeCardContent>
        </S.BackdropContainer>
      </S.HomeCardBackgroundImage>
    </S.HomeCardContainer>
  );
};
