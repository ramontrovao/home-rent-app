import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as S from "./FilterSection.styles";
import { DEFAULT_THEME } from "@/styles/theme";
import { useState } from "react";

export const FilterSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <S.FilterSectionContainer>
      <S.FilterInputContainer>
        <S.FilterIconContainer>
          <Icon
            name="magnify"
            size={32}
            color={DEFAULT_THEME.COLORS.GRAY_300}
          />
        </S.FilterIconContainer>

        <S.FilterTextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          testID="filter_text_input"
        />
      </S.FilterInputContainer>

      <S.FilterButton testID="filter_button">
        <Icon
          name="filter-variant"
          size={32}
          color={DEFAULT_THEME.COLORS.WHITE}
        />
      </S.FilterButton>
    </S.FilterSectionContainer>
  );
};
