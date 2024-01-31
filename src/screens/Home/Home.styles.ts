import styled from "styled-components/native";

export const MainContainer = styled.View`
  padding: 0 ${({ theme }) => theme.SPACING.XL};

  flex: 1;

  background: ${({ theme }) => theme.COLORS.GRAY_BACKGROUND_100};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
`;
