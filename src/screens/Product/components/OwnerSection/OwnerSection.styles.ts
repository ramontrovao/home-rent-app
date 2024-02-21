import styled from "styled-components/native";

export const OwnerContainer = styled.View`
  padding: ${({ theme }) => theme.SPACING.XL}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OwnerContainerLeftWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.SPACING.LG}px;
`;

export const OwnerImage = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: ${({ theme }) => theme.BORDER_RADIUS.XXXL}px;
`;

export const OwnerInformation = styled.View`
  gap: ${({ theme }) => theme.SPACING.MD}px;
`;

export const OwnerTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;

export const OwnerLabel = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;

export const OwnerContainerRightWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.SPACING.XL}px;
`;

export const OwnerContainerInformationButton = styled.View`
  padding: ${({ theme }) => theme.SPACING.MD}px;

  justify-content: center;
  align-items: center;

  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD}px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_300};
`;
