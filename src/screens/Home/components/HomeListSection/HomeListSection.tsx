import { THome } from "@/types/home";
import * as S from "./HomeListSection.styles";
import type { HomeListSectionProps } from "./HomeListSection.types";
import { type ListRenderItem } from "react-native";

export const HomeListSection = ({ homes }: HomeListSectionProps) => {
  const renderItem: ListRenderItem<THome> = ({ item: { name, imagesUri } }) => {
    return (
      <S.HomeContainer>
        <S.HomeBackgroundImage
          imageStyle={{
            borderRadius: 24,
          }}
          source={{
            uri: imagesUri[0],
          }}
        >
          <S.BackdropContainer>
            <S.HomeContent>
              <S.HomeTitle>{name}</S.HomeTitle>
              <S.HomeAddress>{name}</S.HomeAddress>
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
      contentContainerStyle={{ gap: 24 }}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      testID="home_type_section"
      renderItem={renderItem}
    />
  );
};
