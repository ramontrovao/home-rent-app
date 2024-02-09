import type { THome } from "@/types/home";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const BestForYouSectionContainer = styled.View`
  flex-direction: column;
  margin-top: ${({ theme }) => theme.SPACING.XXL}px;
  padding: 0 ${({ theme }) => theme.SPACING.XL}px 0 ${({ theme }) => theme.SPACING.XL}px;

  flex: 1;
`;

export const BestForYouHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const BestForYouTitleText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZES.LG}px;
`;

export const BestForYouSeeMoreText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;

export const BestForYouListContainer = styled(FlatList<THome>)`
  margin-top: ${({ theme }) => theme.SPACING.LG}px;
`;
