import { THome } from "@/types/home";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const HomeListSectionContainer = styled(FlatList<THome>)`
  margin-top: ${({ theme }) => theme.SPACING.LG};
`;

export const HomeContainer = styled.TouchableOpacity`
  min-width: 220px;
  min-height: 272px;

  flex-direction: column;
  justify-content: space-between;
`;

export const HomeBackgroundImage = styled.ImageBackground`
  padding: ${({ theme }) => theme.SPACING.MD};

  flex: 1;
  justify-content: space-between;

  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD};
`;

export const HomeContent = styled.View`
  gap: ${({ theme }) => theme.SPACING.MD};
`;

export const HomeTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZES.MD};
`;

export const HomeAddress = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZES.SM};
`;
