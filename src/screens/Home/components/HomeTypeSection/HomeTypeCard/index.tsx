import * as S from './styles';
import type { HomeTypeCardProps } from './types';

export const HomeTypeCard = ({
  homeType,
  isSelected = false,
  ...rest
}: HomeTypeCardProps) => {
  return (
    <S.HomeTypeCardContainer isSelected={isSelected} {...rest}>
      <S.HomeTypeCardText isSelected={isSelected}>
        {homeType}
      </S.HomeTypeCardText>
    </S.HomeTypeCardContainer>
  );
};
