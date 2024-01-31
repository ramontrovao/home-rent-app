import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  padding: ${({ theme }) => theme.SPACING.XL};

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.SPACING.SM};
`;

export const LeftWrapper = styled.View`
  flex-direction: column;
  gap: ${({ theme }) => theme.SPACING.SM};
`;

export const LocationText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const LocationNameContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.FONT_SIZES.LG};
`;

export const LocationNameText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.LG};

  color: ${({ theme }) => theme.COLORS.BLACK};
`;
