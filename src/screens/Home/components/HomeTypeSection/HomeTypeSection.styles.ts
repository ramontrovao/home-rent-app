import styled from "styled-components/native";
import type {
  HomeTypeContainerStyledProps,
  THomeType,
} from "./HomeTypeSection.types";
import { FlatList } from "react-native";

export const HomeTypeSectionContainer = styled(FlatList<THomeType>)`
  margin-top: ${({ theme }) => theme.SPACING.LG}px;
`;

export const HomeTypeContainer = styled.TouchableOpacity<HomeTypeContainerStyledProps>`
  padding: ${({ theme }) => theme.SPACING.LG}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.COLORS.BLUE_BACKGROUND_200
      : theme.COLORS.GRAY_BACKGROUND_200};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD}px;
`;

export const HomeTypeText = styled.Text<HomeTypeContainerStyledProps>`
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.COLORS.WHITE : theme.COLORS.BLACK};
`;
