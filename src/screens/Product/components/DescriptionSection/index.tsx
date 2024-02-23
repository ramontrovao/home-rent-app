import * as S from './styles';
import type { DescriptionSectionProps } from './types';

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
