import { THome } from "@/types/home";
import { FlatList } from "react-native";
import styled from "styled-components/native";

export const HomeListSectionContainer = styled(FlatList<THome>)`
  margin-top: ${({ theme }) => theme.SPACING.LG}px;
  padding-left: ${({ theme }) => theme.SPACING.XL}px;
`;
