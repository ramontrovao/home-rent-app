import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  padding: ${({ theme }) => theme.SPACING.XL}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.SPACING.SM}px;
`;

export const LeftWrapper = styled.View`
  flex-direction: column;
  gap: ${({ theme }) => theme.SPACING.SM}px;
`;

export const LocationText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.MD}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const LocationNameContainer = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.FONT_SIZES.LG}px;
`;

export const LocationNameText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZES.LG}px;

  color: ${({ theme }) => theme.COLORS.BLACK};
`;
