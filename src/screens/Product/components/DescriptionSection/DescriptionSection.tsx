import * as S from "./DescriptionSection.styles";
import type { DescriptionSectionProps } from "./DescriptionSection.types";

export const DescriptionSection = ({
  description,
}: DescriptionSectionProps) => {
  return (
    <S.DescriptionContainer>
      <S.DescriptionTitle>Description</S.DescriptionTitle>

      <S.DescriptionContent>{description}</S.DescriptionContent>
    </S.DescriptionContainer>
  );
};
