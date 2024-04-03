import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import type { THomeType } from '@/type/home-type';

export const HomeTypeSectionContainer = styled(FlatList<THomeType>)`
  margin-top: ${({ theme }) => theme.SPACING.LG}px;
  padding-left: ${({ theme }) => theme.SPACING.XL}px;
  max-height: 50px;
`;
