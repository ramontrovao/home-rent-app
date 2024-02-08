import { THome } from "@/types/home";
import * as S from "./HomeListSection.styles";
import type { HomeListSectionProps } from "./HomeListSection.types";
import { type ListRenderItem } from "react-native";
import { DEFAULT_THEME } from "@/styles/theme";

export const HomeListSection = ({ homes }: HomeListSectionProps) => {
  const renderItem: ListRenderItem<THome> = ({ item: { name, imagesUri, address: { country, state, city } } }) => {
    const itemIndex = homes.findIndex(home => home.name === name)
    
    return (
      <S.HomeContainer>
        <S.HomeBackgroundImage
          testID={`home-background-image-${itemIndex + 1}`}
          imageStyle={{
            borderRadius: DEFAULT_THEME.BORDER_RADIUS.LG,
          }}
          source={{
            uri: imagesUri[0],
          }}
        >
          <S.BackdropContainer>
            <S.HomeContent>
              <S.HomeTitle>{name}</S.HomeTitle>
              <S.HomeAddress>{country}, {state} - {city}</S.HomeAddress>
            </S.HomeContent>
          </S.BackdropContainer>
        </S.HomeBackgroundImage>
      </S.HomeContainer>
    );
  };

  return (
    <S.HomeListSectionContainer
      horizontal
      data={homes}
      contentContainerStyle={{ gap: DEFAULT_THEME.SPACING.XXL }}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      testID="home-list-section"
      renderItem={renderItem}
    />
  );
};
