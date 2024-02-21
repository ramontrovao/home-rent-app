import styled from "styled-components/native";

export const DescriptionContainer = styled.View`
  margin-top: ${({ theme }) => theme.SPACING.XXL}px;
`;

export const DescriptionTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;

export const DescriptionContent = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  margin-top: ${({ theme }) => theme.SPACING.MD}px;
`;
