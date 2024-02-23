import * as S from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type { BestForYouCardProps } from './types';
import { DEFAULT_THEME } from '@/styles/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { TNavigatorParams } from '@/routes/router.types';

export const BestForYouCard = ({
  home: { name, price, bedroomsQuantity, bathromsQuantity, imagesUri },
  hasPadding = false,
}: BestForYouCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TNavigatorParams>>();

  return (
    <S.BestForYouCardContainer
      onPress={() => navigation.push('product')}
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
