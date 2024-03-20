import styled from 'styled-components/native';

export const LoadingContainer = styled.View`
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  margin-top: ${({ theme }) => theme.SPACING.LG}px;
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;
