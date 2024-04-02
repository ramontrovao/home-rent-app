import { TouchableOpacity } from 'react-native';
import { BestForYouCard } from './components/BestForYouCard';
import * as S from './styles';
import { useHome } from '@hooks/useHome';

export const BestForYouSection = () => {
  const { getHomes } = useHome();
  const { data: homes } = getHomes();

  return (
    <S.BestForYouSectionContainer testID="best-for-you-section">
      <S.BestForYouHeaderContainer>
        <S.BestForYouTitleText>Best for you</S.BestForYouTitleText>

        <TouchableOpacity>
          <S.BestForYouSeeMoreText>See more</S.BestForYouSeeMoreText>
        </TouchableOpacity>
      </S.BestForYouHeaderContainer>

      <S.BestForYouListContainer>
        {homes?.map((home) => (
          <BestForYouCard key={home.id} home={home} />
        ))}
      </S.BestForYouListContainer>
    </S.BestForYouSectionContainer>
  );
};
