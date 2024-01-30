import styled from "styled-components/native";

export const FilterSectionContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`;

export const FilterInputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_BACKGROUND_200};
`;

export const FilterIconContainer = styled.View`
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

export const FilterTextInput = styled.TextInput`
  background-color: transparent;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: 16px;
  padding: 16px;
`;

export const FilterButton = styled.TouchableOpacity`
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #0a8ed9;
`;
