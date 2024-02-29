import { DEFAULT_THEME } from '@/styles/theme';
import { ActivityIndicator } from 'react-native';
import * as S from './styles';

export const Loading = () => {
  return (
    <S.LoadingContainer>
      <ActivityIndicator size="large" color={DEFAULT_THEME.COLORS.BLUE_300} />
      <S.LoadingText>Building the house...</S.LoadingText>
    </S.LoadingContainer>
  );
};
