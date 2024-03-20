import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as S from './styles';

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LeftWrapper>
        <S.LocationText testID="location_title">Location</S.LocationText>

        <S.LocationNameContainer>
          <S.LocationNameText testID="location_content">
            Centro de Vitória
          </S.LocationNameText>

          <Icon name="chevron-down" size={32} color="#838383" />
        </S.LocationNameContainer>
      </S.LeftWrapper>

      <TouchableOpacity>
        <Icon name="bell-outline" size={32} />
      </TouchableOpacity>
    </S.HeaderContainer>
  );
};
