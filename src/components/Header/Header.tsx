import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import RNPickerSelect from "react-native-picker-select";
import * as S from "./Header.styles"
import { StyleSheet, TouchableOpacity } from "react-native";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.LeftWrapper>  
        <S.LocationText>Location</S.LocationText>

        <RNPickerSelect
                onValueChange={(language) => console.log(language)}
                placeholder={{ label: "Select your location", value: "null" }}
                items={[
                    { label: "Espírito Santo", value: "ES" },
                ]}

            />
      </S.LeftWrapper>

      <TouchableOpacity>
        <Icon name="bell-outline" size={32} />
      </TouchableOpacity>
    </S.HeaderContainer>
  )
}