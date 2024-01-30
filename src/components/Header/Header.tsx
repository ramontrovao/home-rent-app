import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import RNPickerSelect from "react-native-picker-select";
import * as S from "./Header.styles"
import { TouchableOpacity } from "react-native";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LeftWrapper>  
        <S.LocationText>Location</S.LocationText>

        <S.LocationNameContainer>
            <S.LocationNameText>Serra</S.LocationNameText>

            <Icon name="chevron-down" size={32} color="#838383" />
        </S.LocationNameContainer>
      </S.LeftWrapper>

      <TouchableOpacity>
        <Icon name="bell-outline" size={32} />
      </TouchableOpacity>
    </S.HeaderContainer>
  )
}