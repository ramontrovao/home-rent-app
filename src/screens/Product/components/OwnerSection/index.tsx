import * as S from "./styles";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DEFAULT_THEME } from "@/styles/theme";
import { TouchableOpacity } from "react-native";
import { OwnerSectionProps } from "./types";

export const OwnerSection = ({ owner }: OwnerSectionProps) => {
  return (
    <S.OwnerContainer>
      <S.OwnerContainerLeftWrapper>
        <S.OwnerImage testID="owner-image" source={{ uri: owner.photoUri }} />

        <S.OwnerInformation>
          <S.OwnerTitle>{owner.name}</S.OwnerTitle>
          <S.OwnerLabel>Owner</S.OwnerLabel>
        </S.OwnerInformation>
      </S.OwnerContainerLeftWrapper>

      <S.OwnerContainerRightWrapper>
        <TouchableOpacity>
          <S.OwnerContainerInformationButton>
            <Icon name="phone" size={24} color={DEFAULT_THEME.COLORS.WHITE} />
          </S.OwnerContainerInformationButton>
        </TouchableOpacity>

        <TouchableOpacity>
          <S.OwnerContainerInformationButton>
            <Icon name="message" size={24} color={DEFAULT_THEME.COLORS.WHITE} />
          </S.OwnerContainerInformationButton>
        </TouchableOpacity>
      </S.OwnerContainerRightWrapper>
    </S.OwnerContainer>
  );
};
