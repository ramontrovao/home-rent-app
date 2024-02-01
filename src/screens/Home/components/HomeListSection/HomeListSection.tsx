import { THome } from "@/types/home";
import * as S from "./HomeListSection.styles";
import type { HomeListSectionProps } from "./HomeListSection.types";
import { type ListRenderItem } from "react-native";

export const HomeListSection = ({ homes }: HomeListSectionProps) => {
  const renderItem: ListRenderItem<THome> = ({ item: { name } }) => {
    return (
      <S.HomeContainer>
        <S.HomeBackgroundImage
          source={{
            uri: "https://images.unsplash.com/photo-1706460546168-34705dde5d6c?q=80&w=2330&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        >
          <S.HomeContent>
            <S.HomeTitle>{name}</S.HomeTitle>
            <S.HomeAddress>{name}</S.HomeAddress>
          </S.HomeContent>
        </S.HomeBackgroundImage>
      </S.HomeContainer>
    );
  };

  return (
    <S.HomeListSectionContainer
      horizontal
      data={homes}
      contentContainerStyle={{ gap: 16 }}
      keyExtractor={(item) => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      testID="home_type_section"
      renderItem={renderItem}
    />
  );
};
