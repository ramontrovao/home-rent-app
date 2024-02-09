import styled from "styled-components/native";

export const HomeCardContainer = styled.TouchableOpacity`
  flex: 1;
  min-width: 220px;
`;

export const HomeCardBackgroundImage = styled.ImageBackground`
  flex: 1;
`;

export const BackdropContainer = styled.View`
  flex: 1;
  justify-content: flex-end;

  padding: ${({ theme }) => theme.SPACING.XL}px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.LG}px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const HomeCardContent = styled.View`
  gap: ${({ theme }) => theme.SPACING.MD}px;
`;

export const HomeCardTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZES.LG}px;
`;

export const HomeCardAddress = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;
