import { THome } from "@/types/home";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const HomeListSectionContainer = styled(FlatList<THome>)`
  margin-top: ${({ theme }) => theme.SPACING.LG};
`;

export const HomeContainer = styled.TouchableOpacity`
  flex: 1;
  min-width: 220px;
  min-height: 270px;
`;

export const HomeBackgroundImage = styled.ImageBackground`
  flex: 1;
`;

export const BackdropContainer = styled.View`
  flex: 1;
  justify-content: flex-end;

  padding: ${({ theme }) => theme.SPACING.XL};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.LG};
  background-color: rgba(0, 0, 0, 0.4);
`;

export const HomeContent = styled.View`
  gap: ${({ theme }) => theme.SPACING.MD};
`;

export const HomeTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZES.LG};
`;

export const HomeAddress = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
`;
