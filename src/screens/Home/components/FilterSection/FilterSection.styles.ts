import styled from "styled-components/native";

export const FilterSectionContainer = styled.View`
  width: 100%;

  flex-direction: row;
  gap: ${({ theme }) => theme.SPACING.MD};
`;

export const FilterInputContainer = styled.View`
  flex: 1;
  flex-direction: row;

  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD};
  background-color: ${({ theme }) => theme.COLORS.GRAY_BACKGROUND_200};
`;

export const FilterIconContainer = styled.View`
  padding: ${({ theme }) => theme.SPACING.LG};

  justify-content: center;
  align-items: center;
`;

export const FilterTextInput = styled.TextInput`
  padding: ${({ theme }) => theme.SPACING.LG};

  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
  overflow: hidden;
`;

export const FilterButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.SPACING.LG};
  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD};
  background-color: ${({ theme }) => theme.COLORS.BLUE_BACKGROUND_200};
`;
