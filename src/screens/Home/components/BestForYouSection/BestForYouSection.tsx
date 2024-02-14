import { TouchableOpacity } from "react-native";
import * as S from "./BestForYouSection.styles";
import type { BestForYouSectionProps } from "./BestForYouSection.types";
import { BestForYouCard } from "./components/BestForYouCard/BestForYouCard";

export const BestForYouSection = ({ homes }: BestForYouSectionProps) => {
  return (
    <S.BestForYouSectionContainer testID="best-for-you-section">
      <S.BestForYouHeaderContainer>
        <S.BestForYouTitleText>Best for you</S.BestForYouTitleText>

        <TouchableOpacity>
          <S.BestForYouSeeMoreText>See more</S.BestForYouSeeMoreText>
        </TouchableOpacity>
      </S.BestForYouHeaderContainer>

      <S.BestForYouListContainer>
        {homes.map((home) => (
          <BestForYouCard key={home.id} home={home} />
        ))}
      </S.BestForYouListContainer>
    </S.BestForYouSectionContainer>
  );
};
