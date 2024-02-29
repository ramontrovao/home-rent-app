import styled from 'styled-components/native';

export const HomeContainer = styled.ScrollView`
  flex: 1;

  background: ${({ theme }) => theme.COLORS.GRAY_BACKGROUND_100};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  color: ${({ theme }) => theme.COLORS.BLUE_300};
`;
