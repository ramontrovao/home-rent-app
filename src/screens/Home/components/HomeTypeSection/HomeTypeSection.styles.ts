import styled from "styled-components/native";

export const HomeTypeSectionContainer = styled.FlatList`
  margin-top: ${({ theme }) => theme.SPACING.LG};
`;

export const HomeTypeContainer = styled.View`
  padding: ${({ theme }) => theme.SPACING.LG};

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BLUE_BACKGROUND_200};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD};
`;

export const HomeTypeText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
