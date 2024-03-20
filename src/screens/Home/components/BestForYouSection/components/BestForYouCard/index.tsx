import { useNavigation } from '@react-navigation/native';
import type { TStackNavigationProps } from '@/routes/types';
import { DEFAULT_THEME } from '@styles/theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as S from './styles';
import type { BestForYouCardProps } from './types';

export const BestForYouCard = ({
  home: { id, name, price, bedroomsQuantity, bathromsQuantity, imagesUri },
  hasPadding = false,
}: BestForYouCardProps) => {
  const navigation = useNavigation<TStackNavigationProps>();

  return (
    <S.BestForYouCardContainer
      onPress={() => navigation.push('product', { id })}
      hasPadding={hasPadding}
    >
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
