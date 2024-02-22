import * as S from "./styles";
import { PriceSectionProps } from "./types";

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
