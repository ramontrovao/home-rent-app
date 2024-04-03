import styled from 'styled-components/native';
import type { HomeTypeCardContainerStyledProps } from './types';

export const HomeTypeCardContainer = styled.TouchableOpacity<HomeTypeCardContainerStyledProps>`
  padding: ${({ theme }) => theme.SPACING.LG}px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme, isSelected }) =>
    isSelected
      ? theme.COLORS.BLUE_BACKGROUND_200
      : theme.COLORS.GRAY_BACKGROUND_200};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.MD}px;
`;

export const HomeTypeCardText = styled.Text<HomeTypeCardContainerStyledProps>`
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.COLORS.WHITE : theme.COLORS.BLACK};
`;
