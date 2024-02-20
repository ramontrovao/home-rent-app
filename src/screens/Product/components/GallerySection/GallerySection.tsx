import * as S from "./GallerySection.styles";
import { HOMES_MOCK } from "@/constants/mocks";
import { PreviewCard } from "./PreviewCard/PreviewCard";
import { type ListRenderItem, TouchableOpacity } from "react-native";
import { useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { DEFAULT_THEME } from "@/styles/theme";

export const GallerySection = () => {
  const [imageSelectedIndex, setimageSelectedIndex] = useState(0);
  const selectedImage = HOMES_MOCK[0].imagesUri[imageSelectedIndex];

  const renderImages: ListRenderItem<string> = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => setimageSelectedIndex(index)}>
        <S.GalleryImage isSelected={imageSelectedIndex === index} src={item} />
      </TouchableOpacity>
    );
  };

  return (
    <S.GallerySectionContainer>
      <PreviewCard selectedImage={selectedImage} home={HOMES_MOCK[0]} />

      <S.GalleryContainer>
        <S.GalleryTitle>Gallery</S.GalleryTitle>

        <S.GallerySlider
          data={HOMES_MOCK[0].imagesUri}
          renderItem={renderImages}
          contentContainerStyle={{ gap: DEFAULT_THEME.SPACING.MD }}
          keyExtractor={(imageUri) => imageUri}
          horizontal
        />
      </S.GalleryContainer>

      <S.DescriptionContainer>
        <S.DescriptionTitle>Description</S.DescriptionTitle>

        <S.DescriptionContent>{HOMES_MOCK[0].description}</S.DescriptionContent>
      </S.DescriptionContainer>

      <S.OwnerContainer>
        <S.OwnerContainerLeftWrapper>
          <S.OwnerImage src={HOMES_MOCK[0].owner.photoUri} />

          <S.OwnerInformation>
            <S.OwnerTitle>{HOMES_MOCK[0].owner.name}</S.OwnerTitle>
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
              <Icon
                name="message"
                size={24}
                color={DEFAULT_THEME.COLORS.WHITE}
              />
            </S.OwnerContainerInformationButton>
          </TouchableOpacity>
        </S.OwnerContainerRightWrapper>
      </S.OwnerContainer>

      <S.PriceContainer>
        <S.PriceContainerLeftWrapper>
          <S.PriceTitle>Price</S.PriceTitle>

          <S.PriceContent>Rp. 2.500.000.000 / Year</S.PriceContent>
        </S.PriceContainerLeftWrapper>

        <S.RentButton>
          <S.RentText>Rent Now</S.RentText>
        </S.RentButton>
      </S.PriceContainer>
    </S.GallerySectionContainer>
  );
};
