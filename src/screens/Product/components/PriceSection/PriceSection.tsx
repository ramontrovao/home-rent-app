import * as S from "./PriceSection.styles";
import { PriceSectionProps } from "./PriceSection.types";

export const PriceSection = ({ price }: PriceSectionProps) => {
  return (
    <S.PriceContainer>
      <S.PriceContainerLeftWrapper>
        <S.PriceTitle>Price</S.PriceTitle>

        <S.PriceContent>$ {price} / Year</S.PriceContent>
      </S.PriceContainerLeftWrapper>

      <S.RentButton>
        <S.RentText>Rent Now</S.RentText>
      </S.RentButton>
    </S.PriceContainer>
  );
};
