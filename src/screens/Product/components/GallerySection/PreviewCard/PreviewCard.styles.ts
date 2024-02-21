import styled from "styled-components/native";

export const PreviewCardContainer = styled.View`
  flex: 1;
  min-height: 375px;
`;

export const PreviewCardBackgroundImage = styled.ImageBackground`
  flex: 1;
`;

export const BackdropContainer = styled.View`
  flex: 1;
  justify-content: space-between;

  padding: ${({ theme }) => theme.SPACING.XL}px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.LG}px;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const PreviewCardHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PreviewCardHeaderIconContainer = styled.View`
  padding: ${({ theme }) => theme.SPACING.LG}px;

  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 999px;
`;

export const PreviewCardContent = styled.View`
  gap: ${({ theme }) => theme.SPACING.MD}px;
`;

export const PreviewCardTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZES.LG}px;
  font-weight: bold;
`;

export const PreviewCardAddress = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;

export const PreviewCardInformationWrapper = styled.View`
  margin-top: ${({ theme }) => theme.SPACING.MD}px;

  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.SPACING.XXL}px;
`;

export const PreviewCardInformationContainer = styled.View`
  flex-direction: row;
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.SPACING.MD}px;
`;

export const PreviewCardInformationText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;

export const PreviewCardInformationIconContainer = styled.View`
  padding: ${({ theme }) => theme.SPACING.SM}px;

  justify-content: center;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.3);
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.SM}px;
`;
