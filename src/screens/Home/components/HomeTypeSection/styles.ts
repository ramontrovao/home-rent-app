import styled from 'styled-components/native';
import type { THomeType } from './types';
import { FlatList } from 'react-native';

export const HomeTypeSectionContainer = styled(FlatList<THomeType>)`
  margin-top: ${({ theme }) => theme.SPACING.LG}px;
  padding-left: ${({ theme }) => theme.SPACING.XL}px;
  max-height: 50px;
`;
