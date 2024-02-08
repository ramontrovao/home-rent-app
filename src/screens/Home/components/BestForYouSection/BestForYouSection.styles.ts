import type { THome } from "@/types/home";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import type { HomeInfoWrapperStyledProps } from "./BestForYouSection.types";

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

export const BestForYouCardContainer = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  gap: ${({ theme }) => theme.SPACING.LG}px;
`;

export const BestForYouCardRightWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const HomeImage = styled.Image`
  flex: 1;
  max-width: 100px;
  height: 85px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD}px;
`;

export const HomeNameText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZES.LG}px;
`;

export const HomePriceText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLUE_300};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;

export const HomeInfoWrapper = styled.View<HomeInfoWrapperStyledProps>`
  padding-bottom: ${({ hasPadding, theme }) => hasPadding ? `${theme.SPACING.XXL}px` : 0};

  flex-direction: row;
  gap: ${({ theme }) => theme.SPACING.LG}px;
`;

export const HomeInfoContainer = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.SPACING.LG}px;
`;

export const HomeInfoText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
`;