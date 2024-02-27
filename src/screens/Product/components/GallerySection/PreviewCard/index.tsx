import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { TNavigatorParams } from '@routes/router.types';
import { DEFAULT_THEME } from '@styles/theme';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as S from './styles';
import { PreviewCardProps } from './types';

export const PreviewCard = ({
  home: {
    name,
    address: { country, state, city },
    bathromsQuantity,
    bedroomsQuantity,
  },
  selectedImage,
}: PreviewCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<TNavigatorParams>>();

  return (
    <S.PreviewCardContainer>
      <S.PreviewCardBackgroundImage
        testID={`preview-card-background-image`}
        imageStyle={{
          borderRadius: DEFAULT_THEME.BORDER_RADIUS.LG,
        }}
        source={{
          uri: selectedImage,
        }}
      >
        <S.BackdropContainer>
          <S.PreviewCardHeaderContainer>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <S.PreviewCardHeaderIconContainer>
                <Icon
                  name="arrow-left"
                  size={24}
                  color={DEFAULT_THEME.COLORS.WHITE}
                />
              </S.PreviewCardHeaderIconContainer>
            </TouchableOpacity>

            <TouchableOpacity>
              <S.PreviewCardHeaderIconContainer>
                <Icon
                  name="bookmark-outline"
                  size={24}
                  color={DEFAULT_THEME.COLORS.WHITE}
                />
              </S.PreviewCardHeaderIconContainer>
            </TouchableOpacity>
          </S.PreviewCardHeaderContainer>

          <S.PreviewCardContent>
            <S.PreviewCardTitle>{name}</S.PreviewCardTitle>
            <S.PreviewCardAddress>
              {country}, {state} - {city}
            </S.PreviewCardAddress>

            <S.PreviewCardInformationWrapper>
              <S.PreviewCardInformationContainer>
                <S.PreviewCardInformationIconContainer>
                  <Icon
                    name="bed"
                    size={18}
                    color={DEFAULT_THEME.COLORS.WHITE}
                  />
                </S.PreviewCardInformationIconContainer>

                <S.PreviewCardInformationText>
                  {bedroomsQuantity} Bedroom
                </S.PreviewCardInformationText>
              </S.PreviewCardInformationContainer>

              <S.PreviewCardInformationContainer>
                <S.PreviewCardInformationIconContainer>
                  <Icon
                    name="bathtub-outline"
                    size={18}
                    color={DEFAULT_THEME.COLORS.WHITE}
                  />
                </S.PreviewCardInformationIconContainer>

                <S.PreviewCardInformationText>
                  {bathromsQuantity} Bathroom
                </S.PreviewCardInformationText>
              </S.PreviewCardInformationContainer>
            </S.PreviewCardInformationWrapper>
          </S.PreviewCardContent>
        </S.BackdropContainer>
      </S.PreviewCardBackgroundImage>
    </S.PreviewCardContainer>
  );
};
