import { TouchableOpacity } from "react-native";
import * as S from "./BestForYouSection.styles"
import { BestForYouSectionProps } from "./BestForYouSection.types";

export const BestForYouSection = ({ homes }: BestForYouSectionProps) => {
  return (
    <S.BestForYouSectionContainer>
      <S.BestForYouHeaderContainer>
        <S.BestForYouTitleText>Best for you</S.BestForYouTitleText>

        <TouchableOpacity>
          <S.BestForYouSeeMoreText>See more</S.BestForYouSeeMoreText>
        </TouchableOpacity>
      </S.BestForYouHeaderContainer>
    </S.BestForYouSectionContainer>
  )
}