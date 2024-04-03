import type { THome } from '@type/home';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';

export const HomeListSectionContainer = styled(FlatList<THome>)`
  flex: 1;
  min-height: 300px;
  margin-top: ${({ theme }) => theme.SPACING.LG}px;
  padding-left: ${({ theme }) => theme.SPACING.XL}px;
`;
