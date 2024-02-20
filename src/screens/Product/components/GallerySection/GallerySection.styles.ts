import styled from "styled-components/native";
import type { GalleryImageStyledProps } from "./GallerySection.types";
import { FlatList } from "react-native";

export const GallerySectionContainer = styled.View`
  padding: ${({ theme }) => theme.SPACING.XL}px;
`;

export const GalleryContainer = styled.View`
  margin-top: ${({ theme }) => theme.SPACING.XXL}px;
`;

export const GallerySlider = styled(FlatList<string>)`
  margin-top: ${({ theme }) => theme.SPACING.MD}px;
`;

export const GalleryTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
`;

export const GalleryImage = styled.Image<GalleryImageStyledProps>`
  width: 85px;
  height: 85px;

  border-width: 2px;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD}px;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.COLORS.BLUE_300 : "transparent"};
`;

export const DescriptionContainer = styled.View`
  margin-top: ${({ theme }) => theme.SPACING.XXL}px;
`;

export const DescriptionTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
`;

export const DescriptionContent = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
  margin-top: ${({ theme }) => theme.SPACING.MD}px;
`;

export const OwnerContainer = styled.View`
  margin-top: ${({ theme }) => theme.SPACING.XXL}px;

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
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
`;

export const OwnerLabel = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
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

export const PriceContainer = styled.View`
  margin-top: ${({ theme }) => theme.SPACING.XXL}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PriceContainerLeftWrapper = styled.View`
  gap: ${({ theme }) => theme.SPACING.MD}px;
`;

export const PriceTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
`;

export const PriceContent = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
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
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
`;
