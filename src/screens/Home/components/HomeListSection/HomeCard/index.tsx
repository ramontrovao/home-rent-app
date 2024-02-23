import * as S from './styles';
import { DEFAULT_THEME } from '@/styles/theme';
import type { HomeCardProps } from './types';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { TNavigatorParams } from '@/routes/router.types';

export const HomeCard = ({
  home: {
    imagesUri,
    name,
    address: { country, state, city },
  },
}: HomeCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TNavigatorParams>>();

  return (
    <S.HomeCardContainer onPress={() => navigation.push('product')}>
      <S.HomeCardBackgroundImage
        testID={`home-background-image`}
        imageStyle={{
          borderRadius: DEFAULT_THEME.BORDER_RADIUS.LG,
        }}
        source={{
          uri: imagesUri[0],
        }}
      >
        <S.BackdropContainer>
          <S.HomeCardContent>
            <S.HomeCardTitle>{name}</S.HomeCardTitle>
            <S.HomeCardAddress>
              {country}, {state} - {city}
            </S.HomeCardAddress>
          </S.HomeCardContent>
        </S.BackdropContainer>
      </S.HomeCardBackgroundImage>
    </S.HomeCardContainer>
  );
};
