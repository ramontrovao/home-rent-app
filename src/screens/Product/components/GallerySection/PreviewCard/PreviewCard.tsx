import * as S from "./PreviewCard.styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DEFAULT_THEME } from "@/styles/theme";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { TNavigatorParams } from "@/routes/router.types";
import { PreviewCardProps } from "./PreviewCard.types";
import { TouchableOpacity } from "react-native";

export const PreviewCard = ({
  home: {
    imagesUri,
    name,
    address: { country, state, city },
  },
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
          uri: imagesUri[0],
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
                  6 Bedroom
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
                  6 Bathroom
                </S.PreviewCardInformationText>
              </S.PreviewCardInformationContainer>
            </S.PreviewCardInformationWrapper>
          </S.PreviewCardContent>
        </S.BackdropContainer>
      </S.PreviewCardBackgroundImage>
    </S.PreviewCardContainer>
  );
};
