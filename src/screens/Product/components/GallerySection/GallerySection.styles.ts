import styled from "styled-components/native";
import type { GalleryImageStyledProps } from "./GallerySection.types";
import { FlatList } from "react-native";

export const GallerySectionContainer = styled.View`
  padding: ${({ theme }) => theme.SPACING.XL}px;
`;

export const GalleryContainer = styled.View`
  margin-top: ${({ theme }) => theme.SPACING.MD}px;
`;

export const GallerySlider = styled(FlatList<string>)`
  margin-top: ${({ theme }) => theme.SPACING.MD}px;
`;

export const GalleryText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
`;

export const GalleryImage = styled.Image<GalleryImageStyledProps>`
  width: 72px;
  height: 72px;

  border-width: 2px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD}px;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.COLORS.BLUE_300 : "transparent"};
`;
