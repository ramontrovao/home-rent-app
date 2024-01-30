import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as S from "./FilterSection.styles";
import { DEFAULT_THEME } from "@/styles/theme";

export const FilterSection = () => {
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

        <S.FilterTextInput />
      </S.FilterInputContainer>
    </S.FilterSectionContainer>
  );
};
