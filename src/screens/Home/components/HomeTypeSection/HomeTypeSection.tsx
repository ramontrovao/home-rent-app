import { DEFAULT_THEME } from "@/styles/theme";
import * as S from "./HomeTypeSection.styles";
import { Text, TouchableOpacity } from "react-native";

export const HomeTypeSection = () => {
  const data = [
    {
      name: "Hotel",
    },
    {
      name: "Hotel",
    },
    {
      name: "Hotel",
    },
    {
      name: "Hotel",
    },
    {
      name: "Hotel",
    },
    {
      name: "Hotel",
    },
    {
      name: "Hotel",
    },
    {
      name: "Hotel",
    },
    {
      name: "Hotel",
    },
    {
      name: "Hotel",
    },
    {
      name: "Hotel",
    },
    {
      name: "Hotel",
    },
    {
      name: "Hotel",
    },
  ];

  return (
    <S.HomeTypeSectionContainer
      horizontal
      data={data}
      contentContainerStyle={{ gap: 16 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <S.HomeTypeContainer>
          <TouchableOpacity>
            <S.HomeTypeText>{item.name}</S.HomeTypeText>
          </TouchableOpacity>
        </S.HomeTypeContainer>
      )}
    />
  );
};
