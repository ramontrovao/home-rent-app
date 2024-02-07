import styled from "styled-components/native";

export const BestForYouSectionContainer = styled.View`
  margin-top: ${({ theme }) => theme.SPACING.XXL}px;

  flex: 1;
`

export const BestForYouHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const BestForYouTitleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZES.LG};
`

export const BestForYouSeeMoreText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
`