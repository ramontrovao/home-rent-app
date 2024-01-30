import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  padding: 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  background-color: #fafafa;
`;

export const LeftWrapper = styled.View`
  flex-direction: column;
  gap: 4px;
`;

export const LocationText = styled.Text`
  color: #838383;
  font-size: 16px;
`;

export const LocationNameContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const LocationNameText = styled.Text`
  font-size: 22px;
  color: #000;
`;
