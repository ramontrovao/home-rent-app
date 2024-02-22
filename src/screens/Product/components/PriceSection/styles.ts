import styled from "styled-components/native";

export const PriceContainer = styled.View`
  padding: ${({ theme }) => theme.SPACING.XL}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceContainerLeftWrapper = styled.View`
  gap: ${({ theme }) => theme.SPACING.MD}px;
`;

export const PriceTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;

export const PriceContent = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;

export const RentButton = styled.TouchableOpacity`
  padding: ${({ theme }) => theme.SPACING.LG}px;

  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD}px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
`;

export const RentText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;
